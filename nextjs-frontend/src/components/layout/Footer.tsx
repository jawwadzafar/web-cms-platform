import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image 
                src="/images/logos/sanimed-logo.png" 
                alt="Sanimed International" 
                width={160} 
                height={36}
                className="h-9 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Solutions For A Changing World. Leading molecular diagnostics, genetics, 
              and clinical laboratory services. Advancing precision medicine in the UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Our Services
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Our Blog
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Our Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/services/molecular-diagnostics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Molecular Diagnostics
              </Link>
              <Link href="/services/genetics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Genetics
              </Link>
              <Link href="/services/clinical-diagnostics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Clinical Diagnostics
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground" />
                <div className="text-sm text-muted-foreground">
                  <p>Abu Dhabi & Sharjah</p>
                  <p>United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <div className="text-sm text-muted-foreground">
                  <p>Abu Dhabi: +971-50-228-5309</p>
                  <p>Sharjah: +971-50-228-4629</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">customercare@sanimedgroup.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 text-muted-foreground" />
                <div className="text-sm text-muted-foreground">
                  <p>Laboratory Services</p>
                  <p>24/7 Emergency Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sanimed International. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://www.facebook.com/people/Sanimed-International-Lab-and-Management-LLC/61553396977755/?mibextid=LQQJ4d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link 
                href="https://www.instagram.com/sanimedinternational/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-pink-600 transition-colors p-2 hover:bg-pink-50 rounded-full"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/sanimedgroup/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-700 transition-colors p-2 hover:bg-blue-50 rounded-full"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}