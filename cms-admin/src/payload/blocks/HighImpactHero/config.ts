import type { Block } from 'payload'

export const HighImpactHero: Block = {
  slug: 'highImpactHero',
  interfaceName: 'HighImpactHeroBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Main headline for the hero section',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      admin: {
        description: 'Optional subtitle above the main title',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Brief description below the title',
      },
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Background image for the hero section',
      },
    },
    {
      name: 'links',
      type: 'array',
      admin: {
        description: 'Call-to-action buttons',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          admin: {
            description: 'URL for the button (e.g., /contact, /services)',
          },
        },
        {
          name: 'variant',
          type: 'select',
          options: [
            { label: 'Primary', value: 'default' },
            { label: 'Secondary', value: 'outline' },
          ],
          defaultValue: 'default',
        },
      ],
    },
  ],
}
