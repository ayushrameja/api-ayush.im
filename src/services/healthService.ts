import type { HealthResponse } from '../types/index.ts'
import { APP_CONFIG, MESSAGES } from '../constants/index.ts'

export class HealthService {
  static getHealthStatus(environment?: string): HealthResponse {
    return {
      status: MESSAGES.HEALTHY,
      timestamp: new Date().toISOString(),
      ...(environment && { environment }),
      version: APP_CONFIG.VERSION
    }
  }
} 