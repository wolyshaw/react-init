const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./base')

const{ plugins = [] } = base

plugins.push(new webpack.NamedModulesPlugin())
plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = merge(base, {
  entry: ['./src', 'webpack-hot-middleware/client?reload=true'],
  output: {
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map'
})
