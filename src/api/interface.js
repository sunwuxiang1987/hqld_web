import request from './http' // 使用实例

export function Test(params) {
  return request({
    url: '/v1/bpi/currentprice.json',
    method: 'get',
    params
  })
}

export function BtcUsdt(params) {
  return request({
    url: 'http://api.tianapi.com/txapi/cybermoney/index?key=a5035ece54e6544e0e09561a5b827c18&coin='+params.type,
    method: 'get',
    params
  })
}

export function Api(url,params) {
  return request({
    url: url,
    method: 'get',
    params:params
  })
}

export function TokenApi(that,url,params) {
  params.token = localStorage.getItem("accessToken")
  if(!params.token){
    that.$message.error('please login first');
    that.$router.push({ path: '/me_login' });
    return null;
  }
  return request({
    url: url,
    method: 'get',
    params:params
  })
}



