'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface RichTextNode {
  type: string
  text?: string
  children?: RichTextNode[]
  url?: string
  [key: string]: any
}

interface RichTextRendererProps {
  content: { root?: { children: RichTextNode[] } } | RichTextNode[]
  className?: string
}

export const RichTextRenderer: React.FC<RichTextRendererProps> = ({ 
  content, 
  className 
}) => {
  if (!content) {
    return null
  }

  // Handle Lexical editor format (Payload CMS v3)
  const nodes = Array.isArray(content) 
    ? content 
    : content.root?.children || []

  if (!Array.isArray(nodes) || nodes.length === 0) {
    return null
  }

  const renderNode = (node: RichTextNode, index: number): React.ReactNode => {
    const { type, text, children, ...attributes } = node

    // Text node
    if (type === 'text') {
      let textContent = text || ''
      
      // Apply formatting
      if (attributes.bold) {
        textContent = <strong key={index}>{textContent}</strong>
      }
      if (attributes.italic) {
        textContent = <em key={index}>{textContent}</em>
      }
      if (attributes.underline) {
        textContent = <u key={index}>{textContent}</u>
      }
      if (attributes.strikethrough) {
        textContent = <del key={index}>{textContent}</del>
      }
      if (attributes.code) {
        textContent = <code key={index} className="bg-muted px-1 py-0.5 rounded text-sm font-mono">{textContent}</code>
      }
      
      return textContent
    }

    // Link node
    if (type === 'link') {
      return (
        <a
          key={index}
          href={attributes.url}
          target={attributes.newTab ? '_blank' : undefined}
          rel={attributes.newTab ? 'noopener noreferrer' : undefined}
          className="text-primary hover:underline"
        >
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </a>
      )
    }

    // Heading nodes
    if (type === 'h1') {
      return (
        <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </h1>
      )
    }
    if (type === 'h2') {
      return (
        <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </h2>
      )
    }
    if (type === 'h3') {
      return (
        <h3 key={index} className="text-xl font-bold mt-5 mb-2">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </h3>
      )
    }
    if (type === 'h4') {
      return (
        <h4 key={index} className="text-lg font-bold mt-4 mb-2">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </h4>
      )
    }
    if (type === 'h5') {
      return (
        <h5 key={index} className="text-base font-bold mt-3 mb-2">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </h5>
      )
    }
    if (type === 'h6') {
      return (
        <h6 key={index} className="text-sm font-bold mt-3 mb-2">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </h6>
      )
    }

    // Paragraph node (Lexical uses 'paragraph')
    if (type === 'paragraph' || type === 'p') {
      return (
        <p key={index} className="mb-4 leading-relaxed">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </p>
      )
    }

    // List nodes
    if (type === 'ul') {
      return (
        <ul key={index} className="list-disc list-inside mb-4 space-y-1">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </ul>
      )
    }
    if (type === 'ol') {
      return (
        <ol key={index} className="list-decimal list-inside mb-4 space-y-1">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </ol>
      )
    }
    if (type === 'li') {
      return (
        <li key={index} className="ml-4">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </li>
      )
    }

    // Blockquote node
    if (type === 'blockquote') {
      return (
        <blockquote key={index} className="border-l-4 border-primary pl-4 py-2 my-4 bg-muted/30 italic">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </blockquote>
      )
    }

    // Code block node
    if (type === 'code') {
      return (
        <pre key={index} className="bg-muted p-4 rounded-lg overflow-x-auto my-4">
          <code className="text-sm font-mono">
            {children?.map((child, childIndex) => renderNode(child, childIndex))}
          </code>
        </pre>
      )
    }

    // Inline code node
    if (type === 'inlineCode') {
      return (
        <code key={index} className="bg-muted px-1 py-0.5 rounded text-sm font-mono">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </code>
      )
    }

    // Divider node
    if (type === 'hr') {
      return <hr key={index} className="my-8 border-border" />
    }

    // Table nodes
    if (type === 'table') {
      return (
        <div key={index} className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-border">
            {children?.map((child, childIndex) => renderNode(child, childIndex))}
          </table>
        </div>
      )
    }
    if (type === 'thead') {
      return (
        <thead key={index} className="bg-muted">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </thead>
      )
    }
    if (type === 'tbody') {
      return (
        <tbody key={index}>
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </tbody>
      )
    }
    if (type === 'tr') {
      return (
        <tr key={index} className="border-b border-border">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </tr>
      )
    }
    if (type === 'th') {
      return (
        <th key={index} className="border border-border px-4 py-2 text-left font-semibold">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </th>
      )
    }
    if (type === 'td') {
      return (
        <td key={index} className="border border-border px-4 py-2">
          {children?.map((child, childIndex) => renderNode(child, childIndex))}
        </td>
      )
    }

    // Default: render children
    if (children) {
      return (
        <div key={index}>
          {children.map((child, childIndex) => renderNode(child, childIndex))}
        </div>
      )
    }

    return null
  }

  return (
    <div className={cn('rich-text-content', className)}>
      {nodes.map((node, index) => renderNode(node, index))}
    </div>
  )
}
