import request from '@/services/request'

export function loginAPI(data) {
  return request.post('/login', data)
}
