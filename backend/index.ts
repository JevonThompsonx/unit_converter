import { Hono } from 'hono'
import { cors } from 'hono/cors';
//import { serveStatic } from 'hono/bun'
// for static type serving^
const app = new Hono()

app.use('*', cors({
  origin: 'http://localhost:3000',  
  allowMethods: ['GET', 'POST'],  
}));


// app.use('/static/*', serveStatic({ root: './' }))
// ^ how you'd go about serving static files in a folder named 'static'

app.get('/', (c) => {
  return c.text("It's aliiiive!!")
})

const port = process.env.PORT || 8080

console.log(`Listening on port: ${port}`)

export default { 
  port: port, 
  fetch: app.fetch, 
} 