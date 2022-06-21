const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')
const { ports, urls } = require('./config')

const { client: clientPort, server: serverPort } = ports
const { repo, license, readme, contributing, codeOfConduct, devDocs, changelog } = urls

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const colors = ['\x1b[35m', '\x1b[33m', '\x1b[31m', '\x1b[32m']
const logInfo = `
╭────────────────────────────────────────────────────╮
│                                                    │
│   FlairVerse Started SUCCESSFULLY                  │
│   This is its web application !                    ╯
│                                                    
╰────────────────────────────────────────────────────╮
                                                     │
    You now have it on: http://localhost:${clientPort}        │
    Or on your network: http://127.0.0.1:${clientPort}        │
                                                     │
╭────────────────────────────────────────────────────╯
│                                                     
│   Give these links a SHOT                                     
│                                                    ╮
│   Repository:        ${repo}     │
│   License:           ${license}     │
│   Readme:            ${readme}     │
│   Contributing:      ${contributing}     │
│   Code of Conduct:   ${codeOfConduct}     │
│   Developer DOCs:    ${devDocs}     │
│   Change Logs:       ${changelog}     │
│                                                    │
╰────────────────────────────────────────────────────╯
`

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
    const colorIndex = Math.floor(Math.random() * 4)
    console.log(colors[colorIndex], logInfo)
  })
}

app.prepare().then(afterServerPrepared).catch(console.error)
