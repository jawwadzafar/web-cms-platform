import { ContactForm } from '@/components/forms/ContactForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Building, MessageCircle, Microscope, Dna, FlaskConical } from 'lucide-react'
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
      <section className="relative bg-gradient-to-br from-blue-50 via-background to-green-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="text-6xl text-blue-600">🧬</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Contact <span className="text-blue-600">Sanimed International</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to partner with us for advanced molecular diagnostics and precision medicine? 
            Our team of experts is here to support your diagnostic needs across the UAE.
          </p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-green-600" />
              <span>24/7 Support Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-green-600" />
              <span>Professional Consultation</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  Contact us for diagnostic services, partnership opportunities, or general inquiries. 
                  Our team will respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* UAE Locations */}
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <Building className="w-5 h-5 mr-2 text-blue-600" />
                  Abu Dhabi Headquarters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Sanimed International</p>
                  <p className="text-muted-foreground">Abu Dhabi, United Arab Emirates</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">+971-2-6767676</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>customercare@sanimedgroup.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <Building className="w-5 h-5 mr-2 text-green-600" />
                  Sharjah Branch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Sanimed International</p>
                  <p className="text-muted-foreground">Sharjah, United Arab Emirates</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span className="font-medium">+971-6-5644445</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span>customercare@sanimedgroup.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday - Thursday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Friday</span>
                  <span className="font-medium">8:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="pt-2 mt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    For urgent diagnostic requests or support, please contact our customer care team at any time.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 text-white">
              <CardHeader>
                <CardTitle>24/7 Customer Support</CardTitle>
                <CardDescription className="text-white/90">
                  Professional diagnostic consultation and support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-lg">customercare@sanimedgroup.com</p>
                <p className="text-white/90 text-sm mt-2">
                  Our team of medical professionals and customer care specialists are available to assist 
                  with diagnostic inquiries, test results, and technical support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Services Quick Links */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Our Diagnostic Services</CardTitle>
              <CardDescription>
                Learn more about our specialized diagnostic capabilities and how we can support your healthcare needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-3">
                    <Microscope className="h-8 w-8 text-blue-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold mb-2">Molecular Diagnostics</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Advanced PCR, NGS, and genetic testing for precision medicine
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/services#molecular-diagnostics">Learn More</Link>
                  </Button>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-3">
                    <Dna className="h-8 w-8 text-green-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold mb-2">Genetics</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Comprehensive genetic testing and hereditary disease screening
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/services#genetics">Learn More</Link>
                  </Button>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-3">
                    <FlaskConical className="h-8 w-8 text-purple-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold mb-2">Clinical Diagnostics</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Complete laboratory services for comprehensive patient care
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/services#clinical-diagnostics">Learn More</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Partnership Information */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50">
            <CardHeader>
              <CardTitle>Partnership Opportunities</CardTitle>
              <CardDescription>
                Interested in partnering with Sanimed International? We welcome collaborations with healthcare providers, 
                medical institutions, and research organizations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Healthcare Providers</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Hospitals and medical centers</li>
                    <li>• Specialty clinics and practices</li>
                    <li>• Primary care physicians</li>
                    <li>• Diagnostic imaging centers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Research & Academic</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Universities and medical schools</li>
                    <li>• Research institutions</li>
                    <li>• Pharmaceutical companies</li>
                    <li>• Biotechnology organizations</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our business development team to explore partnership opportunities and learn about 
                  our collaborative research initiatives in precision medicine.
                </p>
                <Button asChild>
                  <Link href="mailto:partnerships@sanimedgroup.com">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Partnership Team
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>
    </div>
  )
}