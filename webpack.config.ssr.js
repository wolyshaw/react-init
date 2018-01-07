const path = require('path')
const webpack = require('webpack')
const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: ['./src/ssr.js'],
  output: {
    filename: 'ssr.js',
    path: path.resolve('./'),
    publicPath: '/dist/'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets:  ['react', 'env', 'latest'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules&localIdentName=[name]--[local]--[hash:base64:5]', 'less-loader']
        })
      },
      {
        test: /\.(css|less)$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader'
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: 'static/images/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      util: path.resolve(path.join(__dirname, 'src', 'util')),
      static: path.resolve(path.join(__dirname, 'src', 'static')),
      actions: path.resolve(path.join(__dirname, 'src', 'actions')),
      components: path.resolve(path.join(__dirname, 'src', 'components'))
    }
  },
  plugins: [
    new ExtractTextPlugin('static/[name].[hash:5].css')
  ]
}
