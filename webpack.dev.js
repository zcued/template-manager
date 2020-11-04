const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const config = require('./webpack.common')
const { proxy } = require('./config')

module.exports = merge(config, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: ['react-hot-loader/patch', './src'],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    disableHostCheck: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    overlay: true,
    // stats: 'errors-only',
    proxy: {
      ...proxy,
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
