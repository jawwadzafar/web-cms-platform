'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

interface MediaBlockProps {
  media?: {
    url: string
    alt: string
  }
  caption?: string
  layout?: 'full' | 'contained' | 'left' | 'right'
}

export const MediaBlock: React.FC<MediaBlockProps> = ({ 
  media, 
  caption, 
  layout = 'contained' 
}) => {
  if (!media) return null

  const layoutClasses = {
    full: 'w-full',
    contained: 'max-w-4xl mx-auto',
    left: 'ml-0 mr-auto',
    right: 'ml-auto mr-0'
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className={`${layoutClasses[layout]} ${layout === 'full' ? '' : 'max-w-4xl'}`}>
          <Card className="bg-background border-0 shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src={media.url}
                  alt={media.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                {caption && (
                  <div className="p-4 bg-muted/50">
                    <p className="text-sm text-muted-foreground text-center italic">
                      {caption}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
