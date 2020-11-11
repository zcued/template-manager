const ENV_MAP = {
  production: {
    apiUrl: 'https://api.hellorf.com/',
  },
  alpha: {
    apiUrl: 'https://randomuser.me/',
    // apiUrl: 'http://backbone.alpha.hellorf.pub/',
  },
  beta: {
    apiUrl: 'http://backbone.beta.hellorf.pub/',
  },
  seven: {
    apiUrl: 'https://backbone.seven.hellorf.pub/',
  },
}

// 开发环境下指定后端环境
const DEV_ENV = 'alpha'
const { apiUrl } = ENV_MAP[DEV_ENV]

module.exports = {
  proxy: {
    '/api': {
      target: apiUrl,
      changeOrigin: true,
      secure: false,
    },
  },
}
