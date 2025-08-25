import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, Users, Target, Award, ArrowRight, Microscope, Dna, FlaskConical, Phone, Mail, MapPin, Building, Shield } from 'lucide-react'
import Link from 'next/link'

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
      <section className="relative bg-gradient-to-br from-blue-50 via-background to-green-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="text-6xl text-blue-600">🧬</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            About <span className="text-blue-600">Sanimed International</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Pioneering the future of healthcare through advanced molecular diagnostics, genetics, and precision medicine 
            solutions across the United Arab Emirates.
          </p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>Founded in UAE</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>CAP Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>ISO 15189 Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Target className="h-6 w-6 text-blue-600" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To provide accurate, reliable, and timely diagnostic services that support healthcare professionals 
                    in delivering the best possible patient care. We are committed to advancing precision medicine 
                    through innovative molecular diagnostic solutions that improve health outcomes across the UAE.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-600 mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Award className="h-6 w-6 text-green-600" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be the region's most trusted partner in molecular diagnostics and precision medicine, 
                    contributing to improved healthcare outcomes through cutting-edge technology, scientific excellence, 
                    and unwavering commitment to quality and innovation.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <Microscope className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Advanced Technology</h3>
                    <p className="text-sm text-muted-foreground">State-of-the-art diagnostic equipment and methodologies</p>
                  </div>
                  <div>
                    <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-sm text-muted-foreground">Rigorous quality control and accreditation standards</p>
                  </div>
                  <div>
                    <Users className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">Certified professionals and medical specialists</p>
                  </div>
                  <div>
                    <div className="h-12 w-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold">R&D</span>
                    </div>
                    <h3 className="font-semibold mb-2">Innovation</h3>
                    <p className="text-sm text-muted-foreground">Future precision medicine center development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Areas of Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three specialized diagnostic divisions working together to deliver comprehensive healthcare solutions.
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
                <CardDescription className="text-center leading-relaxed">
                  Advanced molecular testing using PCR, NGS, and other cutting-edge technologies to detect genetic 
                  variations, infectious diseases, and cancer biomarkers with exceptional accuracy.
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
                <CardDescription className="text-center leading-relaxed">
                  Comprehensive genetic testing and analysis services including hereditary disease screening, 
                  pharmacogenomics, and personalized medicine solutions with genetic counseling support.
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
                <CardDescription className="text-center leading-relaxed">
                  Complete range of clinical laboratory services including biochemistry, hematology, immunology, 
                  and microbiology to support comprehensive patient care and clinical decision-making.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Company Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-muted-foreground">Tests Performed Monthly</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-muted-foreground">Healthcare Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                <div className="text-muted-foreground">Major UAE Locations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-muted-foreground">Customer Support</div>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-semibold">CAP Accredited Laboratory</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-semibold">ISO 15189 Certified</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-semibold">UAE Health Authority Approved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future R&D Center */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-orange-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold">R&D</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Future: Precision Medicine Center</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sanimed International is actively developing a cutting-edge R&D Center for Precision Medicine. 
              This initiative will advance healthcare innovation in the region, focusing on personalized treatment 
              approaches, novel diagnostic methods, and collaborative research with international partners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card>
                <CardHeader className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">Research</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center">Advancing diagnostic technologies, biomarker discovery, and precision medicine methodologies</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">Innovation</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center">Developing next-generation solutions for personalized healthcare and treatment optimization</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">Collaboration</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center">Partnering with leading medical institutions and universities worldwide</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Serving the UAE with strategically located facilities in major emirates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-blue-600" />
                  Abu Dhabi Headquarters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+971-2-6767676</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Abu Dhabi, United Arab Emirates</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-green-600" />
                  Sharjah Branch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+971-6-5644445</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Sharjah, United Arab Emirates</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center justify-center gap-3 mt-8">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <p className="text-muted-foreground">customercare@sanimedgroup.com</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with Sanimed International</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us to learn more about our diagnostic services and how we can support your patients' healthcare needs 
            with precision, accuracy, and scientific excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
