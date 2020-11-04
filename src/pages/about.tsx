import React from 'react'
import { Button } from 'antd'
import { PageContainer } from '@ant-design/pro-layout'
import Input from '@/components/Input'

export default function About(): React.ReactElement {
  return (
    <PageContainer>
      about
      <Input />
      <Button>about</Button>
    </PageContainer>
  )
}
