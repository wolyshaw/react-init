const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseConfig, {
  name: 'web',
  output: {
    filename: '[name]-[chunkhash:5].js',
    publicPath: '/dist/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [new CleanPlugin(['dist'], {
    root: path.join(__dirname, '..', '..'),
    verbose: true
  })]
})
