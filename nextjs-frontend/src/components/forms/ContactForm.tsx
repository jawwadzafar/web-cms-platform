"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { api } from '@/lib/api-client'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Valid email is required').required('Email is required'),
  phone: yup.string().optional(),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
})

type FormData = yup.InferType<typeof schema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as any,
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      await api.contact.submit(data)
      
      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you as soon as possible.',
        icon: <CheckCircle className="h-4 w-4" />,
      })
      
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Contact form error:', error)
      
      toast.error('Failed to send message', {
        description: 'Please try again or contact us directly.',
        icon: <AlertCircle className="h-4 w-4" />,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-100">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your message has been sent successfully. We'll get back to you as soon as possible.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="bg-white hover:bg-gray-50"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Get in Touch</h3>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name *</Label>
          <Input
            id="name"
            {...register('name')}
            placeholder="Your full name"
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="your.email@example.com"
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone (Optional)</Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject *</Label>
          <Input
            id="subject"
            {...register('subject')}
            placeholder="What's this about?"
            className={errors.subject ? 'border-red-500' : ''}
          />
          {errors.subject && (
            <p className="text-sm text-red-500">{errors.subject.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message *</Label>
          <Textarea
            id="message"
            {...register('message')}
            placeholder="Tell us more about your inquiry..."
            rows={5}
            className={errors.message ? 'border-red-500' : ''}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  )
}