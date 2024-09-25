import { Hono } from 'hono'
import { cors } from 'hono/cors'
import convert_units from 'convert-units'
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
  console.log("Converting...")
  const convertedResult = convert_units(amount_to_convert).from(unit_convert_from).to(unit_convert_to)
  const conversionObject = {
    convertedResult: `${convertedResult}${unit_convert_to}`,
    original: `${amount_to_convert}${unit_convert_from}`
  }
  console.log(conversionObject)
  return c.json({ data, conversionObject })
})
Bun.serve({
  port: port,
  fetch: app.fetch
})

console.log(`Running on port ${port}`)


