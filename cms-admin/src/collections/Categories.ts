import { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'active', 'updatedAt'],
    description: 'Organize blog posts into medical and healthcare categories',
    group: 'Blog Management',
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version of the category name',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Brief description of this medical/healthcare category for SEO and display purposes',
      },
    },
    {
      name: 'color',
      type: 'select',
      options: [
        { label: 'Blue (Molecular Diagnostics)', value: 'blue' },
        { label: 'Green (Genetics)', value: 'green' },
        { label: 'Purple (Clinical)', value: 'purple' },
        { label: 'Orange (Research)', value: 'orange' },
        { label: 'Red (Industry News)', value: 'red' },
        { label: 'Gray (General)', value: 'gray' },
      ],
      defaultValue: 'blue',
      admin: {
        description: 'Color theme for category display',
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Display this category on the website',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
  ],
  timestamps: true,
}
