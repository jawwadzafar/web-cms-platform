import { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { slugField } from '@/payload/fields/slug'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'active', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        if (data?.slug) {
          return `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/services/${data.slug}`
        }
        return `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/services`
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
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Brief description for service cards and previews',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      editor: lexicalEditor({}),
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      type: 'array',
      admin: {
        description: 'Additional images for this service',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          admin: {
            description: 'Optional caption for the image',
          },
        },
      ],
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'pricing',
      type: 'group',
      admin: {
        description: 'Pricing information',
        position: 'sidebar',
      },
      fields: [
        {
          name: 'startingPrice',
          type: 'number',
          admin: {
            description: 'Starting price in dollars',
          },
        },
        {
          name: 'priceRange',
          type: 'text',
          admin: {
            description: 'e.g., "$100 - $500" or "Starting at $200"',
          },
        },
        {
          name: 'pricingDetails',
          type: 'textarea',
          admin: {
            description: 'Additional pricing information',
          },
        },
        {
          name: 'currency',
          type: 'select',
          options: [
            { label: 'USD ($)', value: 'USD' },
            { label: 'EUR (€)', value: 'EUR' },
            { label: 'GBP (£)', value: 'GBP' },
          ],
          defaultValue: 'USD',
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      admin: {
        description: 'Key features of this service',
      },
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'Brief description of this feature',
          },
        },
      ],
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Display this service on the website',
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Display this service prominently on the homepage',
        position: 'sidebar',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Display order (lower numbers appear first)',
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
            description: 'SEO title (leave empty to use service title)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'SEO meta description (leave empty to use short description)',
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
