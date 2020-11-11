module.exports = (api) => {
  // This caches the Babel config
  api.cache.using(() => process.env.ENV)

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    // Applies the react-refresh Babel plugin on non-production modes only
    ...(!api.env('production') && { plugins: ['react-hot-loader/babel'] }),
  }
}
