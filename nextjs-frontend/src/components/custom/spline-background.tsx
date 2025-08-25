'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Spline to avoid SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-indigo-900/30 animate-pulse" />
  )
})

interface SplineBackgroundProps {
  scene: string
  className?: string
  opacity?: number
}

export function SplineBackground({ scene, className, opacity = 0.7 }: SplineBackgroundProps) {
  return (
    <div className={className}>
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-indigo-900/30 animate-pulse" />
      }>
        <div className="w-full h-full">
          <Spline 
            scene={scene}
            style={{
              width: '100%',
              height: '100%',
              opacity: opacity,
              pointerEvents: 'none'
            }}
            onLoad={() => {
              console.log('Spline scene loaded successfully')
            }}
            onError={(error) => {
              console.warn('Spline loading error:', error)
            }}
          />
        </div>
      </Suspense>
    </div>
  )
}