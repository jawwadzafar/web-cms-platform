import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ModernButton, AnimatedBackground } from '@/components/custom'
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
          {/* Animated Background */}
          <AnimatedBackground className="absolute inset-0" />
          
          {/* Hero Image */}
          <Image
            src="/images/hero/homepage-hero.jpg"
            alt="Advanced Medical Research"
            fill
            className="object-cover opacity-20"
            priority
          />
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/75" />
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
            <ModernButton 
              asChild 
              variant="primary"
              size="xl"
            >
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </ModernButton>
            <ModernButton 
              variant="outline"
              size="xl"
              asChild
            >
              <Link href="/contact">
                Contact Our Experts
              </Link>
            </ModernButton>
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
              <div className="relative mb-8">
                {/* 3D Border Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-blue-700 transform rotate-1 rounded-lg opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:rotate-2"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-600 to-blue-800 transform -rotate-1 rounded-lg opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:-rotate-2"></div>
                
                {/* Main Image */}
                <div className="relative h-80 overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src="/images/services/molecular-diagnostics.jpg"
                    alt="Molecular Diagnostics"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Microscope className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-400/30 to-transparent"></div>
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
                
                <ModernButton 
                  asChild 
                  variant="outline-dark"
                  className="w-full"
                >
                  <Link href="/services/molecular-diagnostics">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </ModernButton>
              </div>
            </div>

            {/* Genetics */}
            <div className="group">
              <div className="relative mb-8">
                {/* 3D Border Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500 to-green-700 transform -rotate-1 rounded-lg opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:-rotate-2"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-emerald-600 to-green-800 transform rotate-1 rounded-lg opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:rotate-2"></div>
                
                {/* Main Image */}
                <div className="relative h-80 overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src="/images/services/genetics.jpg"
                    alt="Genetics"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                      <Dna className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-400/30 to-transparent"></div>
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
                
                <ModernButton 
                  asChild 
                  variant="outline-dark"
                  className="w-full"
                >
                  <Link href="/services/genetics">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </ModernButton>
              </div>
            </div>

            {/* Clinical Diagnostics */}
            <div className="group">
              <div className="relative mb-8">
                {/* 3D Border Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-500 to-indigo-700 transform rotate-1 rounded-lg opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:rotate-2"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-purple-600 to-indigo-800 transform -rotate-1 rounded-lg opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:-rotate-2"></div>
                
                {/* Main Image */}
                <div className="relative h-80 overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src="/images/services/clinical-diagnostics.jpg"
                    alt="Clinical Diagnostics"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <FlaskConical className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-400/30 to-transparent"></div>
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
                
                <ModernButton 
                  asChild 
                  variant="outline-dark"
                  className="w-full"
                >
                  <Link href="/services/clinical-diagnostics">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </ModernButton>
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
          
          <ModernButton 
            asChild 
            variant="secondary"
            size="lg"
          >
            <Link href="/about">
              About Sanimed
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </ModernButton>
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
            <ModernButton 
              variant="primary"
              size="lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Contact Our Team
            </ModernButton>
            <ModernButton 
              variant="outline"
              size="lg"
            >
              <Mail className="mr-2 w-5 h-5" />
              Request Information
            </ModernButton>
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