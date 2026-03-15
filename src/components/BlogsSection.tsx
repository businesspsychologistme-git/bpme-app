import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getBlogs, BlogPost } from "@/services/bubbleApi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogsSection = () => {
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ["bubble-blogs"],
    queryFn: getBlogs,
  });

  return (
    <section className="py-16 md:py-24 bg-white" id="blogs">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center p-2 mb-4 rounded-xl bg-[#e6f2f2]">
            <BookOpen className="w-5 h-5 text-[#008080]" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#0a3d3d]">
            Latest Business Psychology Insights
          </h2>
          <p className="text-muted-foreground md:text-lg text-balance">
            Explore evidence-based articles, research highlights, and practical frameworks to elevate both individual and organizational performance in the Middle East context.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse shadow-sm border-0 h-[400px]">
                <div className="h-48 bg-gray-200"></div>
                <CardHeader>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center p-8 bg-red-50 text-red-600 rounded-lg">
            <p>Failed to load articles. Please check your Bubble API settings.</p>
          </div>
        ) : blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog: BlogPost) => {
              // Extract fields dynamically in case Bubble capitalized them
              const title = blog.Name || blog.Title || blog.title || "Untitled Article";
              const content = blog.Description || blog.Content || blog.content || "";
              const excerpt = content.replace(/\[.*?\]/g, "").replace(/<[^>]+>/g, "").substring(0, 120) + "..."; // Strip BBCode, HTML and limit string
              const imageUrl = blog.Image || blog.image;
              const createdDate = blog["Created Date"] || blog["Modified Date"] || null;
              
              let formattedDate = "Recent";
              if (createdDate) {
                try {
                  formattedDate = new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(createdDate));
                } catch(e) {}
              }

              return (
                <Card key={blog._id} className="overflow-hidden border-border/50 hover:shadow-md transition-shadow flex flex-col h-full bg-white group cursor-pointer">
                  {imageUrl ? (
                    <div className="h-48 w-full overflow-hidden">
                      <img 
                        src={imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl} 
                        alt={title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="h-48 w-full bg-[#f0f7f7] flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-[#008080]/20" />
                    </div>
                  )}
                  
                  <CardHeader className="pb-3 flex-grow">
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                       <Calendar className="w-3 h-3 mr-1" />
                       {formattedDate}
                    </div>
                    <CardTitle className="text-xl leading-tight line-clamp-2 text-[#0a3d3d] group-hover:text-[#008080] transition-colors">{title}</CardTitle>
                    <CardDescription className="line-clamp-3 mt-2">{excerpt}</CardDescription>
                  </CardHeader>
                  
                  <CardFooter className="pt-0 relative top-0 z-10">
                    <Button variant="ghost" className="p-0 h-auto text-[#008080] font-medium group-hover:text-[#005c5c]" asChild>
                      <Link to={`/blog/${blog._id}`} className="flex items-center">
                        Read full article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        ) : (
           <div className="text-center p-8 bg-gray-50 text-gray-500 rounded-lg">
             <p>No articles found.</p>
           </div>
        )}
      </div>
    </section>
  );
};

export default BlogsSection;
