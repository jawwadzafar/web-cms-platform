'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Info, FileText, Code, Eye, EyeOff } from 'lucide-react'

interface DebugPanelProps {
  content: any
  meta?: {
    title?: string
    description?: string
    type?: string
    id?: string
    slug?: string
    status?: string
    createdAt?: string
    updatedAt?: string
    [key: string]: any
  }
  className?: string
  showMeta?: boolean
  showJson?: boolean
  defaultExpanded?: boolean
}

export function DebugPanel({ 
  content, 
  meta, 
  className = '', 
  showMeta = true, 
  showJson = true,
  defaultExpanded = false 
}: DebugPanelProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const [showFullJson, setShowFullJson] = useState(false)

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className={`mt-8 p-6 bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-xl shadow-sm ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-100 rounded-lg">
            <Info className="h-5 w-5 text-amber-700" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-amber-800">Debug Panel</h4>
            <p className="text-xs text-amber-600">Development information and content structure</p>
          </div>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-amber-100 rounded-lg transition-colors"
        >
          {isExpanded ? (
            <ChevronDown className="h-4 w-4 text-amber-700" />
          ) : (
            <ChevronRight className="h-4 w-4 text-amber-700" />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {/* Meta Information */}
          {showMeta && meta && (
            <div className="bg-white/60 rounded-lg p-4 border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-4 w-4 text-amber-600" />
                <h5 className="text-sm font-medium text-amber-800">Meta Information</h5>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(meta).map(([key, value]) => {
                  if (value === undefined || value === null) return null
                  
                  return (
                    <div key={key} className="flex flex-col">
                      <span className="text-xs font-medium text-amber-700 uppercase tracking-wide">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-sm text-amber-800 font-mono">
                        {typeof value === 'string' && value.length > 50 
                          ? `${value.substring(0, 50)}...` 
                          : String(value)
                        }
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Content Structure */}
          <div className="bg-white/60 rounded-lg p-4 border border-amber-200">
            <div className="flex items-center gap-2 mb-3">
              <Code className="h-4 w-4 text-amber-600" />
              <h5 className="text-sm font-medium text-amber-800">Content Structure</h5>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-amber-700">Content Type:</span>
                <span className="font-mono text-amber-800">{typeof content}</span>
              </div>
              
              {content && (
                <>
                  <div className="flex justify-between">
                    <span className="text-amber-700">Content Keys:</span>
                    <span className="font-mono text-amber-800">
                      {Object.keys(content).join(', ') || 'None'}
                    </span>
                  </div>
                  
                  {content.root && (
                    <div className="flex justify-between">
                      <span className="text-amber-700">Root Children:</span>
                      <span className="font-mono text-amber-800">
                        {content.root.children?.length || 0} nodes
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Full JSON Viewer */}
          {showJson && content && (
            <div className="bg-white/60 rounded-lg p-4 border border-amber-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4 text-amber-600" />
                  <h5 className="text-sm font-medium text-amber-800">Raw JSON</h5>
                </div>
                
                <button
                  onClick={() => setShowFullJson(!showFullJson)}
                  className="flex items-center gap-1 px-2 py-1 text-xs bg-amber-100 hover:bg-amber-200 text-amber-700 rounded transition-colors"
                >
                  {showFullJson ? (
                    <>
                      <EyeOff className="h-3 w-3" />
                      Hide
                    </>
                  ) : (
                    <>
                      <Eye className="h-3 w-3" />
                      Show
                    </>
                  )}
                </button>
              </div>
              
              {showFullJson && (
                <details className="text-xs">
                  <summary className="cursor-pointer text-amber-700 hover:text-amber-800 font-medium mb-2">
                    Click to expand full JSON
                  </summary>
                  <div className="bg-amber-900 text-amber-100 p-3 rounded border border-amber-700 overflow-auto max-h-96">
                    <pre className="whitespace-pre-wrap break-words">
                      {JSON.stringify(content, null, 2)}
                    </pre>
                  </div>
                </details>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
