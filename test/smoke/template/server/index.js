if (typeof window === 'undefined') {
  global.window = {}
}

const express = require('express')
const { renderToString } = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const SSR = require('../dist/js/search-server')

const template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8')

// const renderMarkup = (str) => `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//   </head>
//   <body>
//     <div id="root">${str}</div>
//   </body>
//   </html>`

const renderMarkup = (str) => template.replace('<!--HTML_PLACEHOLDER-->', str)

const server = (port) => {
  const app = express()

  app.use(express.static('dist'))
  app.get('/search', (req, res) => {
    const html = renderMarkup(renderToString(SSR))
    res.status(200).send(html)
  })

  app.listen(port, () => {
    console.log('server is running on port 3000')
  })
}

server(process.env.PORT || 3000)
