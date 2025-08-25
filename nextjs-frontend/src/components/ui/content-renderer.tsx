'use client'

import Image from 'next/image'
import React from 'react'

interface ContentRendererProps {
  content: any
  className?: string
}

export function ContentRenderer({ content, className = '' }: ContentRendererProps) {
  if (!content?.root?.children) {
    return (
      <div className="text-center py-20">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-8">
          <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <h3 className="text-3xl font-semibold mb-6 text-gray-900">Content Coming Soon</h3>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          This content is being prepared. Check back soon for the full content.
        </p>
      </div>
    )
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {content.root.children.map((node: any, index: number) => {
        // Paragraphs
        if (node.type === 'paragraph') {
          return (
            <p key={index} className="mb-6 text-lg text-gray-700 leading-relaxed">
              {node.children?.map((child: any, childIndex: number) => {
                if (child.type === 'text') {
                  // Handle mixed formatting within paragraphs
                  if (child.format === 1) {
                    return <strong key={childIndex}>{child.text}</strong>
                  } else if (child.format === 2) {
                    return <em key={childIndex}>{child.text}</em>
                  } else {
                    return <span key={childIndex}>{child.text}</span>
                  }
                }
                return null
              })}
            </p>
          )
        }
        
        // Headings
        if (node.type === 'heading') {
          const level = node.tag || node.level
          if (level === 'h1') {
            return (
              <h1 key={index} className="text-4xl font-bold mb-8 mt-16 text-gray-900">
                {node.children?.map((child: any, childIndex: number) => {
                  if (child.type === 'text') {
                    return <span key={childIndex}>{child.text}</span>
                  }
                  return null
                })}
              </h1>
            )
          }
          if (level === 'h2') {
            return (
              <h2 key={index} className="text-3xl font-semibold mb-6 mt-12 text-gray-900">
                {node.children?.map((child: any, childIndex: number) => {
                  if (child.type === 'text') {
                    return <span key={childIndex}>{child.text}</span>
                  }
                  return null
                })}
              </h2>
            )
          }
          if (level === 'h3') {
            return (
              <h3 key={index} className="text-2xl font-semibold mb-4 mt-10 text-gray-900">
                {node.children?.map((child: any, childIndex: number) => {
                  if (child.type === 'text') {
                    return <span key={childIndex}>{child.text}</span>
                  }
                  return null
                })}
              </h3>
            )
          }
        }
        
        // Lists - Handle ordered, unordered, and checkbox lists
        if (node.type === 'list') {
          // Check if it's a checkbox list (has checked property on list items)
          const isCheckboxList = node.children?.some((item: any) => 'checked' in item)
          
          if (isCheckboxList) {
            // Render checkbox list
            return (
              <ul key={index} className="mb-6 ml-6 list-none space-y-2">
                {node.children?.map((listItem: any, listIndex: number) => (
                  <li key={listIndex} className="flex items-start gap-3 text-lg text-gray-700">
                    {/* Checkbox (non-interactive) */}
                    <div className="flex-shrink-0 mt-1">
                      <div className={`w-4 h-4 border-2 rounded ${
                        listItem.checked 
                          ? 'bg-blue-500 border-blue-500' 
                          : 'bg-white border-gray-400'
                      }`}>
                        {listItem.checked && (
                          <svg className="w-3 h-3 text-white mx-auto mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                    
                    {/* List item text with mixed formatting */}
                    <div className="flex-1">
                      {listItem.children?.map((child: any, childIndex: number) => {
                        if (child.type === 'text') {
                          // Handle mixed formatting within list items
                          if (child.format === 1) {
                            return <strong key={childIndex}>{child.text}</strong>
                          } else if (child.format === 2) {
                            return <em key={childIndex}>{child.text}</em>
                          } else {
                            return <span key={childIndex}>{child.text}</span>
                          }
                        }
                        return null
                      })}
                    </div>
                  </li>
                ))}
              </ul>
            )
          } else {
            // Regular ordered/unordered list
            const isOrdered = node.listType === 'number' || node.tag === 'ol'
            const ListTag = isOrdered ? 'ol' : 'ul'
            const startNumber = node.start || 1
            
            return (
              <ListTag 
                key={index} 
                className={`mb-6 ml-6 ${isOrdered ? 'list-decimal' : 'list-disc'}`}
                start={isOrdered ? startNumber : undefined}
              >
                {node.children?.map((listItem: any, listIndex: number) => (
                  <li key={listIndex} className="mb-2 text-lg text-gray-700">
                    {listItem.children?.map((child: any, childIndex: number) => {
                      if (child.type === 'text') {
                        // Handle mixed formatting within list items
                        if (child.format === 1) {
                          return <strong key={childIndex}>{child.text}</strong>
                        } else if (child.format === 2) {
                          return <em key={childIndex}>{child.text}</em>
                        } else {
                          return <span key={childIndex}>{child.text}</span>
                        }
                      }
                      return null
                    })}
                  </li>
                ))}
              </ListTag>
            )
          }
        }
        
        // Images - Handle both direct image nodes and upload nodes
        if (node.type === 'image' || node.type === 'upload') {
          let imageData = node
          
          // If it's an upload node, extract image data from value
          if (node.type === 'upload' && node.value) {
            imageData = node.value
          }
          
          // Extract image properties
          const imageUrl = imageData.url || imageData.src
          const imageAlt = imageData.alt || imageData.altText || 'Content image'
          const imageWidth = imageData.width || 800
          const imageHeight = imageData.height || 600
          
          if (imageUrl) {
            return (
              <div key={index} className="my-8 text-center">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  width={imageWidth}
                  height={imageHeight}
                  className="mx-auto rounded-xl shadow-lg max-w-full h-auto"
                />
                {imageData.caption && (
                  <p className="mt-3 text-sm text-gray-600 italic">{imageData.caption}</p>
                )}
              </div>
            )
          }
        }
        
        // Blockquotes
        if (node.type === 'quote') {
          return (
            <blockquote key={index} className="my-8 pl-8 border-l-4 border-blue-500 italic text-lg text-gray-700 bg-blue-50 py-4 rounded-r-lg">
              {node.children?.map((child: any, childIndex: number) => {
                if (child.type === 'text') {
                  return <span key={childIndex}>{child.text}</span>
                }
                return null
              })}
            </blockquote>
          )
        }
        
        return null
      })}
    </div>
  )
}
