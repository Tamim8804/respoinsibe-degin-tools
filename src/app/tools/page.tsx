import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wrench, Clock, Shield, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "18+ Free Online Tools - FreeTools",
  description: "Explore our collection of 18+ free online tools including text converters, password generators, QR code creators, and more. All tools are free, secure, and easy to use.",
  keywords: ["free tools", "online tools", "text converter", "password generator", "QR code generator", "word counter", "base64 encoder", "color picker", "image compressor", "lorem ipsum generator", "markdown converter", "unit converter", "currency converter", "calendar generator", "pdf merger", "image to base64", "markdown editor", "emoji picker", "password strength checker", "invoice generator"],
};

export default function ToolsPage() {
  const tools = [
    {
      name: "Text to Uppercase Converter",
      description: "Convert any text to uppercase instantly. Perfect for formatting titles, headers, and emphasizing text content.",
      href: "/tools/text-to-uppercase",
      icon: "📝",
      category: "Text Tools",
      features: ["Instant conversion", "No character limit", "Copy to clipboard"]
    },
    {
      name: "Word Counter",
      description: "Count words, characters, sentences, and paragraphs in your text. Essential for writers, students, and content creators.",
      href: "/tools/word-counter",
      icon: "🔢",
      category: "Text Tools",
      features: ["Word count", "Character count", "Reading time estimate"]
    },
    {
      name: "Password Generator",
      description: "Generate strong, secure passwords with customizable options. Create passwords that meet specific security requirements.",
      href: "/tools/password-generator",
      icon: "🔐",
      category: "Security Tools",
      features: ["Customizable length", "Include symbols", "Copy to clipboard"]
    },
    {
      name: "QR Code Generator",
      description: "Create QR codes for URLs, text, contact information, and more. Generate downloadable QR codes instantly.",
      href: "/tools/qr-code-generator",
      icon: "📱",
      category: "Utility Tools",
      features: ["Multiple formats", "Customizable size", "Download as PNG"]
    },
    {
      name: "Base64 Encoder/Decoder",
      description: "Encode text to Base64 or decode Base64 back to text. Useful for developers working with data encoding.",
      href: "/tools/base64-encoder",
      icon: "🔄",
      category: "Developer Tools",
      features: ["Encode & decode", "No data limit", "Copy results"]
    },
    {
      name: "Color Picker Tool",
      description: "Pick colors and convert between different color formats. Get HEX, RGB, HSL values with visual color picker.",
      href: "/tools/color-picker",
      icon: "🎨",
      category: "Design Tools",
      features: ["Visual picker", "Multiple formats", "Color history"]
    },
    {
      name: "Image Compressor",
      description: "Compress images without losing quality. Reduce file size while maintaining image clarity for faster loading.",
      href: "/tools/image-compressor",
      icon: "🖼️",
      category: "Image Tools",
      features: ["Client-side compression", "Quality control", "Multiple formats"]
    },
    {
      name: "Lorem Ipsum Generator",
      description: "Generate placeholder text for designs and prototypes. Choose from different Lorem ipsum variations and lengths.",
      href: "/tools/lorem-ipsum-generator",
      icon: "📄",
      category: "Text Tools",
      features: ["Customizable length", "Multiple types", "Copy to clipboard"]
    },
    {
      name: "Markdown to HTML Converter",
      description: "Convert Markdown syntax to HTML instantly. Perfect for bloggers, developers, and content creators.",
      href: "/tools/markdown-to-html",
      icon: "📝",
      category: "Developer Tools",
      features: ["Real-time preview", "Syntax highlighting", "Copy HTML"]
    },
    {
      name: "Unit Converter",
      description: "Convert between different units of measurement including length, weight, temperature, and more.",
      href: "/tools/unit-converter",
      icon: "📏",
      category: "Utility Tools",
      features: ["Multiple categories", "Instant conversion", "Common units"]
    },
    {
      name: "Currency Converter",
      description: "Convert between different currencies with real-time exchange rates. Perfect for international transactions and travel.",
      href: "/tools/currency-converter",
      icon: "💰",
      category: "Finance Tools",
      features: ["Real-time rates", "Multiple currencies", "Historical data"]
    },
    {
      name: "Calendar Generator",
      description: "Generate customizable calendars for any month and year. Perfect for planning and scheduling.",
      href: "/tools/calendar-generator",
      icon: "📅",
      category: "Productivity Tools",
      features: ["Customizable design", "Multiple formats", "Printable"]
    },
    {
      name: "PDF Merger",
      description: "Merge multiple PDF files into a single document. Combine PDFs quickly and easily in your browser.",
      href: "/tools/pdf-merger",
      icon: "📄",
      category: "Document Tools",
      features: ["Drag & drop", "Page reordering", "No upload required"]
    },
    {
      name: "Image to Base64 Converter",
      description: "Convert images to Base64 format instantly. Perfect for embedding images in HTML, CSS, or JSON.",
      href: "/tools/image-to-base64",
      icon: "🖼️",
      category: "Image Tools",
      features: ["Multiple formats", "Instant conversion", "Copy result"]
    },
    {
      name: "Markdown Editor",
      description: "Write and edit Markdown with live preview. Features syntax highlighting and export options.",
      href: "/tools/markdown-editor",
      icon: "📝",
      category: "Developer Tools",
      features: ["Live preview", "Syntax highlighting", "Export options"]
    },
    {
      name: "Emoji Picker",
      description: "Browse and copy emojis easily. Search by category or keyword for the perfect emoji.",
      href: "/tools/emoji-picker",
      icon: "😊",
      category: "Text Tools",
      features: ["Search functionality", "Category filtering", "Copy to clipboard"]
    },
    {
      name: "Password Strength Checker",
      description: "Check the strength of your passwords and get suggestions for improvement. Enhance your online security.",
      href: "/tools/password-strength-checker",
      icon: "🔒",
      category: "Security Tools",
      features: ["Strength analysis", "Security tips", "Improvement suggestions"]
    },
    {
      name: "Invoice Generator",
      description: "Create professional invoices quickly. Customize with your business details and download as PDF.",
      href: "/tools/invoice-generator",
      icon: "🧾",
      category: "Business Tools",
      features: ["Professional templates", "Customizable fields", "PDF export"]
    }
  ];

  const categories = [...new Set(tools.map(tool => tool.category))];

  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">All Free Online Tools</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our collection of 10+ free online tools designed to make your work easier. 
            All tools run directly in your browser - no registration required.
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">100% Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Free Forever</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="h-10">
            All Tools
          </Button>
          {categories.map((category) => (
            <Button key={category} variant="outline" className="h-10">
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{tool.icon}</span>
                    <div>
                      <CardTitle className="text-xl leading-tight">{tool.name}</CardTitle>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={tool.href}>
                      <Wrench className="mr-2 h-4 w-4" />
                      Use Tool <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-20 py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Tools?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're constantly adding new tools to our collection. Have a suggestion for a tool you'd like to see?
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}