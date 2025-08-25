import type { Block } from 'payload'

export const CallToAction: Block = {
  slug: 'callToAction',
  interfaceName: 'CallToActionBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Main headline for the call-to-action section',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Description text below the title',
      },
    },
    {
      name: 'links',
      type: 'array',
      admin: {
        description: 'Action buttons',
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
            description: 'URL for the button',
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
