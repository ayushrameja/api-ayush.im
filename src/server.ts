import { Hono } from '@hono/hono'
import { router } from './routes/index.ts'
import { APP_CONFIG } from './constants/index.ts'
import { getEnvironmentVariable, parsePort, logger } from './common/index.ts'

export function createApp(): Hono {
  const app = new Hono()
  
  app.route('/', router)
  
  return app
}

export function startServer(isDevelopment = false): void {
  const app = createApp()
  
  const portString = getEnvironmentVariable('PORT')
  const port = parsePort(portString, APP_CONFIG.DEFAULT_PORT)
  
  const environment = isDevelopment ? APP_CONFIG.ENVIRONMENT.DEVELOPMENT : APP_CONFIG.ENVIRONMENT.PRODUCTION
  
  logger.info(`🚀 Server starting...`)
  logger.info(`Environment: ${environment}`)
  logger.info(`Port: ${port}`)
  logger.info(`Version: ${APP_CONFIG.VERSION}`)
  
  Deno.serve({ port }, app.fetch)
  
  logger.info(`✅ Server running on http://localhost:${port}`)
}

export function createProductionApp(): Hono {
  const app = new Hono()
  
  app.route('/', router)
  
  return app
} 