import { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { slugField } from '@/payload/fields/slug'

// WordPress-style Posts for familiar blog management
export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Post',
    plural: 'Posts',
  },
  admin: {
    useAsTitle: 'title',
    description: 'Manage blog posts, company news, and medical industry updates.',
    defaultColumns: ['title', 'slug', 'status', 'publishedDate', 'author', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        if (data?.slug) {
          return `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blog/${data.slug}`
        }
        return `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blog`
      },
    },
    group: 'Content',
  },
  access: {
    read: () => true, // Public read access
    create: ({ req }) => !!req.user, // Only authenticated users can create
    update: ({ req }) => !!req.user, // Only authenticated users can update
    delete: ({ req }) => !!req.user, // Only authenticated users can delete
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
      relationTo: 'users',
      hasMany: false,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
        description: 'When this article should be published',
      },
      defaultValue: () => new Date(),
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Archived',
          value: 'archived',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
        description: 'Current status of this article',
      },
      required: true,
    },
    {
      name: 'readTime',
      type: 'number',
      admin: {
        position: 'sidebar',
        description: 'Estimated reading time in minutes (auto-calculated if empty)',
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
        interval: 100, // Auto-save every 100ms
      },
    },
    maxPerDoc: 50, // Keep last 50 versions
  },
  hooks: {
    beforeValidate: [
      ({ data, operation }) => {
        // Auto-calculate read time if not provided
        if (!data?.readTime && data?.content) {
          const contentString = JSON.stringify(data.content);
          const wordCount = contentString.split(' ').length;
          data.readTime = Math.ceil(wordCount / 200); // Average reading speed
        }
        
        // Auto-set published date if publishing for first time
        if (operation === 'create' && data?.status === 'published' && !data?.publishedDate) {
          data.publishedDate = new Date();
        }
        
        return data;
      },
    ],
  },
}
