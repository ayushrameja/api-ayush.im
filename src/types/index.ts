export interface HealthResponse {
  status: string
  timestamp: string
  environment?: string
  version: string
}

export interface QuoteResponse {
  quote: string
  index: number
  total: number
  timestamp: string
}

export interface WelcomeResponse {
  message: string
  endpoints: {
    health: string
    quote: string
  }
}

export interface Quote {
  text: string
  author: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  timestamp: string
} 