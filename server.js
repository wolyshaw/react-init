const path = require('path')
const express = require('express')
const config = require('./config')

const app = express()

const port = process.env.NODE_PORT || config.port
const debug = process.env.NODE_ENV === 'production'

if(process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const compression = require('compression')
  const proxy = require('http-proxy-middleware')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackDevConfig = require('./webpack.config.dev')

  const compiler = webpack(webpackDevConfig)
  app.use(compression())
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
      colors: true
    }
  }))

  app.use(webpackHotMiddleware(compiler))
}

app.use(express.static(config.distPath[process.env.NODE_ENV] || 'dev'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dev', 'index.html'))
})

app.listen(port, () => console.log(`server online in ${port}`))
