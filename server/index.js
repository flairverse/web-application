const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')
const { ports } = require('./config')

const { client: clientPort, server: serverPort } = ports

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const open = process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open'

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
    const url = ` http://localhost:${clientPort}`

    console.log(`> Ready on${url}`)
    require('child_process').exec(open + url)
  })
}

app.prepare().then(afterServerPrepared).catch(console.error)
