// http://127.0.0.1:7001
import request from '../common/request';

export function login(params: any) {
  return request({
    url: 'login',
    method: 'POST',
    data: params
  })
}