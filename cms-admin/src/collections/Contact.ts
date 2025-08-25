import { CollectionConfig } from 'payload'

export const Contact: CollectionConfig = {
  slug: 'contact',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'subject', 'createdAt', 'status'],
    group: 'Communication',
  },
  access: {
    create: () => true, // Anyone can submit contact forms
    read: () => false, // Only admins can read
    update: () => false, // No updates allowed
    delete: () => false, // No deletion allowed
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Contact person name',
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      admin: {
        description: 'Contact email address',
      },
    },
    {
      name: 'phone',
      type: 'text',
      admin: {
        description: 'Contact phone number (optional)',
      },
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
      admin: {
        description: 'Subject of the inquiry',
      },
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Contact message content',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Responded', value: 'responded' },
        { label: 'Closed', value: 'closed' },
        { label: 'Spam', value: 'spam' },
      ],
      admin: {
        description: 'Current status of this contact request',
        position: 'sidebar',
      },
    },
    {
      name: 'priority',
      type: 'select',
      defaultValue: 'normal',
      options: [
        { label: 'Low', value: 'low' },
        { label: 'Normal', value: 'normal' },
        { label: 'High', value: 'high' },
        { label: 'Urgent', value: 'urgent' },
      ],
      admin: {
        description: 'Priority level of this request',
        position: 'sidebar',
      },
    },
    {
      name: 'assignedTo',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        description: 'Team member assigned to handle this request',
        position: 'sidebar',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Internal notes about this contact request',
      },
    },
    {
      name: 'response',
      type: 'textarea',
      admin: {
        description: 'Response sent to the contact person',
      },
    },
    {
      name: 'respondedAt',
      type: 'date',
      admin: {
        description: 'When the response was sent',
        position: 'sidebar',
      },
    },
    {
      name: 'source',
      type: 'select',
      defaultValue: 'website',
      options: [
        { label: 'Website Form', value: 'website' },
        { label: 'Phone Call', value: 'phone' },
        { label: 'Email', value: 'email' },
        { label: 'Social Media', value: 'social' },
        { label: 'Other', value: 'other' },
      ],
      admin: {
        description: 'How this contact request originated',
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
  hooks: {
    afterChange: [
      ({ doc, operation }) => {
        if (operation === 'create') {
          // You could add email notification logic here
          console.log(`New contact form submitted by ${doc.name} (${doc.email})`)
        }
      },
    ],
  },
}
