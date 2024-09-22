import { Hono } from 'hono'
import { cors } from 'hono/cors'
const app = new Hono().basePath("/api")

// app.use('/static/*', serveStatic({ root: './' }))
// ^ how you'd go about serving static files in a folder named 'static'
const port = process.env.PORT || 8080
app.use(cors())
app.post('/', async (c) => {
  console.log('Request from frontend on backend print...')
  const { amount_to_convert, unit_convert_from, unit_convert_to } = await c.req.json()
  const data = {
    amount_to_convert: amount_to_convert,
    unit_convert_from: unit_convert_from,
    unit_convert_to: unit_convert_to
  }
  console.log(data)
  return c.json({ ...data })
})
Bun.serve({
  port: port,
  fetch: app.fetch
})

console.log(`Running on port ${port}`)



