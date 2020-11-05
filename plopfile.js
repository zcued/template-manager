// eslint-disable-next-line import/no-extraneous-dependencies
const promptDirectory = require('inquirer-directory')
const pagePlop = require('./plop-config/page')

module.exports = (plop) => {
  plop.setPrompt('directory', promptDirectory)

  pagePlop(plop)
}
