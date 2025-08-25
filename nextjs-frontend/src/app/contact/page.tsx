import { ContactForm } from '@/components/forms/ContactForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - Medical Center',
  description: 'Get in touch with our medical center. Schedule appointments, ask questions, or find our location.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to schedule an appointment or have questions about our services? We&apos;re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Medical Center Main Campus</p>
                  <p className="text-muted-foreground">123 Medical Drive</p>
                  <p className="text-muted-foreground">Healthcare City, HC 12345</p>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Phone className="w-4 h-4 mr-2 text-primary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="font-medium">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Main Line</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Mail className="w-4 h-4 mr-2 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="font-medium">info@medicalcenter.com</p>
                  <p className="text-sm text-muted-foreground">General Inquiries</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Hours of Operation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Emergency Only</span>
                </div>
                <div className="pt-2 mt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    For after-hours emergencies, please call our main number and follow the prompts for emergency services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Emergency Services</CardTitle>
                <CardDescription className="text-primary-foreground/90">
                  Available 24/7 for urgent medical needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-lg">(555) 911-HELP</p>
                <p className="text-primary-foreground/90 text-sm mt-2">
                  For life-threatening emergencies, call 911 or go to your nearest emergency room.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Insurance & Payment Information</CardTitle>
              <CardDescription>
                We work with most major insurance providers and offer flexible payment options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Accepted Insurance</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Medicare & Medicaid</li>
                    <li>• Blue Cross Blue Shield</li>
                    <li>• Aetna</li>
                    <li>• United Healthcare</li>
                    <li>• Cigna</li>
                    <li>• And many more</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Payment Options</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Cash and Check</li>
                    <li>• Credit/Debit Cards</li>
                    <li>• Payment Plans Available</li>
                    <li>• Financial Assistance Programs</li>
                    <li>• HSA/FSA Accepted</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}