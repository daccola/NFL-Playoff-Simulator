import Express from 'express'
//import dataRouter from './api/gameData.js'

const app = new Express()

// Logs requests to console
app.use((req, res, next) => {
  console.log(`${req.method} at ${req.path}`)
  next()
})

// Allows us to pass JSON in the body
app.use(Express.json())

// Attach our data routers
//app.use('/data', dataRouter)

// Statically serve files from 'public'
app.use(Express.static('public'))

// Bind to a port and start listening
app.listen(3000)
console.log('Listening on port 3000')
