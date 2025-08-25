import React from 'react'
import { HighImpactHero } from './HighImpactHero'
import { CallToAction } from './CallToAction'
import { Content } from './Content'
import { MediaBlock } from './MediaBlock'

interface Block {
  blockType: string
  [key: string]: any
}

interface RenderBlocksProps {
  blocks?: Block[]
}

const blockComponents: Record<string, React.ComponentType<any>> = {
  highImpactHero: HighImpactHero,
  callToAction: CallToAction,
  content: Content,
  mediaBlock: MediaBlock,
}

export const RenderBlocks: React.FC<RenderBlocksProps> = ({ blocks }) => {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return null
  }

  return (
    <>
      {blocks.map((block, index) => {
        const { blockType } = block

        if (blockType && blockType in blockComponents) {
          const BlockComponent = blockComponents[blockType]

          if (BlockComponent) {
            return <BlockComponent key={index} {...block} />
          }
        }

        return null
      })}
    </>
  )
}
