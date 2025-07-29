import type { QuoteResponse } from '../types/index.ts'
import { QuoteCache } from '../data/quotes.ts'

export class QuoteService {
  private static quoteCache = QuoteCache.getInstance()

  static getRandomQuote(): QuoteResponse {
    const quoteData = this.quoteCache.getNextQuote()
    
    return {
      quote: quoteData.quote,
      index: quoteData.index,
      total: quoteData.total,
      timestamp: new Date().toISOString()
    }
  }

  static getAllQuotes(): string[] {
    return this.quoteCache.getAllQuotes()
  }

  static getQuoteCount(): number {
    return this.quoteCache.getQuoteCount()
  }
} 