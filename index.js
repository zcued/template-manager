const { name, version } = require('./package.json')

module.exports = {
  name,
  version,
  prompts: {
    name: 'name',
    type: 'text',
    message: 'project name',
  },
  // complete(ctx) {
  //   console.log('template complete')
  // },
}
