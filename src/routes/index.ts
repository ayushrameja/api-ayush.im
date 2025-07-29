import { Hono } from '@hono/hono'
import type { Context } from '@hono/hono'
import { healthRoutes } from './healthRoutes.ts'
import { quoteRoutes } from './quoteRoutes.ts'
import { API_ENDPOINTS, MESSAGES } from '../constants/index.ts'
import type { WelcomeResponse } from '../types/index.ts'

const router = new Hono()

router.get(API_ENDPOINTS.ROOT, (c: Context) => {
  const response: WelcomeResponse = {
    message: MESSAGES.WELCOME,
    endpoints: {
      health: API_ENDPOINTS.HEALTH,
      quote: API_ENDPOINTS.QUOTE
    }
  }
  return c.json(response)
})

router.route('/', healthRoutes)
router.route('/', quoteRoutes)

export { router } 