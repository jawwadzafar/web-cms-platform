import * as yup from 'yup'

export const newsletterSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  firstName: yup
    .string()
    .optional()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must not exceed 50 characters'),
})

export type NewsletterFormData = yup.InferType<typeof newsletterSchema>