var path = require('path');


module.exports = {
  entry: path.resolve('src','index.js'),
  output: {
    path: path.resolve('build'),
    publicPath: 'build',
    filename: 'index.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', { 
          loader: 'css-loader',
          options: {
            modules: true,
          },
        }
      ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        }, 'less-loader'],
      },
      {
          test: /\.(png|woff|woff2|eot)$/,
          use: ['file-loader']
      }
    ]
  }
};
