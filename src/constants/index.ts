export const APP_CONFIG = {
  VERSION: '0.0.1',
  DEFAULT_PORT: 8000,
  ENVIRONMENT: {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production'
  }
} as const

export const API_ENDPOINTS = {
  ROOT: '/',
  HEALTH: '/api/health',
  QUOTE: '/api/quote'
} as const

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
} as const

export const MESSAGES = {
  WELCOME: 'Welcome to Deno Hono API',
  WELCOME_PRODUCTION: 'Welcome to Deno Hono API - Production',
  HEALTHY: 'healthy'
} as const 