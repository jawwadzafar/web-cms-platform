import { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'active', 'updatedAt'],
    description: 'Tag blog posts with medical terminology, conditions, and healthcare topics',
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
        description: 'URL-friendly version of the tag name',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Brief description of this medical/healthcare tag for SEO purposes',
      },
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Medical Condition', value: 'condition' },
        { label: 'Treatment/Therapy', value: 'treatment' },
        { label: 'Diagnostic Test', value: 'diagnostic' },
        { label: 'Research Topic', value: 'research' },
        { label: 'Technology/Equipment', value: 'technology' },
        { label: 'Industry News', value: 'news' },
        { label: 'General', value: 'general' },
      ],
      defaultValue: 'general',
      admin: {
        description: 'Categorize the type of medical topic this tag represents',
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Display this tag on the website',
      },
    },
  ],
  timestamps: true,
}
