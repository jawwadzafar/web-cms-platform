import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Microscope, Dna, FlaskConical, Phone, Mail, MapPin, Calendar, User } from 'lucide-react'
import { api } from '@/lib/api-client'

export const metadata: Metadata = {
  title: 'Sanimed International - Leading Molecular Diagnostics & Clinical Laboratory',
  description: 'Sanimed International provides advanced molecular diagnostics, genetics, and clinical diagnostics services. Leading healthcare solutions in the UAE.',
  keywords: 'molecular diagnostics, genetics, clinical diagnostics, laboratory services, healthcare, UAE, precision medicine',
  openGraph: {
    title: 'Sanimed International - Leading Molecular Diagnostics',
    description: 'Advanced molecular diagnostics, genetics, and clinical diagnostics services in the UAE.',
    type: 'website',
  },
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

async function getHomepageData() {
  try {
    const [featuredPosts] = await Promise.all([
      api.posts.getFeatured(),
    ])

    return {
      posts: featuredPosts.data.docs || [],
    }
  } catch (error) {
    console.error('Failed to fetch homepage data:', error)
    return {
      posts: [],
    }
  }
}

export default async function HomePage() {
  const { posts } = await getHomepageData()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/laboratory-main.jpg"
            alt="Advanced Laboratory Facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-green-900/80" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 border border-white/20">
              <Dna className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            Leading in
            <span className="text-blue-300 block">Molecular Diagnostics</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Sanimed International is at the forefront of precision medicine, offering advanced molecular diagnostics, 
            genetics, and clinical diagnostics services across the UAE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 border-0">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6 text-blue-600 border-blue-600">About Sanimed</Badge>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To provide accurate, reliable, and timely diagnostic services that support healthcare professionals 
                in delivering the best possible patient care. We are committed to advancing precision medicine 
                through innovative molecular diagnostic solutions.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To be the region's most trusted partner in molecular diagnostics and precision medicine, 
                contributing to improved healthcare outcomes through cutting-edge technology and scientific excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are actively developing an <strong>R&D Center for Precision Medicine</strong> to further 
                advance healthcare innovation in the region.
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/facility/modern-lab.jpg"
                  alt="Modern Laboratory Facility"
                  width={600}
                  height={400}
                  className="object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <Microscope className="h-8 w-8 text-white mx-auto mb-2" />
                      <h3 className="font-semibold text-white text-sm">Advanced Technology</h3>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <Dna className="h-8 w-8 text-white mx-auto mb-2" />
                      <h3 className="font-semibold text-white text-sm">Genetic Expertise</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three specialized areas of expertise delivering comprehensive diagnostic solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-600">
              <CardHeader className="text-center pb-4">
                <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Microscope className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-2">Molecular Diagnostics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Advanced molecular testing using cutting-edge technology to detect genetic variations, 
                  infectious diseases, and cancer biomarkers with exceptional accuracy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-600">
              <CardHeader className="text-center pb-4">
                <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Dna className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-xl mb-2">Genetics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Comprehensive genetic testing and analysis services including hereditary disease screening, 
                  pharmacogenomics, and personalized medicine solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-600">
              <CardHeader className="text-center pb-4">
                <div className="bg-purple-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <FlaskConical className="h-12 w-12 text-purple-600" />
                </div>
                <CardTitle className="text-xl mb-2">Clinical Diagnostics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Full range of clinical laboratory services including biochemistry, hematology, immunology, 
                  and microbiology to support comprehensive patient care.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/services">
                Learn More About Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News & Updates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest News & Updates</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed about our latest developments, medical insights, and industry news.
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
                      <CardTitle className="line-clamp-2 group-hover:text-blue-600 transition-colors">
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
                      <Button asChild className="w-full group bg-blue-600 hover:bg-blue-700">
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
                  <Link href="/blog">View All Posts</Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're preparing exciting news and updates. Check back soon for the latest in molecular diagnostics and precision medicine.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Stay in Touch</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact Sanimed International for advanced diagnostic solutions and precision medicine services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5" />
              <div className="text-left">
                <p className="font-semibold">Abu Dhabi</p>
                <p className="opacity-90">+971-2-6767676</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5" />
              <div className="text-left">
                <p className="font-semibold">Sharjah</p>
                <p className="opacity-90">+971-6-5644445</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 mt-6">
            <Mail className="h-5 w-5" />
            <p className="opacity-90">customercare@sanimedgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}