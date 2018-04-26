const path = require('path')
const config = require('../../config')
const lessConfig = require('../../less.config')
const mode = 'production'

module.exports = {
  mode,
  entry: './src/render',
  output: {
    path: path.resolve('./' + config[mode].staticDirName),
    filename: 'render.js',
    publicPath: '/' + config[mode].staticDirName + '/',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', {'targets': {browsers: ['last 2 versions', 'ie >= 9']}, modules: false}], 'react'],
              plugins: [
                ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
                'transform-runtime',
                'transform-decorators-legacy',
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
    minimizer: []
  }
}
