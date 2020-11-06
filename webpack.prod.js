const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const config = require('./webpack.common')

const isAnalyze = !!process.env.ANALYZE

module.exports = merge(config, {
  mode: 'production',
  output: {
    filename: '[name]-[contenthash:8].js',
  },
  devtool: 'nosources-source-map',
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                mode: (resourcePath) => {
                  if (
                    /assets\/styles\/.(le|c)ss$/i.test(resourcePath) ||
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
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({ patterns: [{ from: 'public' }] }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash:8].css',
      chunkFilename: '[name]-[contenthash:8].css',
    }),
    isAnalyze && new BundleAnalyzerPlugin(),
  ].filter((plugin) => plugin),
})
