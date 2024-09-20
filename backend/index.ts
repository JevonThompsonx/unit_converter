import express from 'express'
import cors from 'cors'
const app = express()

// app.use('/static/*', serveStatic({ root: './' }))
// ^ how you'd go about serving static files in a folder named 'static'
const port = process.env.PORT || 8080
app.use(cors())
app.use(express.json());
app.post('/api', (req, res) => {
  console.log(req.body)
  res.json(hello: 'hi')
})
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})



