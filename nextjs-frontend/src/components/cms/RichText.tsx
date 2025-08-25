import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
} from '@payloadcms/richtext-lexical'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as RichTextWithoutBlocks,
} from '@payloadcms/richtext-lexical/react'

import { cn } from '@/lib/utils'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<any>

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return relationTo === 'posts' ? `/blog/${slug}` : `/${slug}`
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    // Add block converters as needed
    mediaBlock: ({ node }) => (
      <div className="my-8">
        {/* Media block rendering */}
        <div>{JSON.stringify(node.fields)}</div>
      </div>
    ),
    cta: ({ node }) => (
      <div className="my-8 p-6 bg-primary/5 rounded-lg">
        {/* CTA block rendering */}
        <div>{JSON.stringify(node.fields)}</div>
      </div>
    ),
  },
})

type Props = {
  data: SerializedEditorState
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props
  return (
    <RichTextWithoutBlocks
      converters={jsxConverters}
      className={cn(
        {
          'container': enableGutter,
          'max-w-none': !enableGutter,
          'mx-auto prose prose-lg dark:prose-invert': enableProse,
        },
        className,
      )}
      {...rest}
    />
  )
}