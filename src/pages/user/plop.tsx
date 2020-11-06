import React, { useState, useEffect } from 'react'
import { stringify } from 'qs'
import dayjs from 'dayjs'
import {
  Card,
  Row,
  Col,
  Form,
  Tag,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Button,
  Table,
  Divider,
} from 'antd'
import { PageContainer } from '@ant-design/pro-layout'
import { useQuery } from '@/hooks'
import { RouteComponentProps } from '@/routes'
import { getUserList } from '@/services/user'

const { Item: FormItem } = Form
const { CheckableTag } = Tag
const { Option } = Select
const { RangePicker } = DatePicker

const colSpan = {
  sm: 24,
  md: 12,
  lg: 8,
  xxl: 6,
}

export default function UserPlop({
  location,
  history,
  route,
}: RouteComponentProps): React.ReactElement {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [total] = useState(100)
  const [checkedTags, setCheckedTags] = useState([])

  const query = useQuery()

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      render: (item) => `${item.first} ${item.last}`,
    },
    {
      title: '性别',
      dataIndex: 'gender',
    },
    {
      title: '操作',
      dataIndex: 'option',
      render: () => (
        <>
          <a>配置</a>
          <Divider type="vertical" />
          <a href="">订阅警报</a>
        </>
      ),
    },
  ]

  function format(params) {
    const faker = { ...params }

    Object.keys(faker).forEach((key) => {
      const item = faker[key]

      if (item instanceof Array) {
        faker[`${key}_start`] = dayjs(item[0]).format('YYYY-MM-DD HH:mm:ss')
        faker[`${key}_end`] = dayjs(item[1]).format('YYYY-MM-DD HH:mm:ss')

        delete faker[key]
      }
    })

    return faker
  }

  async function fetch(params: any) {
    setIsLoading(true)

    try {
      const res = await getUserList({
        page: current,
        results: pageSize,
        ...params,
      })

      if (res.results) {
        setData(res.results)
        setPageSize(res.info.results)
      }
    } finally {
      setIsLoading(false)
    }
  }

  function handleSearch(params, page, size) {
    const search = stringify({
      ...format(params),
      page,
      results: size,
    })

    history.push({
      pathname: route.path as string,
      search: `?${search}`,
    })
  }

  useEffect(() => {
    fetch(query)
  }, [location.search])

  return (
    <PageContainer>
      <Card className="table-search">
        <Form onFinish={(values) => handleSearch(values, 1, pageSize)}>
          <Row gutter={24}>
            <Col span={24}>
              <FormItem label="多选" name="tag" initialValue={query.tag}>
                {['Movies', 'Books', 'Music', 'Sports'].map((item) => (
                  <CheckableTag
                    key={item}
                    checked={checkedTags.includes(item)}
                    onChange={(checked) => {
                      setCheckedTags(
                        checked
                          ? [...checkedTags, item]
                          : checkedTags.filter((tag) => tag !== item)
                      )
                    }}
                  >
                    {item}
                  </CheckableTag>
                ))}
              </FormItem>
            </Col>
            <Col {...colSpan}>
              <FormItem label="名称" name="name" initialValue={query.name}>
                <Input placeholder="请输入" allowClear />
              </FormItem>
            </Col>
            <Col {...colSpan}>
              <FormItem label="状态" name="status" initialValue={query.status}>
                <Select placeholder="请选择" allowClear>
                  <Option value={1}>1</Option>
                  <Option value={2}>1</Option>
                  <Option value={3}>1</Option>
                </Select>
              </FormItem>
            </Col>
            <Col {...colSpan}>
              <FormItem
                label="时间"
                name="updatedAt"
                initialValue={
                  query.updatedAt_start && [
                    dayjs(query.updatedAt_start as any),
                    dayjs(query.updateAt_end as any),
                  ]
                }
              >
                <RangePicker />
              </FormItem>
            </Col>
            <Col {...colSpan}>
              <FormItem label="年限">
                <FormItem
                  noStyle
                  name="ages_start"
                  initialValue={query.ages_start}
                >
                  <InputNumber placeholder="请输入" />
                </FormItem>
                <span className="divider">-</span>
                <FormItem noStyle name="ages_end" initialValue={query.ages_end}>
                  <InputNumber placeholder="请输入" />
                </FormItem>
              </FormItem>
            </Col>
            <Col className="options" flex={1}>
              <FormItem>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                <Button>导出</Button>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card className="table-list">
        <div className="options">
          <h3>plop模版</h3>
          <div>
            <Button type="primary">新建</Button>
          </div>
        </div>
        <Table
          loading={isLoading}
          dataSource={data}
          columns={columns}
          rowKey={(record: any) => record.id.name + record.id.value}
          pagination={{
            current,
            pageSize,
            total,
            position: ['topRight', 'bottomRight'],
            size: 'small',
            showQuickJumper: true,
            showSizeChanger: true,
            showTotal: (totalCount) => `共 ${totalCount} 条记录`,
          }}
          onChange={(pagination) => {
            setCurrent(pagination.current || 1)
            handleSearch(query, pagination.current, pagination.pageSize)
          }}
        />
      </Card>
    </PageContainer>
  )
}
