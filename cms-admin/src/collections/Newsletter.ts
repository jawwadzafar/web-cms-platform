import { CollectionConfig } from 'payload'

export const Newsletter: CollectionConfig = {
  slug: 'newsletter',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'status', 'createdAt', 'source'],
    group: 'Communication',
  },
  access: {
    create: () => true, // Anyone can subscribe
    read: () => false, // Only admins can read
    update: () => false, // No updates allowed
    delete: () => false, // No deletion allowed
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
      admin: {
        description: 'Subscriber email address',
      },
    },
    {
      name: 'firstName',
      type: 'text',
      admin: {
        description: 'Subscriber first name (optional)',
      },
    },
    {
      name: 'lastName',
      type: 'text',
      admin: {
        description: 'Subscriber last name (optional)',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'subscribed',
      options: [
        { label: 'Subscribed', value: 'subscribed' },
        { label: 'Unsubscribed', value: 'unsubscribed' },
        { label: 'Pending', value: 'pending' },
        { label: 'Bounced', value: 'bounced' },
        { label: 'Spam', value: 'spam' },
      ],
      admin: {
        description: 'Current subscription status',
        position: 'sidebar',
      },
    },
    {
      name: 'source',
      type: 'select',
      defaultValue: 'website',
      options: [
        { label: 'Website Form', value: 'website' },
        { label: 'Footer Signup', value: 'footer' },
        { label: 'Blog Post', value: 'blog' },
        { label: 'Landing Page', value: 'landing' },
        { label: 'Manual Import', value: 'import' },
        { label: 'Other', value: 'other' },
      ],
      admin: {
        description: 'How this subscriber signed up',
        position: 'sidebar',
      },
    },
    {
      name: 'interests',
      type: 'array',
      admin: {
        description: 'Topics of interest to this subscriber',
      },
      fields: [
        {
          name: 'interest',
          type: 'select',
          options: [
            { label: 'Technology', value: 'technology' },
            { label: 'Business', value: 'business' },
            { label: 'Marketing', value: 'marketing' },
            { label: 'Design', value: 'design' },
            { label: 'Development', value: 'development' },
            { label: 'News', value: 'news' },
            { label: 'Tips & Tricks', value: 'tips' },
          ],
        },
      ],
    },
    {
      name: 'unsubscribedAt',
      type: 'date',
      admin: {
        description: 'When the subscriber unsubscribed',
        position: 'sidebar',
      },
    },
    {
      name: 'unsubscribeReason',
      type: 'select',
      options: [
        { label: 'Too many emails', value: 'too-many' },
        { label: 'Content not relevant', value: 'not-relevant' },
        { label: 'No longer interested', value: 'not-interested' },
        { label: 'Other', value: 'other' },
      ],
      admin: {
        description: 'Reason for unsubscribing',
        position: 'sidebar',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Internal notes about this subscriber',
      },
    },
  ],
  timestamps: true,
  hooks: {
    afterChange: [
      ({ doc, operation }) => {
        if (operation === 'create') {
          console.log(`New newsletter subscription: ${doc.email}`)
        }
        if (operation === 'update' && doc.status === 'unsubscribed') {
          console.log(`Newsletter unsubscription: ${doc.email}`)
        }
      },
    ],
  },
}
