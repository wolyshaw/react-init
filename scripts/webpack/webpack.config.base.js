const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode,
  entry: './src',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'env',
                  {
                    'targets': {
                      browsers: ['last 2 versions', 'ie >= 9']
                    }
                  }
                ],
                'react'
              ],
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
            options: { fix: false }
          }
        ]
      }
    ]
  }
}
