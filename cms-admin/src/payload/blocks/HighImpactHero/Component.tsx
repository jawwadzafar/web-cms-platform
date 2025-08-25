'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

interface HighImpactHeroBlock {
  title?: string
  subtitle?: string
  description?: string
  media?: {
    url: string
    alt: string
  }
  links?: Array<{
    label: string
    url: string
    variant?: 'default' | 'outline'
  }>
}

export const HighImpactHero: React.FC<HighImpactHeroBlock> = ({ 
  title, 
  subtitle, 
  description, 
  media, 
  links 
}) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      {media && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={media.url}
            alt={media.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center z-10">
        <Card className="bg-background/90 backdrop-blur-sm border-0 shadow-2xl max-w-4xl mx-auto">
          <CardContent className="p-12">
            {subtitle && (
              <p className="text-lg text-muted-foreground mb-4 font-medium">
                {subtitle}
              </p>
            )}
            
            {title && (
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                {title}
              </h1>
            )}
            
            {description && (
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {description}
              </p>
            )}
            
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
    </div>
  )
}
