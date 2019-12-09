const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { 'targets': { browsers: ['last 2 versions'] }, modules: false }], '@babel/preset-react'],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-runtime',
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
              ]
            }
          },
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?modules&localIdentName=[local]--[hash:base64:5]',
          {
            loader: 'less-loader',
          }
        ]
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1,
            fallback: 'file-loader'
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-init',
      template: path.resolve('./src/static/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
      chunkFilename: '[name]-[contenthash].css'
    }),
  ]
}
