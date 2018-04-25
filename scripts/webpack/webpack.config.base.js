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
    chunkFilename: '[id].js',
    publicPath: '/' + config[mode].staticDirName + '/'
  },
  module: {
    rules: [
      {
        test: /Pages\/\w+\/index.js$/,
        use: {
          loader: 'bundle-loader',
          options: {
            lazy: true
          }
        }
      },
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
        use: [MiniCssExtractPlugin.loader, 'css-loader?minimize']
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?minimize',
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
  resolve: {
    alias: {
      '@': path.resolve(path.join(__dirname, '../', '../', 'src'))
    },
    extensions: ['.js', '.jsx', 'json', '.less', '.css']
  },
  node: {
    __dirname: true,
    __filename: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'common',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config[mode].title,
      template: 'src/static/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: mode === 'development' ? '[name].css' : '[name]-[contenthash:5].css',
      chunkFilename: mode === 'development' ? '[name].css' : '[name]-[contenthash:5].css'
    })
  ]
}
