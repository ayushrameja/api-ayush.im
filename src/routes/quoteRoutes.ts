import { Hono } from '@hono/hono'

import { API_ENDPOINTS } from '../constants/index.ts'
import { QuoteController } from '../controllers/quoteController.ts'

const quoteRoutes = new Hono()

quoteRoutes.get(API_ENDPOINTS.QUOTE, QuoteController.getQuote)
quoteRoutes.get(API_ENDPOINTS.QUOTE, QuoteController.getAllQuotes)

export { quoteRoutes } 