import { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'address.city', 'active', 'updatedAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Location name (e.g., "Main Office", "Downtown Branch")',
      },
    },
    {
      name: 'address',
      type: 'group',
      fields: [
        {
          name: 'street',
          type: 'text',
          required: true,
        },
        {
          name: 'city',
          type: 'text',
          required: true,
        },
        {
          name: 'state',
          type: 'text',
          required: true,
        },
        {
          name: 'zipCode',
          type: 'text',
          required: true,
        },
        {
          name: 'country',
          type: 'text',
          defaultValue: 'United States',
        },
      ],
    },
    {
      name: 'coordinates',
      type: 'group',
      fields: [
        {
          name: 'latitude',
          type: 'number',
          admin: {
            description: 'GPS latitude coordinate',
          },
        },
        {
          name: 'longitude',
          type: 'number',
          admin: {
            description: 'GPS longitude coordinate',
          },
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      fields: [
        {
          name: 'phone',
          type: 'text',
        },
        {
          name: 'email',
          type: 'email',
        },
      ],
    },
    {
      name: 'hours',
      type: 'group',
      fields: [
        {
          name: 'monday',
          type: 'text',
          admin: {
            description: 'e.g., "9:00 AM - 5:00 PM" or "Closed"',
          },
        },
        {
          name: 'tuesday',
          type: 'text',
        },
        {
          name: 'wednesday',
          type: 'text',
        },
        {
          name: 'thursday',
          type: 'text',
        },
        {
          name: 'friday',
          type: 'text',
        },
        {
          name: 'saturday',
          type: 'text',
        },
        {
          name: 'sunday',
          type: 'text',
        },
      ],
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Display this location on the website',
      },
    },
    {
      name: 'primary',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mark as primary/headquarters location',
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
