export const formatTimestamp = (date: Date = new Date()): string => {
  return date.toISOString()
}

export const getEnvironmentVariable = (key: string, defaultValue?: string): string => {
  return Deno.env.get(key) || defaultValue || ''
}

export const parsePort = (portString?: string, defaultPort: number = 8000): number => {
  if (!portString) return defaultPort
  const parsed = parseInt(portString, 10)
  return isNaN(parsed) ? defaultPort : parsed
}

export const createTimestamp = (): string => {
  return new Date().toISOString()
}

export const logger = {
  info: (message: string, ...args: unknown[]) => {
    console.log(`[INFO] ${message}`, ...args)
  },
  error: (message: string, ...args: unknown[]) => {
    console.error(`[ERROR] ${message}`, ...args)
  },
  warn: (message: string, ...args: unknown[]) => {
    console.warn(`[WARN] ${message}`, ...args)
  }
} 