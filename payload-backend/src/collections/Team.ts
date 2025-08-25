import { CollectionConfig } from 'payload'

export const Team: CollectionConfig = {
  slug: 'team',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'active', 'updatedAt'],
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
        description: 'URL path for this team member (auto-generated if left empty)',
      },
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      admin: {
        description: 'Job title or position',
      },
    },
    {
      name: 'bio',
      type: 'richText',
      admin: {
        description: 'Professional biography',
      },
    },
    {
      name: 'shortBio',
      type: 'textarea',
      admin: {
        description: 'Brief description for team cards',
      },
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'socialMedia',
      type: 'group',
      fields: [
        {
          name: 'linkedin',
          type: 'text',
        },
        {
          name: 'twitter',
          type: 'text',
        },
        {
          name: 'facebook',
          type: 'text',
        },
      ],
    },
    {
      name: 'specializations',
      type: 'array',
      fields: [
        {
          name: 'specialization',
          type: 'text',
        },
      ],
    },
    {
      name: 'education',
      type: 'array',
      fields: [
        {
          name: 'degree',
          type: 'text',
        },
        {
          name: 'institution',
          type: 'text',
        },
        {
          name: 'year',
          type: 'text',
        },
      ],
    },
    {
      name: 'certifications',
      type: 'array',
      fields: [
        {
          name: 'certification',
          type: 'text',
        },
        {
          name: 'organization',
          type: 'text',
        },
        {
          name: 'year',
          type: 'text',
        },
      ],
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Display this team member on the website',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Display this team member prominently',
      },
    },
    {
      name: 'orderIndex',
      type: 'number',
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
  ],
}