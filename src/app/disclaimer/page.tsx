import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Shield, Info, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - FreeTools",
  description: "Important disclaimer about the use of FreeTools. Understand the limitations and responsibilities when using our free online tools.",
  keywords: ["disclaimer", "tool disclaimer", "online tools disclaimer", "freetools disclaimer", "usage disclaimer"],
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Disclaimer</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Please read this important disclaimer before using our free online tools.
            </p>
            <div className="flex justify-center space-x-4">
              <Badge variant="secondary" className="text-sm">
                <Info className="mr-1 h-3 w-3" />
                Important Information
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Shield className="mr-1 h-3 w-3" />
                User Responsibility
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
                <CardTitle className="text-2xl">Important Notice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The information provided by FreeTools ("we," "us," or "our") on our website is for general 
                  informational purposes only. All information on the site is provided in good faith, however 
                  we make no representation or warranty of any kind, express or implied, regarding the accuracy, 
                  adequacy, validity, reliability, availability, or completeness of any information on the site.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Your use of our tools and reliance on any information on the site is solely at your own risk.
                </p>
              </CardContent>
            </Card>

            {/* Disclaimer Sections */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5" />
                    <span>1. Tool Accuracy and Reliability</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    While we strive to provide accurate and reliable tools, we cannot guarantee that all tools will 
                    function perfectly or produce accurate results in all situations. The tools provided on 
                    FreeTools are:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Provided "as is" without any warranties or guarantees</li>
                    <li>Subject to limitations and potential errors</li>
                    <li>Not intended to replace professional advice or judgment</li>
                    <li>Designed for general use and may not cover all edge cases</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>2. User Responsibility</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Users are solely responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li><strong>Verification of Results:</strong> Always verify the output of our tools, especially for critical applications</li>
                    <li><strong>Data Security:</strong> While we process data client-side, users are responsible for the content they input</li>
                    <li><strong>Appropriate Use:</strong> Using tools only for their intended purposes</li>
                    <li><strong>Professional Consultation:</strong> Seeking professional advice when needed, especially for legal, medical, or financial matters</li>
                    <li><strong>Backup Data:</strong> Maintaining backups of important data before using our tools</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. No Professional Advice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The tools and information provided on FreeTools are not a substitute for professional advice. 
                    We do not provide:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Legal advice or legal services</li>
                    <li>Medical advice or medical services</li>
                    <li>Financial advice or financial planning</li>
                    <li>Technical support for professional applications</li>
                    <li>Consulting services of any kind</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Always consult with qualified professionals for specific advice related to your situation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall FreeTools, its directors, employees, partners, agents, suppliers, or affiliates 
                    be liable for any indirect, incidental, special, consequential, or punitive damages, including 
                    without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting 
                    from your access to or use of or inability to access or use the services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. External Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites or services that are not owned or controlled 
                    by FreeTools. We have no control over and assume no responsibility for the content, privacy 
                    policies, or practices of any third-party websites or services. We strongly advise you to read 
                    the terms and conditions and privacy policies of any third-party websites that you visit.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Technical Limitations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our tools may have technical limitations including:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>File size limitations for certain tools</li>
                    <li>Browser compatibility issues</li>
                    <li>Processing time limitations</li>
                    <li>Internet connectivity requirements</li>
                    <li>Device-specific limitations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Data Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    While we process data client-side whenever possible, users should be aware that internet 
                    communications are never completely private or secure. You understand that any messages or 
                    information you send to the website may be read or intercepted by others, even if there is 
                    a special notice that a particular transmission is encrypted.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Changes to Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify, suspend, or discontinue any of our tools at any time without 
                    prior notice. We are not liable to you or any third party for any modification, suspension, 
                    or discontinuation of any tools.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Indemnification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to indemnify and hold harmless FreeTools and its parents, subsidiaries, affiliates, 
                    officers, employees, agents, partners, and licensors from and against any claim, demand, 
                    damages, losses, liabilities, costs, and expenses (including, but not limited to, reasonable 
                    attorney's fees) arising out of or related to your use of our tools or violation of these terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    This disclaimer and any disputes arising out of or related to these terms or the services 
                    shall be governed by and construed in accordance with the laws of the jurisdiction in which 
                    FreeTools operates.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>11. Acknowledgment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    By using our website and tools, you acknowledge that you have read, understood, and agree 
                    to be bound by this disclaimer. If you do not agree with any part of this disclaimer, you 
                    should not use our website or tools.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This disclaimer was last updated on January 15, 2024, and is subject to change without 
                    prior notice. It is your responsibility to review this disclaimer periodically for any changes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>12. Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about this disclaimer, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> legal@freetools.com</p>
                    <p><strong>Subject:</strong> Disclaimer Inquiry</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Use Our Tools Responsibly</h3>
                <p className="text-muted-foreground mb-6">
                  By understanding and accepting this disclaimer, you can safely use our free tools for your projects.
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