import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ModernButton } from '@/components/custom'
import { ArrowRight, Microscope, Dna, FlaskConical, Phone, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services - Sanimed International | Molecular Diagnostics, Genetics & Clinical Lab',
  description: 'Comprehensive molecular diagnostics, genetics, and clinical laboratory services. Advanced healthcare solutions from Sanimed International in the UAE.',
  keywords: 'molecular diagnostics, genetics testing, clinical laboratory, healthcare services, precision medicine, UAE',
  openGraph: {
    title: 'Our Services - Sanimed International',
    description: 'Advanced molecular diagnostics, genetics, and clinical laboratory services in the UAE.',
    type: 'website',
  },
}

export default function ServicesPage() {
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
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Image 
              src="/images/logos/sanimed-logo-white.png" 
              alt="Sanimed International" 
              width={300} 
              height={68}
              className="h-16 w-auto mx-auto mb-8"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight">
            Services
          </h1>
          
          <p className="text-xl md:text-2xl font-light opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Three specialized diagnostic services advancing precision medicine across the UAE
          </p>
          
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

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Molecular Diagnostics */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">01 — Core Service</span>
              </div>
              
              <h2 className="text-5xl font-light text-gray-900 leading-tight">
                Molecular<br />Diagnostics
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Advanced PCR, NGS, and genomic testing delivering precision medicine solutions 
                across 62 collection sites throughout the UAE. From COVID-19 testing to complex 
                genetic analysis, we provide accurate results within 24-48 hours.
              </p>
              
              <div className="flex space-x-8 text-sm">
                <div>
                  <div className="font-semibold text-gray-900">Coverage</div>
                  <div className="text-gray-600">UAE-wide</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sites</div>
                  <div className="text-gray-600">62 locations</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">TAT</div>
                  <div className="text-gray-600">24-48 hours</div>
                </div>
              </div>
              
              <ModernButton 
                asChild 
                variant="service"
                size="lg"
              >
                <Link href="/services/molecular-diagnostics">
                  Explore Service
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </ModernButton>
            </div>
            
            <div className="relative h-[600px]">
              <Image
                src="/images/services/molecular-diagnostics.jpg"
                alt="Molecular Diagnostics Laboratory"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Genetics */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative h-[600px] lg:order-1">
              <Image
                src="/images/services/genetics.jpg"
                alt="Genetics Laboratory"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-8 lg:order-2">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Dna className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">02 — Core Service</span>
              </div>
              
              <h2 className="text-5xl font-light text-gray-900 leading-tight">
                Genetics
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Comprehensive genetic testing including hereditary disease screening, BRCA1/2 analysis, 
                and pharmacogenomics. Our expert genetic counselors provide personalized guidance 
                for informed medical decisions and family planning.
              </p>
              
              <div className="flex space-x-8 text-sm">
                <div>
                  <div className="font-semibold text-gray-900">Testing</div>
                  <div className="text-gray-600">Hereditary diseases</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Analysis</div>
                  <div className="text-gray-600">BRCA1/2, Lynch</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Support</div>
                  <div className="text-gray-600">Genetic counseling</div>
                </div>
              </div>
              
              <ModernButton 
                asChild 
                variant="service-emerald"
                size="lg"
              >
                <Link href="/services/genetics">
                  Explore Service
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </ModernButton>
            </div>
          </div>

          {/* Clinical Diagnostics */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <FlaskConical className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">03 — Core Service</span>
              </div>
              
              <h2 className="text-5xl font-light text-gray-900 leading-tight">
                Clinical<br />Diagnostics
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Complete clinical laboratory services including biochemistry, hematology, immunology, 
                and microbiology. State-of-the-art automated systems ensure rapid, accurate results 
                for comprehensive patient care and treatment monitoring.
              </p>
              
              <div className="flex space-x-8 text-sm">
                <div>
                  <div className="font-semibold text-gray-900">Systems</div>
                  <div className="text-gray-600">Automated</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Quality</div>
                  <div className="text-gray-600">CAP certified</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Results</div>
                  <div className="text-gray-600">Rapid reporting</div>
                </div>
              </div>
              
              <ModernButton 
                asChild 
                variant="service-purple"
                size="lg"
              >
                <Link href="/services/clinical-diagnostics">
                  Explore Service
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </ModernButton>
            </div>
            
            <div className="relative h-[600px]">
              <Image
                src="/images/services/clinical-diagnostics.jpg"
                alt="Clinical Diagnostics Laboratory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-8">
            Need diagnostic services?
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Contact our team to discuss your testing requirements and learn how we can support your patients.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <Phone className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Abu Dhabi</h3>
              <p className="text-gray-600">+971-2-6767676</p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Sharjah</h3>
              <p className="text-gray-600">+971-6-5644445</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">customercare@sanimedgroup.com</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ModernButton size="lg" variant="secondary">
              Contact Our Team
            </ModernButton>
            <ModernButton variant="outline-dark" size="lg">
              Request Information
            </ModernButton>
          </div>
        </div>
      </section>
    </div>
  )
}