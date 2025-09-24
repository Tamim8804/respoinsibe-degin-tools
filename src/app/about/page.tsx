import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Shield, Globe, Heart, Award } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - FreeTools",
  description: "Learn about FreeTools - our mission, values, and commitment to providing free, secure, and easy-to-use online tools for everyone.",
  keywords: ["about freetools", "free online tools", "web tools mission", "tool development", "secure tools"],
};

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Lead Developer",
      bio: "Passionate about creating accessible tools for everyone"
    },
    {
      name: "Mike Chen",
      role: "UX Designer",
      bio: "Focused on creating intuitive and beautiful user experiences"
    },
    {
      name: "Emily Davis",
      role: "Content Strategist",
      bio: "Ensuring our tools are well-documented and user-friendly"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "FreeTools Launched",
      description: "Started with 5 essential tools for developers and content creators"
    },
    {
      year: "2024",
      title: "Expanded to 10 Tools",
      description: "Added more utilities based on user feedback and needs"
    },
    {
      year: "2024",
      title: "Mobile Optimization",
      description: "Enhanced mobile experience for all tools across devices"
    }
  ];

  const values = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Speed & Efficiency",
      description: "All tools are optimized for instant results and smooth user experience"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Privacy First",
      description: "Your data never leaves your browser - complete privacy guaranteed"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Free & Accessible",
      description: "No registration, no fees, no limits - tools for everyone"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Community Driven",
      description: "Built with love for the community, constantly improving based on feedback"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About FreeTools</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to make powerful online tools accessible to everyone. 
              No registration, no fees, just pure utility.
            </p>
            <Button asChild size="lg">
              <Link href="/tools">
                Explore Our Tools <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                We believe that essential digital tools should be free, fast, and accessible to everyone. 
                Our mission is to break down barriers and provide utilities that help people work smarter, 
                not harder.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>For Everyone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Whether you're a developer, designer, writer, student, or business professional, 
                    our tools are designed to be intuitive and helpful for all skill levels.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5" />
                    <span>Quality First</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We maintain high standards for all our tools, ensuring they're reliable, 
                    secure, and provide real value to our users.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind FreeTools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to provide free tools to the world
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of users who trust FreeTools for their daily tasks. 
                  All tools are free, secure, and ready to use.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/tools">
                      Start Using Tools
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}