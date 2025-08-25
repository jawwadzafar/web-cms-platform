import express from 'express'
import payload from 'payload'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3001

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for Payload admin
}))

// CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
}))

// Logging
app.use(morgan('combined'))

// Body parsing middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Serve static files
app.use('/media', express.static('../uploads'))

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() })
})

const start = async (): Promise<void> => {
  try {
    // Initialize Payload
    await payload.init({
      secret: process.env.PAYLOAD_SECRET || 'your-secret-here',
      express: app,
      onInit: async () => {
        payload.logger.info(`Payload Admin URL: http://localhost:${PORT}/admin`)
      },
    })

    // Custom API routes can be added here
    app.get('/api/status', (req, res) => {
      res.json({ message: 'Payload CMS API is running', version: '1.0.0' })
    })

    // Start the server
    app.listen(PORT, async () => {
      payload.logger.info(`Server started on port ${PORT}`)
      payload.logger.info(`Admin Panel: http://localhost:${PORT}/admin`)
      payload.logger.info(`API: http://localhost:${PORT}/api`)
    })
  } catch (error) {
    console.error('Error starting server:', error)
    process.exit(1)
  }
}

start()