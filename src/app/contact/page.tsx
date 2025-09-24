import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - FreeTools",
  description: "Get in touch with the FreeTools team. We'd love to hear from you about our tools, suggestions, or any questions you may have.",
  keywords: ["contact freetools", "freetools support", "tool feedback", "contact online tools", "customer support"],
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      value: "hello@freetools.com",
      description: "For general inquiries and support"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Monday - Friday, 9 AM - 6 PM EST"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Us",
      value: "San Francisco, CA",
      description: "Our headquarters location"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Business Hours",
      value: "24/7 Online",
      description: "Tools available anytime, anywhere"
    }
  ];

  const faqs = [
    {
      question: "Are your tools really free?",
      answer: "Yes! All our tools are completely free to use with no hidden charges or registration requirements."
    },
    {
      question: "Is my data secure when using your tools?",
      answer: "Absolutely. All processing happens in your browser - your data never leaves your device."
    },
    {
      question: "Can I suggest new tools?",
      answer: "Of course! We love hearing from our users. Use the contact form below to share your ideas."
    },
    {
      question: "Do you offer API access?",
      answer: "Currently, our tools are designed for direct use through our website. API access may be available in the future."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 slide-in-down">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-responsive-4xl font-bold mb-6 text-gradient">Contact Us</h1>
            <p className="text-responsive-lg text-muted-foreground mb-8">
              We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, 
              our team is here to help.
            </p>
            <Button asChild size="lg" className="btn-animate touch-target">
              <Link href="/tools">
                Explore Our Tools <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center card-hover bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary glow-primary">
                      {info.icon}
                    </div>
                  </div>
                  <CardTitle className="text-responsive-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-1">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="slide-in-left">
              <CardHeader>
                <CardTitle className="text-responsive-2xl text-gradient">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <h3 className="font-semibold mb-2 text-responsive-base">{faq.question}</h3>
                      <p className="text-muted-foreground text-responsive-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="mt-6 bg-gradient-to-r from-primary/5 to-primary/10 slide-in-up">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-responsive-lg">Need Quick Help?</h3>
                <p className="text-muted-foreground mb-4 text-responsive-base">
                  Check out our tools documentation and tutorials for instant answers.
                </p>
                <Button asChild variant="outline" className="w-full btn-animate touch-target">
                  <Link href="/blog">
                    Visit Our Blog
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 slide-in-right">
            <h2 className="text-responsive-3xl font-bold mb-4 text-gradient">Popular Tools</h2>
            <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most-used tools and see how they can help you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Password Generator", href: "/tools/password-generator", icon: "🔐" },
              { name: "QR Code Generator", href: "/tools/qr-code-generator", icon: "📱" },
              { name: "Word Counter", href: "/tools/word-counter", icon: "🔢" },
              { name: "Color Picker", href: "/tools/color-picker", icon: "🎨" }
            ].map((tool, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer card-hover bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="text-3xl mb-3 hover-lift">{tool.icon}</div>
                  <h3 className="font-semibold mb-2 text-responsive-base">{tool.name}</h3>
                  <Button asChild variant="outline" size="sm" className="btn-animate touch-target">
                    <Link href={tool.href}>
                      Try It Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}