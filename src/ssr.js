import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Pages from './components/pages'
import fs from 'fs'

// fs.readFile

const app = express()

function renderFullPage(html, initialState) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      <div id="app">
        ${html}
      </div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script type="text/javascript" src="/dist/antd.a243e.js"></script><script type="text/javascript" src="/dist/vendor.a243e.js"></script><script type="text/javascript" src="/dist/app.a243e.js"></script></body>
      </body>
    </html>
  `
}

app.use('/dist', express.static('dist'))

app.get('*', (req, res) => {

  let html = renderToString(
    <StaticRouter
      location={req.url}
      context={{}}
    >
      <Pages/>
    </StaticRouter>
  )

  res.send(renderFullPage(html, {}))
})

app.listen(3000, () => console.log('server online in 3000'))
