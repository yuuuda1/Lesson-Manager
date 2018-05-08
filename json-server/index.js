const jsonServer = require('json-server')
const fs = require('fs')

const server = jsonServer.create()
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
server.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  next()
})

// Register routing
const routesDirPath = `${__dirname}/routes`
const files = fs.readdirSync(routesDirPath, 'utf-8')
files.map(file => {
  const router = require(`${routesDirPath}/${file}`)
  server.use(router)
})

// Start listen
server.listen(8188, () => {
  console.log('JSON Server is running')
})
