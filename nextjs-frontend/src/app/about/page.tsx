import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, Users, Target, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Our Story & Mission',
  description: 'Learn about our company, our mission, and the team behind our success.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Our Company</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're passionate about helping businesses succeed through innovative solutions and expert guidance.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To empower businesses with cutting-edge technology solutions and strategic insights that drive growth, 
              efficiency, and competitive advantage in the digital marketplace.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To be the trusted partner that transforms how businesses operate, innovate, and succeed in an 
              ever-evolving digital landscape.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <CardTitle>Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We believe in the power of teamwork and partnership to achieve exceptional results.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <CardTitle>Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We strive for excellence in everything we do, from strategy to execution.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We embrace new ideas and technologies to deliver cutting-edge solutions.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Stats */}
      <section className="bg-muted/50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Company Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Team Members</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help your business grow and succeed in today's competitive market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">View Services</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
