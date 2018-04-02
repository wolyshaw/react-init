const path = require('path')
const chalk = require('chalk')
const express = require('express')

const env = process.env.NODE_ENV || 'development'
const config = require('./config')

const app = express()
const { port, staticDirName } = config[env]

app.use(`/${staticDirName}`, express.static(`./${staticDirName}`))

if(env === 'development') {
  const proxy = require('http-proxy-middleware')
  const webpack = require('webpack')
  const devServer = require('webpack-dev-middleware')
  const hotServer = require('webpack-hot-middleware')
  const devConfig = require('./scripts/webpack/webpack.config.dev')

  const compiler = webpack(devConfig)
  const instance = devServer(compiler, {
    publicPath: devConfig.output.publicPath,
    historyApiFallback: true,
    writeToDisk: true,
    stats: {
      colors: true,
      chunks: false,
      chunkModules: false,
      children: false,
      modules: false,
      version: false
    }
  })
  const filter = (pathname, req) => req.method === 'POST'
  app.use(proxy(filter, {target: config[env].apiHost, changeOrigin: true, secure: false}))
  app.use(hotServer(compiler))
  app.use(instance)

  instance.waitUntilValid(() => {
    console.log(chalk.green(`successfully, online in http://localhost:${port}`))
  })
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, staticDirName, 'index.html'))
})

app.listen(port, () => process.stdout.write(process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H'))
