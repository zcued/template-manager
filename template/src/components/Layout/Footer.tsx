import React from 'react'
import { DefaultFooter } from '@ant-design/pro-layout'

export default function Footer(): React.ReactElement {
  return (
    <DefaultFooter
      copyright={`${new Date().getFullYear()} 北京站酷网络科技有限公司产品技术部站酷海洛团队`}
      links={[
        {
          key: '1',
          title: '站酷海洛',
          href: '//www.hellorf.com/',
          blankTarget: true,
        },
        {
          key: '2',
          title: '站酷海洛Plus',
          href: '//plus.hellorf.com/',
          blankTarget: true,
        },
        {
          key: '3',
          title: '站酷社区',
          href: '//www.zcool.com.cn/',
          blankTarget: true,
        },
        {
          key: '4',
          title: 'Shutterstock',
          href: '//www.shutterstock.com/',
          blankTarget: true,
        },
      ]}
    />
  )
}
