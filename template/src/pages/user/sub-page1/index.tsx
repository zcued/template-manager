import React from 'react'
import { Link, useLocation, useHistory, useParams } from 'react-router-dom'
import { Button } from 'antd'
import { PageContainer } from '@ant-design/pro-layout'
import Input from '@/components/Input'

export default function User(props): React.ReactElement {
  const location = useLocation()
  const history = useHistory()
  const params = useParams()

  console.log(props)

  return (
    <PageContainer>
      user
      <Input />
      <Link to="/user/sub-page1/edit">
        <Button>user</Button>
      </Link>
    </PageContainer>
  )
}
