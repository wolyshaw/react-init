const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const lessConfig = require('../../less.config')

module.exports = [merge(baseConfig, {
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
  }
}),
merge(baseConfig, {
  entry: './src/render',
  output: {
    filename: 'render.js',
    publicPath: '/dist/',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', {'targets': {browsers: ['last 2 versions', 'ie >= 9']}, modules: false}], 'react'],
              plugins: [
                ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
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
        test: /\.css$/,
        include: /node_modules/,
        use: ['css-loader/locals?minimize']
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          'css-loader/locals?minimize',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          'css-loader/locals?modules&localIdentName=[local]--[hash:base64:5]',
          {
            loader: 'less-loader',
            options: lessConfig
          }
        ]
      }
    ]
  },
  plugins: []
})]
