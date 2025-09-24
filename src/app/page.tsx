import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wrench, Zap, Shield, Globe, Star, Sparkles } from "lucide-react";

export default function Home() {
  const tools = [
    {
      name: "Text to Uppercase Converter",
      description: "Convert text to uppercase instantly",
      href: "/tools/text-to-uppercase",
      icon: "📝"
    },
    {
      name: "Word Counter",
      description: "Count words and characters in your text",
      href: "/tools/word-counter",
      icon: "🔢"
    },
    {
      name: "Password Generator",
      description: "Generate secure passwords instantly",
      href: "/tools/password-generator",
      icon: "🔐"
    },
    {
      name: "QR Code Generator",
      description: "Create QR codes for any text or URL",
      href: "/tools/qr-code-generator",
      icon: "📱"
    },
    {
      name: "Base64 Encoder/Decoder",
      description: "Encode and decode Base64 text",
      href: "/tools/base64-encoder",
      icon: "🔄"
    },
    {
      name: "Color Picker Tool",
      description: "Pick and convert colors between formats",
      href: "/tools/color-picker",
      icon: "🎨"
    },
    {
      name: "Image Compressor",
      description: "Compress images without losing quality",
      href: "/tools/image-compressor",
      icon: "🖼️"
    },
    {
      name: "Lorem Ipsum Generator",
      description: "Generate placeholder text instantly",
      href: "/tools/lorem-ipsum-generator",
      icon: "📄"
    },
    {
      name: "Markdown to HTML Converter",
      description: "Convert Markdown to HTML easily",
      href: "/tools/markdown-to-html",
      icon: "📝"
    },
    {
      name: "Unit Converter",
      description: "Convert between different units",
      href: "/tools/unit-converter",
      icon: "📏"
    },
    {
      name: "Currency Converter",
      description: "Convert currencies with real-time rates",
      href: "/tools/currency-converter",
      icon: "💰"
    },
    {
      name: "Calendar Generator",
      description: "Generate customizable calendars",
      href: "/tools/calendar-generator",
      icon: "📅"
    },
    {
      name: "PDF Merger",
      description: "Merge multiple PDF files",
      href: "/tools/pdf-merger",
      icon: "📄"
    },
    {
      name: "Image to Base64 Converter",
      description: "Convert images to Base64 format",
      href: "/tools/image-to-base64",
      icon: "🖼️"
    },
    {
      name: "Markdown Editor",
      description: "Write Markdown with live preview",
      href: "/tools/markdown-editor",
      icon: "📝"
    },
    {
      name: "Emoji Picker",
      description: "Browse and copy emojis easily",
      href: "/tools/emoji-picker",
      icon: "😊"
    },
    {
      name: "Password Strength Checker",
      description: "Check password security strength",
      href: "/tools/password-strength-checker",
      icon: "🔒"
    },
    {
      name: "Invoice Generator",
      description: "Create professional invoices",
      href: "/tools/invoice-generator",
      icon: "🧾"
    }
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Fast",
      description: "All tools run instantly in your browser"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "100% Secure",
      description: "Your data never leaves your device"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Free Forever",
      description: "No registration, no fees, no limits"
    }
  ];

  // Generate particles for animation
  const generateParticles = () => {
    return Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          width: `${Math.random() * 10 + 5}px`,
          height: `${Math.random() * 10 + 5}px`,
        }}
      />
    ));
  };

  return (
    <div className="min-h-screen scroll-smooth relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="particles">
        {generateParticles()}
      </div>
      
      <div className="morphing-bg"></div>

      {/* Hero Section with Enhanced 3D Animation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-gradient-to-r from-primary/20 to-chart-1/20 animate-pulse float-animation"></div>
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-r from-chart-2/20 to-chart-3/20 animate-pulse delay-1000 float-animation"></div>
          <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/10 to-chart-4/10 animate-ping"></div>
          <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-chart-5/10 animate-pulse float-animation"></div>
          <div className="absolute bottom-20 right-10 h-24 w-24 rounded-full bg-primary/15 animate-pulse float-animation"></div>
          
          {/* Animated Wave */}
          <div className="wave"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center slide-in-down">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-primary mr-2 animate-pulse" />
                <h1 className="text-responsive-4xl font-bold tracking-tight mb-6">
                  <span className="block">18+ Free</span>
                  <span className="block text-gradient-2 glitch" data-text="Online Tools">Online Tools</span>
                </h1>
                <Star className="h-8 w-8 text-primary ml-2 animate-pulse" />
              </div>
              <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto mb-8 slide-in-up">
                Powerful, fast, and secure web tools for developers, designers, and content creators. 
                All tools work directly in your browser - no registration required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-up">
                <Button asChild size="lg" className="text-lg px-8 py-6 btn-animate touch-target glow">
                  <Link href="/tools">
                    <Wrench className="mr-2 h-5 w-5" />
                    Explore All Tools
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 btn-animate touch-target">
                  <Link href="/about">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with 3D Cards */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/10 parallax">
        <div className="parallax-layer parallax-bg opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 slide-in-left">
            <h2 className="text-responsive-3xl font-bold mb-4 text-gradient-3">Why Choose Our Tools?</h2>
            <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
              Built with modern web technologies for the best user experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flip-card h-64">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Card className="text-center border-0 shadow-lg h-full flex flex-col justify-center">
                      <CardHeader>
                        <div className="flex justify-center mb-4 glow-primary rounded-full p-4 w-fit mx-auto">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-responsive-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-responsive-base">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flip-card-back">
                    <Card className="text-center border-0 shadow-lg h-full flex flex-col justify-center gradient-1 text-primary-foreground">
                      <CardHeader>
                        <CardTitle className="text-responsive-xl">Premium Experience</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-responsive-base opacity-90">
                          Enjoy advanced features with cutting-edge technology and seamless integration.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Preview Section with Enhanced Effects */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-in-right">
            <h2 className="text-responsive-3xl font-bold mb-4 text-gradient">Popular Tools</h2>
            <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of free online tools designed to make your work easier
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tools.slice(0, 6).map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer card-hover custom-scrollbar bounce-in perspective-1000" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-3 transform-3d">
                    <span className="text-3xl hover-lift rotate-3d-y hover:rotate-3d-z">{tool.icon}</span>
                    <CardTitle className="text-responsive-lg">{tool.name}</CardTitle>
                  </div>
                  <CardDescription className="text-responsive-base">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full btn-animate touch-target">
                    <Link href={tool.href}>
                      Use Tool <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center slide-in-up">
            <Button asChild size="lg" variant="outline" className="btn-animate touch-target glow">
              <Link href="/tools">
                View All 18 Tools <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-chart-1 to-chart-2 text-primary-foreground gradient-animate relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="morphing-bg opacity-20"></div>
          <h2 className="text-responsive-3xl font-bold mb-4 slide-in-down text-glow">Experience the Magic</h2>
          <p className="text-responsive-lg mb-8 opacity-90 slide-in-up">
            Watch our tools in action with stunning animations and effects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-up">
            <div className="loading-spinner mx-auto"></div>
          </div>
          <p className="text-responsive-base mt-4 loading-dots">Loading amazing features</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-chart-3 to-chart-4 text-primary-foreground relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-responsive-3xl font-bold mb-4 slide-in-down">Ready to Get Started?</h2>
          <p className="text-responsive-lg mb-8 opacity-90 slide-in-up">
            All tools are free to use with no registration required
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 btn-animate touch-target glow">
            <Link href="/tools">
              Start Using Tools Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}