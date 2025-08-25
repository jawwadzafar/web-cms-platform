import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Microscope, Dna, FlaskConical, Phone, Mail, Users, Globe } from 'lucide-react'
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/medical-laboratory-hero.jpg"
            alt="Advanced Medical Laboratory"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <Image 
              src="/images/logos/sanimed-logo-white.png" 
              alt="Sanimed International" 
              width={400} 
              height={90}
              className="h-20 w-auto mx-auto mb-8"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 tracking-tight leading-none">
            Solutions For A<br />
            <span className="text-blue-400">Changing World</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light opacity-90 mb-16 max-w-3xl mx-auto leading-relaxed">
            Leading molecular diagnostics, genetics, and clinical laboratory services. 
            Advancing precision medicine across the UAE.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-none font-normal text-lg"
            >
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-none font-normal text-lg"
            >
              <Link href="/contact">
                Contact Our Experts
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center">
            <div className="w-px h-16 bg-white/30"></div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Three Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized diagnostic excellence serving healthcare providers across the UAE 
              with precision, speed, and reliability.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Molecular Diagnostics */}
            <div className="group">
              <div className="relative h-80 mb-8 overflow-hidden">
                <Image
                  src="/images/services/molecular-diagnostics.jpg"
                  alt="Molecular Diagnostics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">01</span>
                  <h3 className="text-2xl font-light text-gray-900">Molecular Diagnostics</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Advanced PCR and NGS testing with UAE-wide coverage through 62 collection sites.
                </p>
                
                <div className="text-sm text-gray-500">
                  <div>UAE-wide • 62 Sites • 24-48hr TAT</div>
                </div>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-gray-300 text-gray-900 hover:bg-gray-50 rounded-none font-normal w-full"
                >
                  <Link href="/services/molecular-diagnostics">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Genetics */}
            <div className="group">
              <div className="relative h-80 mb-8 overflow-hidden">
                <Image
                  src="/images/services/genetics.jpg"
                  alt="Genetics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Dna className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">02</span>
                  <h3 className="text-2xl font-light text-gray-900">Genetics</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive genetic testing including hereditary disease screening and counseling.
                </p>
                
                <div className="text-sm text-gray-500">
                  <div>BRCA1/2 • Lynch Syndrome • Pharmacogenomics</div>
                </div>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-gray-300 text-gray-900 hover:bg-gray-50 rounded-none font-normal w-full"
                >
                  <Link href="/services/genetics">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Clinical Diagnostics */}
            <div className="group">
              <div className="relative h-80 mb-8 overflow-hidden">
                <Image
                  src="/images/services/clinical-diagnostics.jpg"
                  alt="Clinical Diagnostics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">03</span>
                  <h3 className="text-2xl font-light text-gray-900">Clinical Diagnostics</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Complete laboratory services with automated systems for rapid, accurate results.
                </p>
                
                <div className="text-sm text-gray-500">
                  <div>Automated • CAP Certified • Rapid Reporting</div>
                </div>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-gray-300 text-gray-900 hover:bg-gray-50 rounded-none font-normal w-full"
                >
                  <Link href="/services/clinical-diagnostics">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8 block">
            Our Mission
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
            Enhancing Medical Infrastructure<br />
            Across the UAE
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Sanimed International Lab develops strategies to enhance medical infrastructure in the UAE, 
            introducing advanced technology and AI in healthcare while supporting local medical talent development.
          </p>
          
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To establish the Sanimed R&D Center for Precision Medicine, focusing on cancer 
                and rare genetic diseases, metabolic disorders, and multiomics laboratory development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Serving healthcare providers across all UAE emirates through our extensive network 
                of collection sites and advanced diagnostic capabilities.
              </p>
            </div>
          </div>
          
          <Button 
            asChild 
            size="lg" 
            className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-none font-normal"
          >
            <Link href="/about">
              About Sanimed
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
            Ready to Partner<br />
            with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact Sanimed International for advanced diagnostic solutions and precision medicine services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-none font-normal"
            >
              <Phone className="mr-2 w-5 h-5" />
              Contact Our Team
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-none font-normal"
            >
              <Mail className="mr-2 w-5 h-5" />
              Request Information
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Phone className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <div className="text-white font-semibold mb-1">Abu Dhabi</div>
              <div className="text-gray-400">+971-2-6767676</div>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <div className="text-white font-semibold mb-1">Sharjah</div>
              <div className="text-gray-400">+971-6-5644445</div>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <div className="text-white font-semibold mb-1">Email</div>
              <div className="text-gray-400">customercare@sanimedgroup.com</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}