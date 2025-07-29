import type { Context } from '@hono/hono'

import { createTimestamp } from '../common/index.ts'
import { QuoteService } from '../services/quoteService.ts'

export class QuoteController {
  static getQuote(c: Context) {
    const quoteData = QuoteService.getRandomQuote()
    return c.json(quoteData)
  }

  static getAllQuotes(c: Context) {
    const quotes = QuoteService.getAllQuotes()
    return c.json({
      quotes,
      total: quotes.length,
      timestamp: createTimestamp()
    })
  }
} 