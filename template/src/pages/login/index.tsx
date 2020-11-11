import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Form, Input, Checkbox, Button } from 'antd'
import { RouteComponentProps } from '@/routes'
import { useQuery } from '@/hooks'
import Footer from '@/components/Layout/Footer'

import style from './style.less'

const { Item: FormItem } = Form

export default function Login(props: RouteComponentProps): React.ReactElement {
  console.log(props)

  const query = useQuery()
  console.log(query)

  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <Layout style={{ minHeight: '100%' }}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.top}>
            <div className={style.header}>
              <img
                className={style.logo}
                alt="logo"
                src="//static.hellorf.com/hellorf/images/hellorf-fav.png"
              />
              <span className={style.title}>站酷海洛</span>
            </div>
            <div className={style.desc}>站酷海洛旗下产品</div>
          </div>
          <div className={style.main}>
            <Form onFinish={handleSubmit}>
              <FormItem name="name">
                <Input size="large" placeholder="用户名" />
              </FormItem>
              <FormItem name="password">
                <Input type="password" size="large" placeholder="密码" />
              </FormItem>
              <div className={style.operator}>
                <Checkbox checked>自动登录</Checkbox>
                <Link to="/">忘记密码</Link>
              </div>
              <Button
                className={style.submit}
                type="primary"
                size="large"
                htmlType="submit"
              >
                登录
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
