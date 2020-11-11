# 管理平台

该项目是一个基于 antd / @ant-design/pro-layout 搭建的 react 管理平台项目。

## 项目目录

```sh
├── config                 # 配置相关，目前包含 proxy
├── plop-config            # plop 对应模版的配置
├── plop-templates         # plop 模版
├── public                 # 不需要构建的文件
├── src
│   ├── assets             # 本地静态资源
│   ├── components         # 组件
│   ├── hooks              # hooks
│   ├── pages              # 页面
│   ├── routes             # 路由
│   ├── services           # api 方法
│   ├── utils              # 工具函数
│   ├── index.tsx          # 入口文件
│   └── typings.d.ts       # 全局类型
├── plopfile.js            # plop 配置文件
├── README.md
└── package.json
```

## 本地开发

```bash
$ yarn
$ yarn start                 # visit http://local.hellorf.pub:3000
```

**注意：需配置 hosts，`172.0.0.1: local.hellorf.pub`**

## 模版工具

```bash
$ yarn plop

# 或直接使用对应的模版
$ yarn plop page | component | modal
```

## 技术栈

- React Hooks
- typescript
- react-router-dom：前端路由
- antd：管理平台组件
- @ant-design/pro-layout：管理平台组件
- less：css 预编译
- CSS Modules：css 模块化
