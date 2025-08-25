import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Image or media file to display',
      },
    },
    {
      name: 'caption',
      type: 'text',
      admin: {
        description: 'Optional caption below the media',
      },
    },
    {
      name: 'layout',
      type: 'select',
      options: [
        { label: 'Full Width', value: 'full' },
        { label: 'Contained', value: 'contained' },
        { label: 'Left Aligned', value: 'left' },
        { label: 'Right Aligned', value: 'right' },
      ],
      defaultValue: 'contained',
      admin: {
        description: 'Layout style for the media',
      },
    },
  ],
}
