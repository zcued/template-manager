const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
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
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({ patterns: [{ from: 'public' }] }),
    isAnalyze && new BundleAnalyzerPlugin(),
  ].filter((plugin) => plugin),
})
