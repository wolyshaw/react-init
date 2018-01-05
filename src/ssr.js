import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import Application from './components'
import { appStore } from 'util/store'
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
    <Provider>
      <StaticRouter
        location={req.url}
        context={{}}
      >
        <Application/>
      </StaticRouter>
    </Provider>
  )

  res.send(renderFullPage(html, {}))
})

app.listen(3000, () => console.log('server online in 3000'))
