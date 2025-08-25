'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface ContentBlock {
  title?: string
  content?: string
  layout?: 'left' | 'center' | 'right'
}

export const Content: React.FC<ContentBlock> = ({ 
  title, 
  content, 
  layout = 'center' 
}) => {
  const layoutClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="bg-background border-0 shadow-sm">
          <CardContent className="p-8 md:p-12">
            <div className={`max-w-4xl mx-auto ${layoutClasses[layout]}`}>
              {title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {title}
                </h2>
              )}
              
              {content && (
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
