import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, Server, Cookie, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - FreeTools",
  description: "Learn how FreeTools protects your privacy and handles your data. We believe in complete transparency and user privacy.",
  keywords: ["privacy policy", "data protection", "user privacy", "online tools privacy", "freetools privacy"],
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your privacy is our priority. We believe in complete transparency and protecting your data.
            </p>
            <div className="flex justify-center space-x-4">
              <Badge variant="secondary" className="text-sm">
                <Eye className="mr-1 h-3 w-3" />
                Transparent
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Lock className="mr-1 h-3 w-3" />
                Secure
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Server className="mr-1 h-3 w-3" />
                Client-Side
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Last Updated: January 15, 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  At FreeTools, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy outlines how we collect, use, and protect your data when you use our free online tools.
                </p>
              </CardContent>
            </Card>

            {/* Privacy Sections */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Server className="h-5 w-5" />
                    <span>1. Information Collection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What We Collect:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>Browser Information:</strong> We automatically collect certain information about your browser, device, and operating system</li>
                      <li><strong>Usage Data:</strong> Information about how you interact with our tools, including features used and time spent</li>
                      <li><strong>IP Address:</strong> We may collect your IP address for security and analytics purposes</li>
                      <li><strong>Cookies:</strong> We use cookies to enhance your experience and remember your preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What We DON'T Collect:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>Personal Content:</strong> The text, images, or data you process using our tools</li>
                      <li><strong>Personal Identifiers:</strong> Names, addresses, phone numbers, or other personal information</li>
                      <li><strong>Account Information:</strong> We don't require accounts, so we don't store user credentials</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="h-5 w-5" />
                    <span>2. How We Protect Your Data</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We implement industry-standard security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li><strong>Client-Side Processing:</strong> All tool processing happens in your browser - your data never leaves your device</li>
                    <li><strong>SSL Encryption:</strong> All data transmitted between your browser and our servers is encrypted</li>
                    <li><strong>Secure Servers:</strong> Our servers are hosted with reputable providers with strong security practices</li>
                    <li><strong>Regular Updates:</strong> We regularly update our security measures to protect against new threats</li>
                    <li><strong>Access Controls:</strong> Limited access to user data within our organization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Cookie className="h-5 w-5" />
                    <span>3. Cookies and Tracking</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies to improve your experience on our website:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    You can control cookies through your browser settings. However, disabling cookies may affect your experience on our website.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="h-5 w-5" />
                    <span>4. Data Sharing and Third Parties</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell, rent, or share your personal information with third parties for marketing purposes. 
                    We may share data only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li><strong>Service Providers:</strong> We work with trusted third-party service providers who help us operate our website</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of company assets</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Trash2 className="h-5 w-5" />
                    <span>5. Data Retention and Deletion</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your information only as long as necessary to provide our services:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li><strong>Analytics Data:</strong> Retained for up to 24 months for analysis and improvement</li>
                    <li><strong>Log Files:</strong> Retained for up to 90 days for security and troubleshooting</li>
                    <li><strong>User Preferences:</strong> Retained until you clear your browser cookies</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    You can request deletion of your personal data by contacting us at privacy@freetools.com.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Your Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    You have the following rights regarding your personal data:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Objection:</strong> Object to processing of your personal data</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our tools are not intended for children under the age of 13. We do not knowingly collect personal information 
                    from children under 13. If you are a parent or guardian and believe your child has provided us with personal 
                    information, please contact us so we can delete such information.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. International Data Transfers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may be accessed from around the world. Information we collect may be transferred to and stored 
                    in countries outside of your country of residence. We take appropriate measures to ensure your personal 
                    data is treated securely and in accordance with this Privacy Policy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated 
                    revision date. We encourage you to review this Privacy Policy periodically for any changes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> privacy@freetools.com</p>
                    <p><strong>Subject:</strong> Privacy Policy Inquiry</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Use Our Tools?</h3>
                <p className="text-muted-foreground mb-6">
                  All our tools are free, secure, and respect your privacy. Start using them now!
                </p>
                <Button asChild size="lg">
                  <Link href="/tools">
                    Explore Tools <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}