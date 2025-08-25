import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModernButton } from '@/components/custom'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Check, Microscope, Phone, Mail, Users, Clock, Award, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Molecular Diagnostics - Sanimed International | Advanced PCR & NGS Testing',
  description: 'Advanced molecular diagnostics services including PCR, NGS, genetic mutation analysis, and infectious disease detection. Precision medicine solutions in the UAE.',
  keywords: 'molecular diagnostics, PCR testing, NGS, genetic mutation analysis, infectious disease, cancer biomarkers, UAE',
  openGraph: {
    title: 'Molecular Diagnostics - Sanimed International',
    description: 'Advanced molecular diagnostics services for precision medicine and accurate disease detection.',
    type: 'website',
  },
}

const stats = [
  { icon: Globe, label: 'UAE Coverage', value: '62 Collection Sites' },
  { icon: Users, label: 'Tests Performed', value: '500,000+ Annually' },
  { icon: Clock, label: 'Turnaround Time', value: '24-48 Hours' },
  { icon: Award, label: 'Accreditation', value: 'CAP Certified' },
]

const keyCapabilities = [
  'Real-time PCR and qPCR testing',
  'Next-generation sequencing (NGS)',
  'Digital PCR for precision quantification',
  'Multiplex PCR panels',
  'Liquid biopsy testing',
  'Viral load monitoring'
]

const clinicalAreas = [
  {
    title: 'Infectious Diseases',
    description: 'COVID-19, Hepatitis, TB resistance, Respiratory panels',
    tests: '25+ pathogens'
  },
  {
    title: 'Oncology',
    description: 'BRCA1/2, Lynch syndrome, Tumor profiling, Liquid biopsy',
    tests: '150+ mutations'
  },
  {
    title: 'Pharmacogenomics', 
    description: 'Drug metabolism, Warfarin dosing, Psychiatric medications',
    tests: '40+ genes'
  }
]

export default function MolecularDiagnosticsPage() {
  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild>
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="absolute inset-0">
          <Image
            src="/images/services/molecular-diagnostics.jpg"
            alt="Molecular Diagnostics Laboratory"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Image 
                src="/images/logos/sanimed-logo-white.png" 
                alt="Sanimed International" 
                width={200} 
                height={45}
                className="h-12 w-auto mb-6"
              />
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                <Microscope className="h-8 w-8 text-white" />
              </div>
              <div>
                <Badge className="bg-blue-400/20 text-blue-100 border-blue-400/30 mb-2">
                  Core Service
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Molecular Diagnostics
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-blue-100 max-w-3xl mb-8 leading-relaxed">
              Advanced molecular testing using cutting-edge PCR, NGS, and genomic technologies for precision medicine, 
              serving healthcare providers across the UAE through our extensive network.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Advanced Testing Capabilities
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our molecular diagnostics laboratory utilizes the latest technology to provide accurate, 
                  reliable results for healthcare providers across the UAE. From routine screening to 
                  complex genetic analysis, we deliver precision medicine solutions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Capabilities</h3>
                <div className="grid grid-cols-1 gap-3">
                  {keyCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:sticky lg:top-8">
              <div className="relative">
                <Image
                  src="/images/hero/laboratory-team.jpg"
                  alt="Laboratory Team"
                  width={500}
                  height={600}
                  className="rounded-2xl object-cover w-full h-[500px] shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Clinical Applications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive molecular testing across key medical specialties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clinicalAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <Badge className="bg-blue-100 text-blue-800 border-0">
                    {area.tests}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Molecular Diagnostics Testing?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Contact our molecular diagnostics team to discuss testing options and sample requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ModernButton size="lg" variant="primary">
              <Phone className="mr-2 w-5 h-5" />
              Contact Our Team
            </ModernButton>
            <ModernButton variant="outline" size="lg">
              <Mail className="mr-2 w-5 h-5" />
              Request Quote
            </ModernButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-white font-semibold">Abu Dhabi</div>
              <div className="text-blue-200">+971-2-6767676</div>
            </div>
            <div className="text-center">
              <div className="text-white font-semibold">Sharjah</div>
              <div className="text-blue-200">+971-6-5644445</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}