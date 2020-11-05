import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Result, Button } from 'antd'
import { PageContainer } from '@ant-design/pro-layout'
import Input from '@/components/Input'
import { getUserList } from '@/services/user'
import logo from '@/assets/logo.svg'
import style from './style.less'

function Home(): React.ReactElement {
  const fetchUserList = async () => {
    await getUserList()
  }

  useEffect(() => {
    fetchUserList()
  }, [])

  return (
    <PageContainer>
      <div className={style.App}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">Users</Link>
            </li>
          </ul>
        </nav>
        <Result
          status="success"
          title="Successfully Purchased Cloud Server ECS!"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button type="primary" key="console">
              Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
          ]}
        />
        <header className={style.AppHeader}>
          <img src={logo} className={style.AppLogo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={style.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Input />
          <Button>home</Button>
          <div className={style.card}></div>
        </header>
      </div>
    </PageContainer>
  )
}

export default Home
