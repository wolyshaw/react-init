const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const { plugins } = baseConfig

plugins.push(new webpack.NamedModulesPlugin())
plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports  = merge(baseConfig, {
  entry: ['./src', 'webpack-hot-middleware/client?reload=true']
})
