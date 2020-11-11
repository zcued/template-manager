import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Result } from 'antd'

export default function NoFoundPage(): React.ReactElement {
  const history = useHistory()

  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，您访问的页面不存在。"
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          返回首页
        </Button>
      }
    />
  )
}
