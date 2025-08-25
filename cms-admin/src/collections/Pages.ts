import { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { slugField } from '@/payload/fields/slug'

// Import block configurations
import { HighImpactHero } from '@/payload/blocks/HighImpactHero/config'
import { CallToAction } from '@/payload/blocks/CallToAction/config'
import { Content } from '@/payload/blocks/Content/config'
import { MediaBlock } from '@/payload/blocks/MediaBlock/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'published', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        if (data?.slug) {
          return `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/${data.slug}`
        }
        return `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}`
      },
    },
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      admin: {
        description: 'Brief description for meta tags and previews',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'blocks',
      type: 'blocks',
      admin: {
        description: 'Build your page using content blocks',
        initCollapsed: true,
      },
      blocks: [
        HighImpactHero,
        CallToAction,
        Content,
        MediaBlock,
      ],
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'showInNavigation',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Display this page in the main navigation menu',
        position: 'sidebar',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Navigation order (lower numbers appear first)',
        position: 'sidebar',
      },
    },
    {
      name: 'meta',
      type: 'group',
      admin: {
        description: 'SEO settings',
        position: 'sidebar',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'SEO title (leave empty to use page title)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'SEO meta description',
          },
        },
        {
          name: 'keywords',
          type: 'text',
          admin: {
            description: 'Comma-separated keywords for SEO',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Open Graph image for social sharing',
          },
        },
      ],
    },
    ...slugField(),
  ],
  timestamps: true,
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
    },
  },
}
