import { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { slugField } from '@/payload/fields/slug'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'published', 'publishedDate', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        if (data?.slug) {
          return `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blog/${data.slug}`
        }
        return `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blog`
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
      required: true,
      admin: {
        description: 'Brief description for post previews and meta tags',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({}),
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false,
      required: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'team',
      hasMany: false,
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Display this post prominently on the homepage',
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
            description: 'SEO title (leave empty to use post title)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'SEO meta description (leave empty to use excerpt)',
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
