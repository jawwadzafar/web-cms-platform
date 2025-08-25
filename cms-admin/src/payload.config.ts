// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Articles } from './collections/Posts'
import { Services } from './collections/Services'
import { Team } from './collections/Team'
import { Categories } from './collections/Categories'
import { Tags } from './collections/Tags'
import { Locations } from './collections/Locations'
import { Contact } from './collections/Contact'
import { Newsletter } from './collections/Newsletter'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: ({ data, collection }) => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
        
        if (collection.slug === 'articles' && data?.slug) {
          return `${baseUrl}/blog/${data.slug}`
        }
        if (collection.slug === 'pages' && data?.slug) {
          return `${baseUrl}/${data.slug}`
        }
        if (collection.slug === 'services' && data?.slug) {
          return `${baseUrl}/services/${data.slug}`
        }
        
        return baseUrl
      },
    },
  },
  collections: [
    Users,
    Media,
    Pages,
    Articles,
    Services,
    Team,
    Categories,
    Tags,
    Locations,
    Contact,
    Newsletter,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/payload',
  }),
  cors: ['http://localhost:3000', 'http://localhost:3100'],
  csrf: ['http://localhost:3000', 'http://localhost:3100'],
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3100',
  upload: {
    limits: {
      fileSize: 10000000, // 10MB
    },
  },
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
