export const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs", 
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It is during our darkest moments that we must focus to see the light. - Aristotle",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr."
]

export class QuoteCache {
  private static instance: QuoteCache
  private currentIndex = 0

  private constructor() {}

  static getInstance(): QuoteCache {
    if (!QuoteCache.instance) {
      QuoteCache.instance = new QuoteCache()
    }
    return QuoteCache.instance
  }

  getNextQuote(): { quote: string; index: number; total: number } {
    const quote = quotes[this.currentIndex]
    this.currentIndex = (this.currentIndex + 1) % quotes.length
    
    return {
      quote,
      index: this.currentIndex,
      total: quotes.length
    }
  }

  getAllQuotes(): string[] {
    return [...quotes]
  }

  getQuoteCount(): number {
    return quotes.length
  }
} 