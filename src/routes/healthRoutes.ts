import { Hono } from '@hono/hono'
import { HealthController } from '../controllers/healthController.ts'
import { API_ENDPOINTS } from '../constants/index.ts'

const healthRoutes = new Hono()

healthRoutes.get(API_ENDPOINTS.HEALTH, HealthController.getHealth)

export { healthRoutes } 