import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { api } from '@/lib/api-client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Services - Professional Solutions',
  description: 'Explore our comprehensive range of professional services designed to meet your needs.',
}

interface Service {
  id: string
  title: string
  slug: string
  shortDescription: string
  featuredImage?: {
    url: string
    alt: string
  }
  category?: {
    name: string
  }
  pricing?: {
    startingPrice?: number
    priceRange?: string
    currency?: string
  }
  features?: Array<{
    feature: string
    description?: string
  }>
  featured: boolean
}

async function getServices(): Promise<Service[]> {
  try {
    const response = await api.services.getAll({ active: true })
    return response.data.docs || []
  } catch (error) {
    console.error('Failed to fetch services:', error)
    return []
  }
}

export default async function ServicesPage() {
  const services = await getServices()

  if (!services.length) {
    notFound()
  }

  const featuredServices = services.filter(service => service.featured)
  const regularServices = services.filter(service => !service.featured)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We offer a comprehensive range of professional services to help your business grow and succeed.
        </p>
      </div>

      {/* Featured Services */}
      {featuredServices.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            Featured Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-2 border-primary/20">
                {service.featuredImage && (
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image
                      src={service.featuredImage.url}
                      alt={service.featuredImage.alt || service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    {service.category && (
                      <Badge variant="secondary">
                        {service.category.name}
                      </Badge>
                    )}
                    {service.pricing?.startingPrice && (
                      <span className="text-lg font-semibold text-primary">
                        Starting at ${service.pricing.startingPrice}
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {service.features && service.features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature.feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
        </div>
      )}

      {/* All Services */}
      <div>
        <h2 className="text-2xl font-bold mb-6">All Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularServices.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-shadow duration-300">
              {service.featuredImage && (
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.featuredImage.url}
                    alt={service.featuredImage.alt || service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  {service.category && (
                    <Badge variant="secondary" className="text-xs">
                      {service.category.name}
                    </Badge>
                  )}
                  {service.pricing?.startingPrice && (
                    <span className="text-sm font-semibold text-primary">
                      From ${service.pricing.startingPrice}
                    </span>
                  )}
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {service.shortDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full group">
                  <Link href={`/services/${service.slug}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted/50 rounded-lg p-8 text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-6">
          Contact us today to discuss your project and get a personalized quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Schedule a Call</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
