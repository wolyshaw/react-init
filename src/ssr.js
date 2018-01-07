import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import Application from './components'
import { appStore } from 'util/store'
import path from 'path'
import fs from 'fs'
import { matchRoutes, renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'
import { routes } from './components/pages'

const config = require('../config')
const store = appStore({})

const app = express()
function renderFullPage(html, meta, initialState) {
  return fs.readFileSync(
    path.join('dist', 'index.html')
  )
    .toString()
    .replace('<meta data-meta="meta">', meta)
    .replace('<div id="app"><div class="loadingContainer"><div><div class="loadingWhirlpool"></div></div></div></div>', `<div id="app">${html}</div>`)
    .replace('<script>window.__INITIAL_STATE__={}</script>', `<script>window.__INITIAL_STATE__=${JSON.stringify(initialState)}</script>`)
}

app.use('/dist', express.static('dist'))

app.get('*', (req, res) => {
  const branch = matchRoutes(routes, req.url)
  let fetchs = []
  branch.map(({route, match}) => {
    if(route.component.Fetch && typeof route.component.Fetch === 'function') {
      return route.component.Fetch(match.params)
    } else {
      return []
    }
  })
    .map(s => typeof s === 'function' ? fetchs.push(store.dispatch(s)) : s.map(_s => fetchs.push(store.dispatch(_s))))

  let html = renderToString(
    <Provider store={ store }>
      <StaticRouter
        location={req.url}
        context={{}}
      >
        <Application/>
      </StaticRouter>
    </Provider>
  )
  const helmet = Helmet.renderStatic()

  Promise.all(fetchs).then(() => res.send(renderFullPage(html, ([helmet.title.toString(), helmet.meta.toString()].join('')), store.getState())))
})

app.listen(config.port, () => console.log('server online in ' + config.port))
