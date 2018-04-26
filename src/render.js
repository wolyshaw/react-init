import fs from 'fs'
import path from 'path'
import util from 'util'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import Application from './Application'
import config from '../config'

const context = {}

const renderFullContent = async ({req}) => {
  const content = renderToString(
    <StaticRouter
      context={ context }
      location={ req.url }
      basename={ config['production'].basename }
    >
      <Application/>
    </StaticRouter>
  )

  const html = await util.promisify(fs.readFile)(path.join(__dirname, '../', 'dist', 'index.html')).then(file => file.toString())

  return html.replace('<div id="app"></div>', '<div id="app">' + content + '</div>')
}

export default async (req, res) => {
  const h = await renderFullContent({req})
  res.send(h)
}
