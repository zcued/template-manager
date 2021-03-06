const path = require('path')

module.exports = (plop) => {
  const pagePath = 'src/pages'
  const templatePath = 'plop-templates/page'
  const getPascalCase = plop.getHelper('pascalCase')
  const getSnakeCase = plop.getHelper('snakeCase')

  plop.setGenerator('page', {
    description: '创建一个页面',
    prompts: [
      {
        type: 'directory',
        name: 'path',
        message: '请选择生成文件所在路径',
        basePath: pagePath,
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入生成文件名称',
        default: 'plop/index',
      },
      {
        type: 'input',
        name: 'title',
        message: '请输入页面标题',
        default: 'plop模版',
      },
    ],
    actions: (data) => {
      const { dir, name, ext } = path.parse(data.name)

      // eslint-disable-next-line no-param-reassign
      data.nameParse = {
        dir,
        name,
        ext,
        pascalName: getPascalCase(path.join(data.path, dir, name)),
      }

      const configBasePath = data.path
      const configPath = data.name.endsWith('/index')
        ? path.join(configBasePath, dir)
        : path.join(configBasePath, dir, name)
      const configName = getSnakeCase(configPath)

      return [
        {
          type: 'add',
          path: `${path.join(
            pagePath,
            '{{path}}',
            '{{nameParse/dir}}'
          )}/{{nameParse/name}}.tsx`,
          templateFile: `${templatePath}/list.hbs`,
        },
        {
          type: 'modify',
          path: './src/routes/routes.ts',
          pattern: /(\s+\/\*\* PREPEND ITEMS HERE \*\/)/gi,
          template: `\n  {\n    path: '/${configPath}',\n    name: '{{title}}',\n    component: lazy(\n      () => import(/* webpackChunkName: "${configName}" */ '@/pages/${configPath}')\n    ),\n  },$1`,
        },
      ]
    },
  })
}
