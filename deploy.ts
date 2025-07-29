import { Hono } from '@hono/hono'
import { productionRouter } from './src/routes/productionIndex.ts'

const app = new Hono()
app.route('/', productionRouter)

export default app 