'use client'

interface AnimatedBackgroundProps {
  className?: string
}

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  return (
    <div className={className}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-indigo-900/20 animate-pulse"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles with simple animations */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-indigo-500/10 rounded-full animate-ping" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-cyan-500/10 rounded-full animate-bounce" style={{animationDuration: '5s'}}></div>
        
        {/* DNA-like concentric circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-96 h-96 opacity-20">
            <div className="absolute inset-0 border border-blue-400/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
            <div className="absolute inset-4 border border-purple-400/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
            <div className="absolute inset-8 border border-indigo-400/20 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
          </div>
        </div>
        
        {/* Small particle effects */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/40 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-indigo-400/40 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400/40 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
    </div>
  )
}