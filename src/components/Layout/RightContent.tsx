import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export default function RightContent(): React.ReactElement {
  return (
    <div>
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
    </div>
  )
}
