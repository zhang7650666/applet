import {request} from './request';
type obj = Record<string, any>;
const { TARO_APP_VERSION} = process.env;

 const sendlog = (params: object, successFn?:() => {}, failFn?: () => {})  =>{
  return request({
    path: '/api/v1/conversion/aliapp/report',
    params: {
      'type': 'purchase',
      'params':{
        vercode: TARO_APP_VERSION,
        ...params
      },
    },
    successFn:successFn,
    failFn: failFn,
  })
}

export default sendlog;
