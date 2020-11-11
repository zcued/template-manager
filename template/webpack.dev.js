const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                mode: (resourcePath) => {
                  if (
                    /assets\/styles\/.*.(le|c)ss$/i.test(resourcePath) ||
                    /node_modules\/.*.(le|c)ss$/i.test(resourcePath)
                  ) {
                    return 'global'
                  }

                  return 'local'
                },
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash:8].css',
      chunkFilename: '[name]-[contenthash:8].css',
    }),
  ],
})
