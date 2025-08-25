import { Metadata } from 'next'
import { ModernButton } from '@/components/custom'
import { Check, Users, Target, Award, ArrowRight, Microscope, Dna, FlaskConical, Phone, Mail, MapPin, Building, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Sanimed International - Leading Molecular Diagnostics & Clinical Laboratory',
  description: 'Learn about Sanimed International, our mission in precision medicine, and our commitment to advancing healthcare through molecular diagnostics and clinical excellence.',
  keywords: 'about sanimed, molecular diagnostics company, precision medicine UAE, clinical laboratory, healthcare innovation',
  openGraph: {
    title: 'About Sanimed International - Leading Healthcare Diagnostics',
    description: 'Pioneering precision medicine and molecular diagnostics in the UAE with advanced technology and scientific excellence.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black opacity-90"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 69, 194, 0.3) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm mb-6">
              <Microscope className="h-12 w-12 text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-extralight">
              Sanimed International
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Pioneering the future of healthcare through advanced molecular diagnostics, genetics, and precision medicine 
            solutions across the United Arab Emirates.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Founded in UAE</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>CAP Accredited</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>ISO 15189 Certified</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ModernButton variant="primary" size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </ModernButton>
            <ModernButton variant="outline" size="lg" asChild>
              <Link href="/services">Our Services</Link>
            </ModernButton>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
                <div className="pl-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-light text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To provide accurate, reliable, and timely diagnostic services that support healthcare professionals 
                    in delivering the best possible patient care. We are committed to advancing precision medicine 
                    through innovative molecular diagnostic solutions that improve health outcomes across the UAE.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-500 to-transparent"></div>
                <div className="pl-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-light text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To be the region's most trusted partner in molecular diagnostics and precision medicine, 
                    contributing to improved healthcare outcomes through cutting-edge technology, scientific excellence, 
                    and unwavering commitment to quality and innovation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-12 rounded-2xl">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div className="group">
                    <div className="p-4 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 mb-4">
                      <Microscope className="h-8 w-8 text-blue-600 mx-auto" />
                    </div>
                    <h4 className="font-medium mb-2 text-gray-900">Advanced Technology</h4>
                    <p className="text-sm text-gray-600">State-of-the-art diagnostic equipment and methodologies</p>
                  </div>
                  <div className="group">
                    <div className="p-4 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 mb-4">
                      <Shield className="h-8 w-8 text-green-600 mx-auto" />
                    </div>
                    <h4 className="font-medium mb-2 text-gray-900">Quality Assurance</h4>
                    <p className="text-sm text-gray-600">Rigorous quality control and accreditation standards</p>
                  </div>
                  <div className="group">
                    <div className="p-4 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 mb-4">
                      <Users className="h-8 w-8 text-purple-600 mx-auto" />
                    </div>
                    <h4 className="font-medium mb-2 text-gray-900">Expert Team</h4>
                    <p className="text-sm text-gray-600">Certified professionals and medical specialists</p>
                  </div>
                  <div className="group">
                    <div className="p-4 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 mb-4">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center mx-auto">
                        <span className="text-sm font-bold">R&D</span>
                      </div>
                    </div>
                    <h4 className="font-medium mb-2 text-gray-900">Innovation</h4>
                    <p className="text-sm text-gray-600">Future precision medicine center development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Our Areas of Expertise</h2>
            <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto">
              Three specialized diagnostic divisions working together to deliver comprehensive healthcare solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Molecular Diagnostics */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-500">
                <div className="flex justify-center mb-8">
                  <div className="p-4 bg-blue-500/20 rounded-xl">
                    <Microscope className="h-12 w-12 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-light mb-6 text-center">Molecular Diagnostics</h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  Advanced molecular testing using PCR, NGS, and other cutting-edge technologies to detect genetic 
                  variations, infectious diseases, and cancer biomarkers with exceptional accuracy.
                </p>
              </div>
            </div>

            {/* Genetics */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:border-green-400/30 transition-all duration-500">
                <div className="flex justify-center mb-8">
                  <div className="p-4 bg-green-500/20 rounded-xl">
                    <Dna className="h-12 w-12 text-green-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-light mb-6 text-center">Genetics</h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  Comprehensive genetic testing and analysis services including hereditary disease screening, 
                  pharmacogenomics, and personalized medicine solutions with genetic counseling support.
                </p>
              </div>
            </div>

            {/* Clinical Diagnostics */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-500">
                <div className="flex justify-center mb-8">
                  <div className="p-4 bg-purple-500/20 rounded-xl">
                    <FlaskConical className="h-12 w-12 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-light mb-6 text-center">Clinical Diagnostics</h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  Complete range of clinical laboratory services including biochemistry, hematology, immunology, 
                  and microbiology to support comprehensive patient care and clinical decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Achievements */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">Company Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="text-5xl font-light text-blue-600 group-hover:scale-110 transition-transform duration-300">10,000+</div>
                <div className="absolute -inset-4 bg-blue-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 font-light">Tests Performed Monthly</div>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="text-5xl font-light text-green-600 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="absolute -inset-4 bg-green-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 font-light">Healthcare Partners</div>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="text-5xl font-light text-purple-600 group-hover:scale-110 transition-transform duration-300">2</div>
                <div className="absolute -inset-4 bg-purple-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 font-light">Major UAE Locations</div>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="text-5xl font-light text-orange-600 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="absolute -inset-4 bg-orange-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="text-gray-600 font-light">Customer Support</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-3 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <Shield className="h-6 w-6 text-green-600" />
              <span className="font-medium text-gray-900">CAP Accredited Laboratory</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <Shield className="h-6 w-6 text-green-600" />
              <span className="font-medium text-gray-900">ISO 15189 Certified</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <Shield className="h-6 w-6 text-green-600" />
              <span className="font-medium text-gray-900">UAE Health Authority Approved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Future R&D Center */}
      <section className="py-32 bg-gradient-to-br from-orange-50 via-orange-100 to-yellow-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl mb-8">
              <span className="text-2xl font-light text-white">R&D</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900">Future: Precision Medicine Center</h2>
            <p className="text-xl font-light text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Sanimed International is actively developing a cutting-edge R&D Center for Precision Medicine. 
              This initiative will advance healthcare innovation in the region, focusing on personalized treatment 
              approaches, novel diagnostic methods, and collaborative research with international partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-orange-100">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-xl mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                    <span className="text-2xl font-light text-orange-600">R</span>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">Research</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Advancing diagnostic technologies, biomarker discovery, and precision medicine methodologies
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-orange-100">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-xl mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                    <span className="text-2xl font-light text-orange-600">I</span>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Developing next-generation solutions for personalized healthcare and treatment optimization
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-orange-100">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-xl mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                    <span className="text-2xl font-light text-orange-600">C</span>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">Collaboration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Partnering with leading medical institutions and universities worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">Our Locations</h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Serving the UAE with strategically located facilities in major emirates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="group">
              <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900">Abu Dhabi Headquarters</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">+971-2-6767676</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">Abu Dhabi, United Arab Emirates</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-green-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors duration-300">
                    <Building className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900">Sharjah Branch</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">+971-6-5644445</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">Sharjah, United Arab Emirates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm">
              <Mail className="h-5 w-5 text-gray-400" />
              <span className="text-gray-700">customercare@sanimedgroup.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">Partner with Sanimed International</h2>
          <p className="text-xl font-light opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Contact us to learn more about our diagnostic services and how we can support your patients' healthcare needs 
            with precision, accuracy, and scientific excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <ModernButton variant="primary" size="lg" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </ModernButton>
            <ModernButton variant="outline" size="lg" asChild>
              <Link href="/services">Our Services</Link>
            </ModernButton>
          </div>
        </div>
      </section>
    </div>
  )
}
