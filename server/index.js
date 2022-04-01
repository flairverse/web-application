const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')
const {
  ports: { client: clientPort, server: serverPort },
} = require('./config')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const afterServerPrepared = () => {
  const server = express()

  if (dev) {
    server.use(
      '/api',
      createProxyMiddleware({
        target: `http://localhost:${serverPort}`,
        changeOrigin: true,
      }),
    )
  }

  server.all('*', handle)

  server.listen(clientPort, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${serverPort}`)
  })
}

app.prepare().then(afterServerPrepared).catch(console.error)
