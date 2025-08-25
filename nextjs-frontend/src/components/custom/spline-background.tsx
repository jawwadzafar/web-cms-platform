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
}

export function SplineBackground({ scene, className }: SplineBackgroundProps) {
  return (
    <div className={className}>
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-indigo-900/30 animate-pulse" />
      }>
        <Spline 
          scene={scene}
          style={{
            width: '100%',
            height: '100%',
            opacity: 0.6
          }}
        />
      </Suspense>
    </div>
  )
}