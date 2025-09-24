import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - FreeTools",
  description: "Read the latest articles, tips, and tutorials about online tools, productivity, and web development from the FreeTools team.",
  keywords: ["freetools blog", "web tools blog", "productivity tips", "online tools tutorials", "development tools"],
};

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Online Tools Every Developer Should Know",
    excerpt: "Discover the must-have online tools that can boost your productivity and streamline your development workflow.",
    content: "In today's fast-paced development environment, having the right tools can make all the difference...",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Development",
    image: "/api/placeholder/600/400",
    slug: "essential-online-tools-developers"
  },
  {
    id: 2,
    title: "How to Create Strong Passwords: A Complete Guide",
    excerpt: "Learn the best practices for creating secure passwords and protecting your online accounts from cyber threats.",
    content: "Password security is more important than ever in our digital age...",
    author: "Mike Chen",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Security",
    image: "/api/placeholder/600/400",
    slug: "create-strong-passwords-guide"
  },
  {
    id: 3,
    title: "The Ultimate Guide to QR Codes for Business",
    excerpt: "Everything you need to know about using QR codes effectively in your business marketing and operations.",
    content: "QR codes have become an essential tool for businesses looking to bridge the gap between physical and digital experiences...",
    author: "Emily Davis",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Business",
    image: "/api/placeholder/600/400",
    slug: "ultimate-guide-qr-codes-business"
  },
  {
    id: 4,
    title: "Understanding Base64 Encoding: A Developer's Guide",
    excerpt: "Deep dive into Base64 encoding, how it works, and when to use it in your applications.",
    content: "Base64 encoding is a fundamental concept in web development and data transmission...",
    author: "Sarah Johnson",
    date: "2024-01-08",
    readTime: "8 min read",
    category: "Development",
    image: "/api/placeholder/600/400",
    slug: "understanding-base64-encoding-guide"
  },
  {
    id: 5,
    title: "Color Theory for Web Designers: Choosing the Perfect Palette",
    excerpt: "Master the art of color selection and create visually appealing websites that engage your audience.",
    content: "Color is one of the most powerful tools in a designer's arsenal...",
    author: "Mike Chen",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "Design",
    image: "/api/placeholder/600/400",
    slug: "color-theory-web-designers-guide"
  },
  {
    id: 6,
    title: "Image Optimization: Balancing Quality and Performance",
    excerpt: "Learn how to compress images effectively without sacrificing quality for faster loading websites.",
    content: "Images are often the largest contributors to page load times...",
    author: "Emily Davis",
    date: "2024-01-03",
    readTime: "6 min read",
    category: "Performance",
    image: "/api/placeholder/600/400",
    slug: "image-optimization-quality-performance"
  },
  {
    id: 7,
    title: "Lorem Ipsum: More Than Just Placeholder Text",
    excerpt: "The history and proper use of Lorem Ipsum in design and typography.",
    content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    author: "Sarah Johnson",
    date: "2024-01-01",
    readTime: "4 min read",
    category: "Design",
    image: "/api/placeholder/600/400",
    slug: "lorem-ipsum-placeholder-text"
  },
  {
    id: 8,
    title: "Markdown vs HTML: When to Use Which",
    excerpt: "A comprehensive comparison of Markdown and HTML, helping you choose the right format for your content.",
    content: "Both Markdown and HTML have their place in content creation...",
    author: "Mike Chen",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Development",
    image: "/api/placeholder/600/400",
    slug: "markdown-vs-html-comparison"
  },
  {
    id: 9,
    title: "Unit Conversion Made Easy: Tips and Tricks",
    excerpt: "Master unit conversions with these helpful tips and understand the mathematics behind them.",
    content: "Unit conversion is a skill that comes in handy in many aspects of life...",
    author: "Emily Davis",
    date: "2023-12-25",
    readTime: "5 min read",
    category: "Education",
    image: "/api/placeholder/600/400",
    slug: "unit-conversion-tips-tricks"
  }
];

const categories = ["All", "Development", "Design", "Security", "Business", "Performance", "Education"];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">FreeTools Blog</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, tutorials, and tips about online tools, productivity, and web development
            </p>
            <Button asChild size="lg">
              <Link href="/tools">
                Explore Our Tools <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="h-9"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <Badge variant="secondary" className="text-white bg-black/50">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl leading-tight line-clamp-2">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest articles and updates delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}