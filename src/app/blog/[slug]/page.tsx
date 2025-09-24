import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2, Heart } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential Online Tools Every Developer Should Know",
    excerpt: "Discover the must-have online tools that can boost your productivity and streamline your development workflow.",
    content: `# 10 Essential Online Tools Every Developer Should Know

In today's fast-paced development environment, having the right tools can make all the difference. Whether you're a seasoned developer or just starting your coding journey, these essential online tools will help you work smarter, not harder.

## 1. Text to Uppercase Converter
Sometimes you need to quickly format text for headers, titles, or emphasis. A text to uppercase converter saves you time and ensures consistency across your project.

## 2. Word Counter
For developers who write documentation, blog posts, or technical articles, a word counter is invaluable. It helps you track your progress and meet content requirements.

## 3. Password Generator
Security should always be a priority. A reliable password generator helps you create strong, unique passwords for different services and applications.

## 4. QR Code Generator
QR codes are increasingly popular for sharing URLs, contact information, and other data. A good QR code generator makes it easy to create these codes for your projects.

## 5. Base64 Encoder/Decoder
Working with data encoding is a common task in web development. A Base64 encoder/decoder tool helps you quickly convert between text and Base64 format.

## 6. Color Picker Tool
Design and development often go hand in hand. A color picker tool helps you select and convert colors between different formats like HEX, RGB, and HSL.

## 7. Image Compressor
Optimizing images is crucial for web performance. An image compressor helps you reduce file sizes without sacrificing too much quality.

## 8. Lorem Ipsum Generator
When you need placeholder text for designs or prototypes, a Lorem ipsum generator saves you time and provides realistic text samples.

## 9. Markdown to HTML Converter
Many developers prefer writing in Markdown, but sometimes you need HTML output. A converter tool makes this transformation seamless.

## 10. Unit Converter
Whether you're working with CSS units, data sizes, or other measurements, a unit converter helps you quickly switch between different units.

## Conclusion

These tools may seem simple, but they can significantly improve your productivity as a developer. By having quick access to these utilities, you can focus more on coding and less on formatting and conversion tasks.

Remember, the best tools are those that save you time and reduce friction in your workflow. Start incorporating these essential tools into your daily development routine and watch your productivity soar!`,
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
    content: `# How to Create Strong Passwords: A Complete Guide

Password security is more important than ever in our digital age. With cyber threats on the rise, creating strong passwords is your first line of defense against unauthorized access to your accounts.

## Why Strong Passwords Matter

Weak passwords are like leaving your front door unlocked. They make it easy for hackers to gain access to your personal information, financial data, and online identity.

## Characteristics of a Strong Password

A strong password should have:
- At least 12 characters
- A mix of uppercase and lowercase letters
- Numbers and special characters
- No personal information or common words
- No patterns or sequences

## Best Practices for Password Creation

### 1. Use a Password Generator
Instead of trying to create complex passwords yourself, use a reliable password generator. These tools create random, secure passwords that are difficult to crack.

### 2. Make It Memorable (But Not Too Memorable)
While passwords should be complex, you still need to remember them. Consider using passphrases - combinations of random words that are easier to remember but still secure.

### 3. Never Reuse Passwords
Each account should have a unique password. Reusing passwords across multiple accounts puts all your accounts at risk if one is compromised.

### 4. Update Passwords Regularly
Change your passwords every few months, especially for important accounts like email and banking.

### 5. Use Two-Factor Authentication
Whenever possible, enable two-factor authentication (2FA) for an extra layer of security.

## Common Password Mistakes to Avoid

- Using personal information (birthdays, names, etc.)
- Creating simple patterns (123456, qwerty, etc.)
- Using dictionary words
- Writing passwords down
- Sharing passwords with others

## Conclusion

Creating strong passwords is essential for protecting your online identity. By following these best practices and using tools like password generators, you can significantly improve your online security.

Remember, your password is the key to your digital life - make sure it's strong and secure!`,
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
    content: `# The Ultimate Guide to QR Codes for Business

QR codes have become an essential tool for businesses looking to bridge the gap between physical and digital experiences. These versatile codes can be used in countless ways to enhance customer engagement and streamline operations.

## What Are QR Codes?

QR (Quick Response) codes are two-dimensional barcodes that can store various types of information. When scanned with a smartphone camera, they can instantly direct users to websites, display contact information, or trigger specific actions.

## Benefits of QR Codes for Business

### 1. Contactless Interactions
In today's health-conscious world, QR codes enable contactless interactions, making them perfect for menus, check-ins, and payments.

### 2. Easy Information Sharing
QR codes make it simple to share URLs, contact details, Wi-Fi credentials, and other information without manual typing.

### 3. Trackable Marketing
You can track QR code scans to measure the effectiveness of your marketing campaigns.

### 4. Cost-Effective
Generating QR codes is free, making them an affordable marketing tool for businesses of all sizes.

## Creative Ways to Use QR Codes in Business

### Marketing Materials
- Business cards with QR codes linking to your portfolio
- Brochures with QR codes for additional information
- Product packaging with QR codes for user manuals

### Restaurant Industry
- Digital menus
- Online ordering systems
- Customer feedback forms

### Retail
- Product information and reviews
- Loyalty program enrollment
- Special offers and discounts

### Events
- Registration and check-in
- Event schedules and maps
- Networking contact sharing

## Best Practices for QR Code Implementation

### 1. Make It Large Enough
Ensure your QR code is at least 2x2 cm (0.8x0.8 inches) for reliable scanning.

### 2. Provide Clear Instructions
Include a call-to-action like "Scan to learn more" or "Scan for menu."

### 3. Test Thoroughly
Test your QR codes on different devices and in various lighting conditions.

### 4. Use High Contrast
Ensure there's good contrast between the QR code and its background.

### 5. Add Your Branding
Consider adding your logo in the center of the QR code (while maintaining scanability).

## Conclusion

QR codes are a powerful tool for businesses looking to enhance customer experience and streamline operations. By implementing them strategically and following best practices, you can leverage this technology to grow your business and stay ahead of the competition.

Start experimenting with QR codes today and discover how they can transform your business operations!`,
    author: "Emily Davis",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Business",
    image: "/api/placeholder/600/400",
    slug: "ultimate-guide-qr-codes-business"
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found - FreeTools Blog",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  return {
    title: `${post.title} - FreeTools Blog`,
    description: post.excerpt,
    keywords: [post.category, "freetools blog", "online tools", "productivity"],
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <div className="mb-8">
          <Button asChild variant="ghost">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="mb-6">
            <Badge variant="secondary">{post.category}</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <div 
                      dangerouslySetInnerHTML={{ 
                        __html: post.content.replace(/\n/g, '<br>').replace(/### (.*$)/gim, '<h3>$1</h3>').replace(/## (.*$)/gim, '<h2>$1</h2>').replace(/# (.*$)/gim, '<h1>$1</h1>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')
                      }} 
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Card */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-primary">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2">{post.author}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Writer & Developer
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* CTA for Ads */}
              <Card className="bg-muted/30 mb-6">
                <CardContent className="p-6 text-center">
                  <div className="text-sm text-muted-foreground mb-2">
                    Advertisement
                  </div>
                  <div className="h-32 bg-muted rounded flex items-center justify-center">
                    <span className="text-muted-foreground">Ad Space</span>
                  </div>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Related Posts</h3>
                  <div className="space-y-3">
                    {blogPosts
                      .filter(p => p.id !== post.id && p.category === post.category)
                      .slice(0, 3)
                      .map(relatedPost => (
                        <Link
                          key={relatedPost.id}
                          href={`/blog/${relatedPost.slug}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {relatedPost.readTime}
                          </p>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}