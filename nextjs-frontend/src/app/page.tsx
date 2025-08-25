import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Star, Check, Phone, Mail, MapPin, Calendar, User } from 'lucide-react'
import { api } from '@/lib/api-client'

export const metadata: Metadata = {
  title: 'Welcome to Our Company - Professional Services & Solutions',
  description: 'We provide comprehensive professional services to help your business grow. Discover our expertise in technology, consulting, and strategic solutions.',
}

interface FeaturedPost {
  id: string
  title: string
  slug: string
  excerpt: string
  featuredImage?: {
    url: string
    alt: string
  }
  publishedDate: string
  author?: {
    name: string
  }
}

interface FeaturedService {
  id: string
  title: string
  slug: string
  shortDescription: string
  featuredImage?: {
    url: string
    alt: string
  }
  pricing?: {
    startingPrice?: number
  }
}

interface TeamMember {
  id: string
  name: string
  position: string
  shortBio?: string
  photo?: {
    url: string
    alt: string
  }
}

async function getHomepageData() {
  try {
    const [featuredPosts, featuredServices, teamMembers] = await Promise.all([
      api.posts.getFeatured(),
      api.services.getFeatured(),
      api.team.getFeatured(),
    ])

    return {
      posts: featuredPosts.data.docs || [],
      services: featuredServices.data.docs || [],
      team: teamMembers.data.docs || [],
    }
  } catch (error) {
    console.error('Failed to fetch homepage data:', error)
    return {
      posts: [],
      services: [],
      team: [],
    }
  }
}

export default async function HomePage() {
  const { posts, services, team } = await getHomepageData()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Professional Solutions for
            <span className="text-primary block">Modern Businesses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We help businesses thrive in the digital age with cutting-edge technology, strategic consulting, and innovative solutions that drive growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      {services.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Featured Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our most popular services that have helped countless businesses achieve their goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300">
                  {service.featuredImage && (
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={service.featuredImage.url}
                        alt={service.featuredImage.alt || service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {service.pricing?.startingPrice && (
                      <p className="text-lg font-semibold text-primary mb-4">
                        Starting at ${service.pricing.startingPrice}
                      </p>
                    )}
                    <Button asChild className="w-full group">
                      <Link href={`/services/${service.slug}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Featured Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest thoughts, industry insights, and expert tips.
            </p>
          </div>
          
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                    {post.featuredImage && (
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={post.featuredImage.url}
                          alt={post.featuredImage.alt || post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.publishedDate).toLocaleDateString()}
                        </div>
                        {post.author && (
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            {post.author.name}
                          </div>
                        )}
                      </div>
                      <Button asChild className="w-full group">
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" size="lg" asChild>
                  <Link href="/blog">Read All Posts</Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">No blog posts yet</h3>
              <p className="text-muted-foreground mb-6">
                Check back soon for our first articles, or create some content in the CMS admin panel.
              </p>
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      {team.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our experienced professionals are dedicated to delivering exceptional results for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <Card key={member.id} className="text-center group hover:shadow-lg transition-shadow duration-300">
                  {member.photo && (
                    <div className="relative h-48 w-48 mx-auto mb-4 overflow-hidden rounded-full">
                      <Image
                        src={member.photo.url}
                        alt={member.photo.alt || member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.position}
                    </CardDescription>
                  </CardHeader>
                  {member.shortBio && (
                    <CardContent>
                      <p className="text-muted-foreground">{member.shortBio}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow and succeed. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
