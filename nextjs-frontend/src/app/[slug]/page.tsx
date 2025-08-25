import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { api } from '@/lib/api-client'
import { PageRenderer } from '@/components/cms/PageRenderer'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const response = await api.pages.getBySlug(params.slug)
    const page = response.data.docs?.[0]

    if (!page) {
      return {
        title: 'Page Not Found',
        description: 'The requested page could not be found.',
      }
    }

    return {
      title: page.meta?.title || page.title,
      description: page.meta?.description || page.excerpt,
      keywords: page.meta?.keywords,
      openGraph: page.meta?.ogImage ? {
        images: [{
          url: page.meta.ogImage.url,
          alt: page.meta.ogImage.alt,
        }],
      } : undefined,
    }
  } catch (error) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    }
  }
}

export default async function DynamicPage({ params }: PageProps) {
  try {
    const response = await api.pages.getBySlug(params.slug)
    const page = response.data.docs?.[0]

    if (!page) {
      notFound()
    }

    return <PageRenderer page={page} />
  } catch (error) {
    console.error('Failed to fetch page:', error)
    notFound()
  }
}
