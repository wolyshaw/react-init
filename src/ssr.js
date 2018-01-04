import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Application from './components'
import path from 'path'
import fs from 'fs'

const app = express()

function renderFullPage(html, initialState) {
  return fs.readFileSync(
    path.join(__dirname, 'react-init', 'dist', 'index.html')
  )
    .toString()
    .replace('<div id="app"></div>', `<div id="app">${html}</div>`)
}

app.use('/dist', express.static('dist'))

app.get('*', (req, res) => {

  let html = renderToString(
    <StaticRouter
      location={req.url}
      context={{}}
    >
      <Application/>
    </StaticRouter>
  )

  res.send(renderFullPage(html, {}))
})

app.listen(3000, () => console.log('server online in 3000'))
