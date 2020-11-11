import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Menu, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Item: MenuItem, Divider: MenuDivider } = Menu

export default function RightContent(): React.ReactElement {
  const menu = (
    <Menu>
      <MenuItem>
        <Link to="/account">个人设置</Link>
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <Link to="/login">退出登录</Link>
      </MenuItem>
    </Menu>
  )

  return (
    <div>
      <Dropdown overlay={menu} placement="bottomRight">
        <Avatar shape="square" size="small" icon={<UserOutlined />} />
      </Dropdown>
    </div>
  )
}
