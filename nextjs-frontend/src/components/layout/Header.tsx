"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X, Phone, Mail } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/images/logos/sanimed-logo.png" 
              alt="Sanimed International" 
              width={180} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          {/* Right side: Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+971-50-228-5309</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>customercare@sanimedgroup.com</span>
              </div>
            </div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                    <Image 
                      src="/images/logos/sanimed-logo.png" 
                      alt="Sanimed International" 
                      width={140} 
                      height={32}
                      className="h-8 w-auto"
                    />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <Link
                    href="/"
                    className="block py-2 text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className="block py-2 text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/blog"
                    className="block py-2 text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/about"
                    className="block py-2 text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="block py-2 text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>+971-50-228-5309</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>customercare@sanimedgroup.com</span>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}