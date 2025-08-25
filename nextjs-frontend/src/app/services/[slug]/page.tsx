import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { api } from '@/lib/api-client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, ArrowLeft, Star, DollarSign, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  try {
    const response = await api.services.getBySlug(params.slug)
    const service = response.data.docs?.[0]

    if (!service) {
      return {
        title: 'Service Not Found',
        description: 'The requested service could not be found.',
      }
    }

    return {
      title: service.meta?.title || service.title,
      description: service.meta?.description || service.shortDescription,
      keywords: service.meta?.keywords,
      openGraph: service.meta?.ogImage ? {
        images: [{
          url: service.meta.ogImage.url,
          alt: service.meta.ogImage.alt,
        }],
      } : undefined,
    }
  } catch (error) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    }
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  try {
    const response = await api.services.getBySlug(params.slug)
    const service = response.data.docs?.[0]

    if (!service) {
      notFound()
    }

    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {service.category && (
                    <Badge variant="secondary">
                      {service.category.name}
                    </Badge>
                  )}
                  {service.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {service.shortDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </div>
              </div>
              {service.featuredImage && (
                <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src={service.featuredImage.url}
                    alt={service.featuredImage.alt || service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="outline" asChild>
                <Link href="/services">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Services
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Service Description */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>About This Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: service.description }}
                    />
                  </CardContent>
                </Card>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>Key Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">{feature.feature}</p>
                              {feature.description && (
                                <p className="text-sm text-muted-foreground">
                                  {feature.description}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Gallery */}
                {service.gallery && service.gallery.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Gallery</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {service.gallery.map((item, index) => (
                          <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                            <Image
                              src={item.image.url}
                              alt={item.image.alt || `Gallery image ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                            {item.caption && (
                              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
                                {item.caption}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Pricing */}
                {service.pricing && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        Pricing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {service.pricing.startingPrice && (
                        <div className="text-3xl font-bold text-primary mb-2">
                          Starting at ${service.pricing.startingPrice}
                        </div>
                      )}
                      {service.pricing.priceRange && (
                        <p className="text-muted-foreground mb-4">
                          {service.pricing.priceRange}
                        </p>
                      )}
                      {service.pricing.pricingDetails && (
                        <p className="text-sm text-muted-foreground">
                          {service.pricing.pricingDetails}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Get Started</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button asChild className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/contact">Schedule a Call</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Service Status */}
                <Card>
                  <CardHeader>
                    <CardTitle>Service Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${service.active ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span className="text-sm">
                        {service.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Failed to fetch service:', error)
    notFound()
  }
}
