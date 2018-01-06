const path = require('path')
const webpack = require('webpack')
const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    antd: 'antd',
    app: './src/index.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name].[hash:5].js',
    path: path.resolve('./dist'),
    publicPath: '/dist/',
    chunkFilename: '[name].[chunkhash:5].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets:  ['react', 'env', 'latest']
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
    new CleanPlugin(['dist'], {
      root: path.join(__dirname),
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'static', 'index_default.html'),
      title: config.site.title,
      keywords: config.site.keywords,
      description: config.site.description,
      header: config.site.header,
      minify:{
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin('static/[name].[hash:5].css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'antd'],
      minChunks: Infinity
    })
  ]
}
