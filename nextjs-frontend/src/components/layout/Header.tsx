"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll for transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const newIsScrolled = scrollTop > 20
      setIsScrolled(newIsScrolled)
    }

    // Set initial state
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent border-b-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src={isScrolled ? "/images/logos/sanimed-logo.png" : "/images/logos/sanimed-logo-white.png"}
              alt="Sanimed International" 
              width={180} 
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/blog" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right side: Empty for balance */}
          <div className="hidden lg:flex items-center">
            {/* Empty div for visual balance */}
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className={`lg:hidden ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Full Screen Menu */}
          <div className="fixed inset-0 bg-white z-50">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
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
                  className="text-gray-600 hover:text-gray-900"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              {/* Navigation Links - Centered */}
              <nav className="flex-1 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <Link
                    href="/"
                    className="block py-4 text-2xl font-semibold text-gray-900 transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className="block py-4 text-2xl font-semibold text-gray-900 transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/blog"
                    className="block py-4 text-2xl font-semibold text-gray-900 transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/about"
                    className="block py-4 text-2xl font-semibold text-gray-900 transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="block py-4 text-2xl font-semibold text-gray-900 transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </nav>
              
              {/* Footer */}
              <div className="p-6 border-t border-gray-200 text-center">
                <div className="text-sm text-gray-600">
                  <p className="font-medium text-gray-900 mb-2">Sanimed International</p>
                  <p>Advanced molecular diagnostics & precision medicine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}