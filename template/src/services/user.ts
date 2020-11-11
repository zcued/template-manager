import request from '@/utils/request'

export function login(): Promise<any> {
  return request.get('/login')
}

export function getUserList(params: any): Promise<any> {
  return request.get('/api', { params })
}
