import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const footerLinks = {
    tools: [
      { name: "Text to Uppercase Converter", href: "/tools/text-to-uppercase" },
      { name: "Word Counter", href: "/tools/word-counter" },
      { name: "Password Generator", href: "/tools/password-generator" },
      { name: "QR Code Generator", href: "/tools/qr-code-generator" },
      { name: "Currency Converter", href: "/tools/currency-converter" },
      { name: "Calendar Generator", href: "/tools/calendar-generator" },
      { name: "Markdown Editor", href: "/tools/markdown-editor" },
      { name: "Emoji Picker", href: "/tools/emoji-picker" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
      { name: "Disclaimer", href: "/disclaimer" },
      { name: "Sitemap", href: "/sitemap.xml" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-muted/50 to-muted/20 border-t slide-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-responsive-xl font-semibold mb-4 text-gradient">FreeTools</h3>
            <p className="text-responsive-sm text-muted-foreground mb-4">
              Free online tools for developers, designers, and content creators. 
              Simple, fast, and easy-to-use utilities for your everyday needs.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-responsive-base font-semibold mb-4">Popular Tools</h4>
            <ul className="space-y-2">
              {footerLinks.tools.map((link, index) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-responsive-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 hover:translate-x-1 inline-block"
                    style={{animationDelay: `${index * 0.05}s`}}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-responsive-base font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-responsive-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 hover:translate-x-1 inline-block"
                    style={{animationDelay: `${index * 0.05}s`}}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-responsive-base font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-responsive-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 hover:translate-x-1 inline-block"
                    style={{animationDelay: `${index * 0.05}s`}}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-responsive-sm text-muted-foreground">
            © 2024 FreeTools. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <span className="text-responsive-sm text-muted-foreground">
              Made with ❤️ for the community
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}