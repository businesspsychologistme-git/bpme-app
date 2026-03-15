import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogById, BlogPost } from "@/services/bubbleApi";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { parseBBCodeToHtml } from "@/utils/bbcodeParser";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: blog, isLoading, error } = useQuery({
    queryKey: ["bubble-blog", id],
    queryFn: () => getBlogById(id!),
    enabled: !!id,
  });

  // Scroll to top on load
  window.scrollTo(0, 0);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center py-24">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#008080]"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center py-24 px-6 text-center">
          <h1 className="text-3xl font-bold text-[#0a3d3d] mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't load the requested article from our database.</p>
          <Button asChild className="bg-[#008080] hover:bg-[#005c5c]">
            <Link to="/">Return Home</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const title = blog.Name || blog.Title || blog.title || "Untitled Article";
  const rawContent = blog.Description || blog.Content || blog.content || "";
  const content = parseBBCodeToHtml(rawContent);
  const imageUrl = blog.Image || blog.image;
  const author = blog.Author || blog.author || "BPME Team";
  const createdDate = blog["Created Date"] || blog["Modified Date"] || null;
  
  let formattedDate = "";
  if (createdDate) {
    try {
      formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(createdDate));
    } catch(e) {}
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 md:pt-32 pb:24">
        <article className="container max-w-4xl px-6 mx-auto">
          
          <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-[#008080]">
            <Link to="/#blogs">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles
            </Link>
          </Button>

          <header className="mb-10 text-center md:text-left">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a3d3d] leading-tight mb-6">
              {title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#e6f2f2] flex items-center justify-center mr-2 text-[#008080]">
                   <User className="w-4 h-4" />
                </div>
                <span className="font-medium text-foreground">{author}</span>
              </div>
              
              {formattedDate && (
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formattedDate}</span>
                </div>
              )}
              
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{Math.max(1, Math.ceil(content.length / 1000))} min read</span>
              </div>
            </div>
          </header>

          {imageUrl && (
            <figure className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-border/50">
              <img 
                src={imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl} 
                alt={title} 
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </figure>
          )}

          <div 
            className="prose prose-lg prose-[#008080] max-w-none prose-headings:font-display prose-headings:text-[#0a3d3d] prose-a:text-[#008080] prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
