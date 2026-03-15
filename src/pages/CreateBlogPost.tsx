import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2, Link as LinkIcon, FileText, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createBlogPost } from "@/services/bubbleApi";
import { useToast } from "@/hooks/use-toast";

const CreateBlogPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Scroll to top on load
  useState(() => {
    window.scrollTo(0, 0);
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      toast({
        title: "Missing Fields",
        description: "Please fill in the title and description.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload: { Title: string; Description: string; Image?: string } = {
        Title: title,
        Description: description,
      };

      if (image.trim()) {
        payload.Image = image;
      }

      const newId = await createBlogPost(payload);
      
      toast({
        title: "Success",
        description: "Blog post successfully created in Bubble DB.",
      });
      
      setTitle("");
      setDescription("");
      setImage("");
      
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create blog post. Please check console.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 md:pt-32 pb:24">
        <div className="container max-w-3xl px-6 mx-auto">
          
          <Button variant="ghost" asChild className="mb-6 -ml-4 text-muted-foreground hover:text-[#008080]">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
          </Button>

          <header className="mb-8 border-b pb-6">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#0a3d3d]">
              Create New Blog Post
            </h1>
            <p className="text-muted-foreground mt-2">
              Publish a new article to the Bubble database.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium text-[#0a3d3d] flex items-center">
                <FileText className="w-4 h-4 mr-2 text-[#008080]" />
                Post Title *
              </label>
              <Input 
                id="title"
                placeholder="Enter an engaging title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="focus-visible:ring-[#008080]"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="image" className="text-sm font-medium text-[#0a3d3d] flex items-center">
                <ImageIcon className="w-4 h-4 mr-2 text-[#008080]" />
                Feature Image URL (Optional)
              </label>
              <Input 
                id="image"
                placeholder="https://example.com/image.jpg"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="focus-visible:ring-[#008080]"
                type="url"
              />
              <p className="text-xs text-muted-foreground">Provide a valid image link to display at the top of the post.</p>
            </div>

            <div className="space-y-2 flex-grow flex flex-col h-full">
              <label htmlFor="description" className="text-sm font-medium text-[#0a3d3d] flex items-center">
                <LinkIcon className="w-4 h-4 mr-2 text-[#008080]" />
                Content (BBCode or Text) *
              </label>
              <Textarea 
                id="description"
                placeholder="Write your article here... You can use BBCode tags like [b]text[/b] or [h2]Heading[/h2]."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[300px] focus-visible:ring-[#008080] resize-y"
                required
              />
            </div>

            <div className="pt-4 flex items-center justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} className="bg-[#008080] text-white hover:bg-[#005c5c] min-w-[140px]">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Publishing...
                  </>
                ) : "Publish Post"}
              </Button>
            </div>
          </form>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateBlogPost;
