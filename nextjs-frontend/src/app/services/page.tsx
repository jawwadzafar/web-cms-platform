import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Microscope, Dna, FlaskConical, Check, Phone, Mail, Heart, Zap, Brain, Bone, Eye } from 'lucide-react'

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

const services = [
  {
    id: 'molecular-diagnostics',
    title: 'Molecular Diagnostics',
    icon: Microscope,
    iconColor: 'text-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    borderColor: 'border-l-blue-600',
    description: 'We have tested samples from all over the UAE – Abu Dhabi, Al Ain, Ruwais, Dubai, Sharjah, Ajman, Fujairah and Ras Al Khaimah. We have presence in a total of 62 swab collection sites.',
    detailedDescription: 'Sanimed\'s molecular diagnostics division serves the entire UAE with comprehensive testing capabilities. Our extensive network of 62 collection sites ensures accessible testing across all emirates, from major cities to remote areas. We utilize advanced molecular testing technologies to provide accurate and reliable results for healthcare providers throughout the region.',
    features: [
      'UAE-wide coverage with 62 collection sites',
      'Advanced PCR and molecular testing',
      'COVID-19 and infectious disease testing',
      'Pathogen detection and identification',
      'Antibiotic resistance testing',
      'Viral load monitoring',
      'Rapid molecular diagnostics',
      'Quality assured results'
    ],
    applications: [
      'COVID-19 Testing: RT-PCR and rapid antigen testing across UAE',
      'Infectious Diseases: Comprehensive pathogen identification',
      'Public Health: Large-scale screening and surveillance',
      'Hospital Support: Emergency and routine molecular testing',
      'Remote Areas: Mobile collection and testing services'
    ]
  },
  {
    id: 'genetics',
    title: 'Genetics',
    icon: Dna,
    iconColor: 'text-green-600',
    bgColor: 'from-green-50 to-green-100',
    borderColor: 'border-l-green-600',
    description: 'Sanimed lab is equipped with the latest technology for molecular diagnostics in Genetics. Our comprehensive range of tests is designed to support clinicians in making effective treatment decisions.',
    detailedDescription: 'Our genetics laboratory utilizes cutting-edge molecular diagnostic technologies to provide comprehensive genetic testing services. We support clinicians with advanced genetic analysis capabilities, enabling precise diagnosis and personalized treatment approaches for optimal patient outcomes.',
    features: [
      'Hereditary disease screening',
      'Carrier testing',
      'Prenatal genetic testing',
      'Pharmacogenomic analysis',
      'Whole exome sequencing',
      'Genetic counseling services',
      'Family history analysis',
      'Risk assessment and management'
    ],
    applications: [
      'Hereditary Cancer: BRCA1/2, Lynch syndrome screening',
      'Cardiovascular Genetics: Familial hypercholesterolemia, cardiomyopathy',
      'Reproductive Health: Carrier screening, prenatal testing',
      'Neurogenetics: Alzheimer\'s, Parkinson\'s disease markers',
      'Metabolic Disorders: Genetic enzyme deficiency screening'
    ]
  },
  {
    id: 'clinical-diagnostics',
    title: 'Clinical Diagnostics',
    icon: FlaskConical,
    iconColor: 'text-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    borderColor: 'border-l-purple-600',
    description: 'Sanimed Laboratory offers a wide variety of tests with high precision using the best technology.',
    detailedDescription: 'Our clinical diagnostics laboratory provides comprehensive testing across multiple specialties including clinical biochemistry, hematology, coagulation, special chemistry, serology, immunology, and transfusion medicine. We utilize the latest technology to ensure high precision and accurate results for optimal patient care.',
    features: [
      'Clinical Biochemistry',
      'Hematology & Coagulation',
      'Special Chemistry',
      'Serology Testing',
      'Immunology',
      'Transfusion Medicine',
      'High-precision technology',
      'Quality assured results'
    ],
    applications: [
      'Routine Health Screening: Annual checkups and wellness monitoring',
      'Chronic Disease Management: Diabetes, hypertension, heart disease',
      'Infectious Disease Diagnosis: Bacterial, viral, and fungal infections',
      'Endocrine Disorders: Thyroid, diabetes, reproductive hormones',
      'Cardiovascular Health: Lipid profiles, cardiac risk assessment'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-32">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-900/20"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-indigo-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
              <span className="text-blue-200 text-sm font-medium">Advanced Diagnostics • UAE-wide Coverage</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
              Our <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Sanimed International delivers three core areas of expertise in advanced molecular diagnostics, 
              genetics, and clinical laboratory services across the United Arab Emirates.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-blue-100">CAP Accredited</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-150"></div>
                <span className="text-blue-100">ISO 15189 Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
                <span className="text-blue-100">62 Collection Sites</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} className="group">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  {/* Service Overview */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative">
                      {/* Glowing background effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.bgColor} rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700`}></div>
                      
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:transform group-hover:scale-[1.02]">
                        <div className="flex items-center gap-6 mb-8">
                          <div className={`relative bg-gradient-to-br ${service.bgColor} rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:transform group-hover:rotate-3`}>
                            <service.icon className={`h-16 w-16 ${service.iconColor} group-hover:scale-110 transition-transform duration-500`} />
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                          </div>
                          <div>
                            <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                              {service.title}
                            </h2>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="text-xs font-semibold bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0">
                                Core Service
                              </Badge>
                              <div className={`w-2 h-2 ${service.iconColor.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
                            </div>
                          </div>
                        </div>
                    
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                          {service.detailedDescription}
                        </p>

                        <div className="space-y-6">
                          <h3 className="text-xl font-semibold text-gray-800">Key Features</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-3 group/feature">
                                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full group-hover/feature:scale-150 transition-transform duration-300"></div>
                                <span className="text-sm text-gray-700 group-hover/feature:text-gray-900 transition-colors duration-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Applications & Image */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative group/image">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover/image:blur-3xl transition-all duration-700"></div>
                      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 group-hover/image:shadow-3xl transition-all duration-700">
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                          Clinical Applications
                        </h3>
                        <div className="space-y-6">
                          {service.applications.map((application, appIndex) => (
                            <div key={appIndex} className="group/app p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-gray-200/50 hover:border-blue-200 hover:shadow-lg">
                              <div className="font-semibold text-gray-900 mb-2 group-hover/app:text-blue-800 transition-colors">
                                {application.split(':')[0]}
                              </div>
                              <div className="text-sm text-gray-600 group-hover/app:text-gray-700 transition-colors">
                                {application.split(':')[1]}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative group/cta">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-3xl blur-2xl opacity-30 group-hover/cta:opacity-40 transition-opacity duration-700`}></div>
                      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 group-hover/cta:shadow-2xl transition-all duration-700">
                        <h3 className="text-xl font-bold mb-6 text-gray-900">Why Choose Our {service.title}?</h3>
                        <div className="space-y-4">
                          {[
                            'State-of-the-art technology and equipment',
                            'Expert team of certified professionals', 
                            'Rapid turnaround times',
                            'Comprehensive reporting and consultation'
                          ].map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center gap-3 group/item">
                              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                <Check className="h-3 w-3 text-white" />
                              </div>
                              <span className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* R&D Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">R&D</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Future: Precision Medicine Center</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sanimed International is actively developing a cutting-edge R&D Center for Precision Medicine. 
              This initiative will advance healthcare innovation in the region, focusing on personalized treatment 
              approaches, novel diagnostic methods, and collaborative research with international partners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">Research</div>
                <p className="text-sm">Advancing diagnostic technologies and methodologies</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">Innovation</div>
                <p className="text-sm">Developing next-generation precision medicine solutions</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">Collaboration</div>
                <p className="text-sm">Partnering with leading institutions worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Our Diagnostic Services?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our team to discuss your diagnostic needs and learn how our services can support your patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/blog">Latest Updates</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
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