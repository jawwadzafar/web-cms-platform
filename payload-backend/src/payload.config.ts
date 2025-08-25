import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'

// Collections
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Services } from './collections/Services'
import { Media } from './collections/Media'
import { Team } from './collections/Team'
import { Locations } from './collections/Locations'
import { Categories } from './collections/Categories'
import { Tags } from './collections/Tags'
import { Users } from './collections/Users'

export default buildConfig({
  admin: {
    user: 'users',
    bundler: undefined, // Use default bundler for v3
  },
  editor: lexicalEditor({}),
  collections: [
    Users,
    Pages,
    Posts,
    Services,
    Media,
    Team,
    Locations,
    Categories,
    Tags,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/payload',
  }),
  cors: ['http://localhost:3000', 'http://localhost:3001'],
  csrf: ['http://localhost:3000', 'http://localhost:3001'],
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
  secret: process.env.PAYLOAD_SECRET || 'your-secret-here',
  upload: {
    limits: {
      fileSize: 10000000, // 10MB
    },
  },
})