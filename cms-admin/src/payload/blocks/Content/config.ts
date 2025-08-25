import type { Block } from 'payload'

export const Content: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        description: 'Optional title for the content section',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        description: 'Main content for this section',
      },
    },
    {
      name: 'layout',
      type: 'select',
      options: [
        { label: 'Left Aligned', value: 'left' },
        { label: 'Center Aligned', value: 'center' },
        { label: 'Right Aligned', value: 'right' },
      ],
      defaultValue: 'center',
      admin: {
        description: 'Text alignment for the content',
      },
    },
  ],
}
