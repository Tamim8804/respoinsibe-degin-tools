import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, AlertCircle, Users, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - FreeTools",
  description: "Read the terms and conditions for using FreeTools. Understand your rights and responsibilities when using our free online tools.",
  keywords: ["terms and conditions", "terms of service", "user agreement", "freetools terms", "online tools terms"],
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Please read these terms and conditions carefully before using our free online tools.
            </p>
            <div className="flex justify-center space-x-4">
              <Badge variant="secondary" className="text-sm">
                <CheckCircle className="mr-1 h-3 w-3" />
                Last Updated: January 15, 2024
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Users className="mr-1 h-3 w-3" />
                User Agreement
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
                <CardTitle className="text-2xl">Introduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Welcome to FreeTools! These Terms and Conditions ("Terms") govern your use of our website and the free 
                  online tools we provide. By accessing or using our services, you agree to be bound by these Terms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  FreeTools provides a collection of free online tools designed to help users with various tasks including 
                  text manipulation, data conversion, and utility functions. Our services are provided "as is" and are 
                  available to users worldwide.
                </p>
              </CardContent>
            </Card>

            {/* Terms Sections */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>1. Acceptance of Terms</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    By accessing and using this website, you accept and agree to be bound by the terms and provision 
                    of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms constitute a legally binding agreement made between you, whether personally or on 
                    behalf of an entity ("you"), and FreeTools ("we," "us," or "our"), concerning your access to and 
                    use of the freetools.com website as well as any other media form, media channel, mobile website 
                    or mobile application related, linked, or otherwise connected thereto.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5" />
                    <span>2. Use License</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Permission is granted to temporarily download one copy of the materials (information or software) 
                    on FreeTools' website for personal, non-commercial transitory viewing only. This is the grant 
                    of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on FreeTools' website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    This license shall automatically terminate if you violate any of these restrictions and may be 
                    terminated by FreeTools at any time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Disclaimer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The materials on FreeTools' website are provided on an 'as is' basis. FreeTools makes no warranties, 
                    expressed or implied, and hereby disclaims and negates all other warranties including without 
                    limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
                    or non-infringement of intellectual property or other violation of rights.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Further, FreeTools does not warrant or make any representations concerning the accuracy, 
                    likely results, or reliability of the use of the materials on its website or otherwise relating 
                    to such materials or on any sites linked to this site.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Limitations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall FreeTools or its suppliers be liable for any damages (including, without 
                    limitation, damages for loss of data or profit, or due to business interruption) arising out 
                    of the use or inability to use the materials on FreeTools' website, even if FreeTools or a 
                    FreeTools authorized representative has been notified orally or in writing of the possibility 
                    of such damage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Accuracy of Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    The materials appearing on FreeTools' website could include technical, typographical, or 
                    photographic errors. FreeTools does not warrant that any of the materials on its website 
                    are accurate, complete, or current. FreeTools may make changes to the materials contained 
                    on its website at any time without notice. However, FreeTools does not make any commitment 
                    to update the materials.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    FreeTools has not reviewed all of the sites linked to its website and is not responsible for 
                    the contents of any such linked site. The inclusion of any link does not imply endorsement 
                    by FreeTools of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Modifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    FreeTools may revise these terms of service for its website at any time without notice. 
                    By using this website, you are agreeing to be bound by the then current version of these 
                    terms of service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of 
                    the jurisdiction in which FreeTools operates, and you irrevocably submit to the exclusive 
                    jurisdiction of the courts in that location.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. User Conduct</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    By using our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Use our tools for lawful purposes only</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Not use our tools to distribute malware or harmful content</li>
                    <li>Not interfere with the proper working of our website</li>
                    <li>Not use our tools in a way that could damage our systems</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to terminate access to our services for users who violate these terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    All content, features, and functionality on our website are the exclusive property of 
                    FreeTools and are protected by international copyright, trademark, patent, trade secret, 
                    and other intellectual property or proprietary rights laws.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>11. Service Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    While we strive to keep our services available 24/7, we do not guarantee uninterrupted 
                    access. We may temporarily suspend or modify our services for maintenance, improvements, 
                    or technical reasons without prior notice.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>12. Third-Party Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites or services. We are not responsible 
                    for the practices or content of these third-party services. Your use of third-party 
                    services is subject to their respective terms and privacy policies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>13. Termination</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to terminate or suspend your access to our services immediately, 
                    without prior notice or liability, for any reason whatsoever, including without limitation 
                    if you breach the Terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>14. Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> legal@freetools.com</p>
                    <p><strong>Subject:</strong> Terms and Conditions Inquiry</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Start Using Our Tools Today</h3>
                <p className="text-muted-foreground mb-6">
                  By using our tools, you agree to these terms. All our tools are free and ready to use!
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