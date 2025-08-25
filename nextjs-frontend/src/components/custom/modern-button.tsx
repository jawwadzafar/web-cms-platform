import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const modernButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-normal transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-none transform hover:scale-105 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl',
        secondary: 'bg-gray-900 hover:bg-black text-white shadow-lg hover:shadow-xl',
        outline: 'border-2 border-white text-white hover:bg-white hover:text-black shadow-lg hover:shadow-xl',
        'outline-dark': 'border-2 border-gray-300 text-gray-900 hover:bg-gray-50 shadow-sm hover:shadow-md',
        ghost: 'hover:bg-gray-100 text-gray-900',
        service: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl',
        'service-emerald': 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl',
        'service-purple': 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl'
      },
      size: {
        sm: 'h-9 px-4 py-2 text-sm',
        default: 'h-10 px-6 py-2',
        lg: 'h-12 px-8 py-3 text-lg',
        xl: 'h-14 px-10 py-4 text-xl',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ModernButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof modernButtonVariants> {
  asChild?: boolean
}

const ModernButton = React.forwardRef<HTMLButtonElement, ModernButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(modernButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
ModernButton.displayName = 'ModernButton'

export { ModernButton, modernButtonVariants }