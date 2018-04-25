const chalk = require('chalk')
const webpack = require('webpack')
const env = process.env.NODE_ENV || 'development'
const clearWindow = () => process.stdout.write(process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H')

let config

if(env === 'development') {
  config = require('./webpack/webpack.config.dev')
} else {
  config = require('./webpack/webpack.config.prod')
}

clearWindow()

webpack(config, (error, stats) => {
  if(error) {
    console.log(chalk.red.bold(error.stack || error))
    return
  }

  const info = stats.toJson()

  stats.toString({
    color: true,
    assets: false,
    hash: true,
    progress: true,
    profile: true
  })

  if (stats.hasErrors()) {
    console.log(chalk.red.bold(info.errors))
    return
  }

  if (stats.hasWarnings()) {
    console.log(chalk.red.yellow(info.warnings))
  }

  console.log(chalk.green('you project build success'))
})
