const express = require('express')
const webpack = require('webpack')
const signale = require('signale')
const httpProxy = require('http-proxy-middleware')
const devServer = require('webpack-dev-middleware')
const hotServer = require('webpack-hot-middleware')

const app = express()

const compiler = webpack(require('./dev'))

app.use(devServer(compiler))
app.use(hotServer(compiler))

app.listen(5000, err => {
  if (err) {
    signale.error(err)
  }
  signale.success('server successful on: http://localhost:5000')
})
