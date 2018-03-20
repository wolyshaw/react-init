const fs = require('fs')
const http = require('http')
const express = require('express')
const proxy = require('http-proxy-middleware')
const devServer = require('webpack-dev-middleware')
const hotServer = require('webpack-hot-middleware')

const app = express()

const PORT = 3000

const html = fs.readFileSync('./index.html').toString()

app.use('/dist', express.static('./dist'))

app.get('*', (req, res) => {
  res.sendFile(html)
})

app.listen(PORT, err => console.log(`create server success, port: ${PORT}`))
