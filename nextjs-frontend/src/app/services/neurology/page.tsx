import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Neurology - Sanimed International',
  description: 'Coming soon - Neurology services at Sanimed International.',
}

export default function NeurologyPage() {
  return (
    <div className="min-h-screen">
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="gap-2">
            <Link href="/services">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        </div>
      </div>
      
      <section className="py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Neurology</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Our Neurology services are coming soon. Stay tuned for comprehensive diagnostic solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/services">All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
