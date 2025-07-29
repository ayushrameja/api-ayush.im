import type { Context } from '@hono/hono'
import { HealthService } from '../services/healthService.ts'

export class HealthController {
  static getHealth(c: Context) {
    const healthData = HealthService.getHealthStatus()
    return c.json(healthData)
  }

  static getHealthProduction(c: Context) {
    const healthData = HealthService.getHealthStatus('production')
    return c.json(healthData)
  }
} 