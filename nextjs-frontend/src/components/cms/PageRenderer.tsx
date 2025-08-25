'use client'

import React from 'react'

interface PageData {
  id: string
  title: string
  excerpt?: string
  slug: string
  blocks?: any[]
  featuredImage?: {
    url: string
    alt: string
  }
  published: boolean
  publishedAt?: string
  meta?: {
    title?: string
    description?: string
    keywords?: string
    ogImage?: {
      url: string
    }
  }
}

interface PageRendererProps {
  page: PageData
}

export const PageRenderer: React.FC<PageRendererProps> = ({ page }) => {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{page.title}</h1>
          {page.excerpt && (
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{page.excerpt}</p>
          )}
        </div>
      </section>
      
      {page.blocks && page.blocks.length > 0 ? (
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-center text-muted-foreground">
                  This page contains dynamic content blocks that are managed through the CMS.
                  Content will be displayed here once the block rendering system is fully integrated.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                This page is currently being built. Content will appear here once blocks are added in the CMS.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
