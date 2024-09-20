import express from 'express'
import cors from 'cors'
const app = express()

// app.use('/static/*', serveStatic({ root: './' }))
// ^ how you'd go about serving static files in a folder named 'static'
const port = process.env.PORT || 8080
app.use(cors())
app.use(express.json());
app.post('/api', (req, res) => {
  console.log('Request from frontend on backend print...')
  const { amount_to_convert, unit_convert_from, unit_convert_to } = req.body
  const data = {
    amount_to_convert: amount_to_convert,
    unit_convert_from: unit_convert_from,
    unit_convert_to: unit_convert_to
  }
  console.log(data)
  res.json({ ...data })
})
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})



