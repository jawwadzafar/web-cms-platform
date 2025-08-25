'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

interface CallToActionBlock {
  title?: string
  description?: string
  links?: Array<{
    label: string
    url: string
    variant?: 'default' | 'outline'
  }>
}

export const CallToAction: React.FC<CallToActionBlock> = ({ 
  title, 
  description, 
  links 
}) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="bg-background border-0 shadow-lg">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              {title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {title}
                </h2>
              )}
              
              {description && (
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {description}
                </p>
              )}
            </div>
            
            {links && links.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {links.map((link, index) => (
                  <Button
                    key={index}
                    variant={link.variant === 'outline' ? 'outline' : 'default'}
                    size="lg"
                    asChild
                  >
                    <Link href={link.url}>
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
