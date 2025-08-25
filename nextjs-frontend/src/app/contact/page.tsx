import { ContactForm } from '@/components/forms/ContactForm'
import { ModernButton } from '@/components/custom/modern-button'
import { MapPin, Phone, Mail, Clock, Building, MessageCircle, Microscope, Dna, FlaskConical, Send, Shield } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Contact Sanimed International - Molecular Diagnostics & Clinical Laboratory',
  description: 'Contact Sanimed International for advanced molecular diagnostics, genetics, and clinical laboratory services. Locations in Abu Dhabi and Sharjah, UAE.',
  keywords: 'contact sanimed, molecular diagnostics UAE, clinical laboratory contact, healthcare services UAE',
  openGraph: {
    title: 'Contact Sanimed International - Leading Healthcare Diagnostics',
    description: 'Get in touch with Sanimed International for precision medicine and molecular diagnostics services in the UAE.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900 to-black opacity-90"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm mb-6">
              <MessageCircle className="h-12 w-12 text-green-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
            Get in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-extralight">
              Touch
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Ready to partner with us for advanced molecular diagnostics and precision medicine? 
            Our team of experts is here to support your diagnostic needs across the UAE.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>24/7 Support Available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Professional Consultation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Expert Team</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ModernButton variant="primary" size="lg" asChild>
              <Link href="#contact-form">Send Message</Link>
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

      {/* Contact Form & Information */}
      <section className="py-32 bg-white" id="contact-form">
        <div className="max-w-7xl mx-auto px-6">
          {/* Send Us a Message Block - Full Width */}
          <div className="mb-20">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-500 to-transparent"></div>
              <div className="pl-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Send className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900">Send Us a Message</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Contact us for diagnostic services, partnership opportunities, or general inquiries. 
                  Our team will respond within 24 hours with professional guidance.
                </p>
              </div>
            </div>
            
            <div className="group relative max-w-2xl">
              {/* 3D Border Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-green-500 to-emerald-700 transform -rotate-1 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:-rotate-2"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-green-600 to-emerald-800 transform rotate-1 rounded-2xl opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:rotate-2"></div>
              
              {/* Main Form Container */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Our Locations - Left Right Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Abu Dhabi Headquarters */}
            <div className="group relative">
              {/* 3D Border Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-indigo-700 transform -rotate-1 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:-rotate-2"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-600 to-indigo-800 transform rotate-1 rounded-2xl opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:rotate-2"></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-blue-900">Abu Dhabi Headquarters</h4>
                    <p className="text-blue-600 font-medium">Main Office</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p className="font-medium">Sanimed International</p>
                  <p>Abu Dhabi, United Arab Emirates</p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">+971-2-6767676</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>customercare@sanimedgroup.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sharjah Branch */}
            <div className="group relative">
              {/* 3D Border Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500 to-green-700 transform rotate-1 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:rotate-2"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-emerald-600 to-green-800 transform -rotate-1 rounded-2xl opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:-rotate-2"></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-green-900">Sharjah Branch</h4>
                    <p className="text-green-600 font-medium">Regional Office</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p className="font-medium">Sanimed International</p>
                  <p>Sharjah, United Arab Emirates</p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-green-600" />
                      <span className="font-medium">+971-6-5555555</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-green-600" />
                      <span>sharjah@sanimedgroup.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Why Choose Sanimed International</h2>
            <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto">
              Three key pillars that make us the trusted partner for molecular diagnostics and precision medicine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Advanced Technology */}
            <div className="group relative">
              {/* 3D Border Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-indigo-800 transform -rotate-1 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:-rotate-2"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-700 to-indigo-900 transform rotate-1 rounded-2xl opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:rotate-2"></div>
              
              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-10 shadow-2xl">
                <div className="flex justify-center mb-8">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                    <Microscope className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-light mb-6 text-center">Advanced Technology</h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  State-of-the-art diagnostic equipment and cutting-edge methodologies for the most accurate results.
                </p>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="group relative">
              {/* 3D Border Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-600 to-green-800 transform rotate-1 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:rotate-2"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-emerald-700 to-green-900 transform -rotate-1 rounded-2xl opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:-rotate-2"></div>
              
              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-10 shadow-2xl">
                <div className="flex justify-center mb-8">
                  <div className="p-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-light mb-6 text-center">Quality Assurance</h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  Rigorous quality control and international accreditation standards ensuring reliable results.
                </p>
              </div>
            </div>

            {/* Expert Team */}
            <div className="group relative">
              {/* 3D Border Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-600 to-indigo-800 transform -rotate-1 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:-rotate-2"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-700 to-indigo-900 transform rotate-1 rounded-2xl opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:rotate-2"></div>
              
              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-10 shadow-2xl">
                <div className="flex justify-center mb-8">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg">
                    <Dna className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-light mb-6 text-center">Expert Team</h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  Certified professionals and medical specialists with years of experience in molecular diagnostics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-background to-green-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="group relative">
            {/* 3D Border Effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-green-600 transform -rotate-1 rounded-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:-rotate-2"></div>
            <div className="absolute -inset-2 bg-gradient-to-br from-blue-600 to-green-700 transform rotate-1 rounded-2xl opacity-30 group-hover:opacity-40 transition-all duration-500 group-hover:rotate-2"></div>
            
            {/* Main Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-12">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-green-100 rounded-full mb-6">
                  <MessageCircle className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
                Ready to Get Started?
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join us in advancing healthcare through precision medicine and molecular diagnostics. 
                Contact our team today to discuss your diagnostic needs and partnership opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ModernButton variant="primary" size="lg" asChild>
                  <Link href="#contact-form">Contact Us Now</Link>
                </ModernButton>
                <ModernButton variant="outline-dark" size="lg" asChild>
                  <Link href="/services">Explore Services</Link>
                </ModernButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}