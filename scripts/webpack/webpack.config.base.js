const path = require('path')
const config = require('../../config')
const lessConfig = require('../../less.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode,
  entry: './src',
  output: {
    path: path.resolve('./' + config[mode].staticDirName),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', {'targets': {browsers: ['last 2 versions', 'ie >= 9']}}], 'react'],
              plugins: [
                'transform-runtime',
                'transform-decorators',
                'transform-class-properties',
                'transform-object-rest-spread'
              ]
            }
          },
          {
            loader: 'eslint-loader',
            options: {fix: true}
          }
        ]
      },
      {
        test: /\.(css|less)$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader?minimize!less-loader']
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?modules&localIdentName=[local]--[hash:base64:5]',
          {
            loader: 'less-loader',
            options: lessConfig
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config[mode].title,
      template: 'src/static/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}
