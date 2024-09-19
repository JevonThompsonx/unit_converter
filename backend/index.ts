import express from 'express'
const app = express()

// app.use('/static/*', serveStatic({ root: './' }))
// ^ how you'd go about serving static files in a folder named 'static'
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Hi')
})
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})



