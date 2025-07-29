import { Hono } from '@hono/hono'
import type { Context } from '@hono/hono'
import { quoteRoutes } from './quoteRoutes.ts'
import { API_ENDPOINTS, MESSAGES } from '../constants/index.ts'
import { HealthController } from '../controllers/healthController.ts'
import type { WelcomeResponse } from '../types/index.ts'

const productionRouter = new Hono()

productionRouter.get(API_ENDPOINTS.ROOT, (c: Context) => {
  const response: WelcomeResponse = {
    message: MESSAGES.WELCOME_PRODUCTION,
    endpoints: {
      health: API_ENDPOINTS.HEALTH,
      quote: API_ENDPOINTS.QUOTE
    }
  }
  return c.json(response)
})

productionRouter.get(API_ENDPOINTS.HEALTH, HealthController.getHealthProduction)
productionRouter.route('/', quoteRoutes)

export { productionRouter } 