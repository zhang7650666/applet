
import Taro from '@tarojs/taro';

const {TARO_APP_API, TARO_APP_VERSION} = process.env;
 interface Oobject {
  [key: string]: any
}

type PersonInfo = (name:string) => string

interface RequestParams {
  path: string,
  method: string,
  device?:Oobject
  params?: Oobject,
  successFn: Function,
  failFn?: Function ,
  complete?: Function,
  isHideUsedToast?: boolean,
}

export  function request (params:RequestParams ) {
  const {path,method, device, params:queryParams = {}, successFn, failFn } = params;
  if (successFn && typeof successFn != 'function') {
    console.warn('success must be a function')
    return ;
  }
  Taro.getSystemInfo().then((systemInfo) => {
    const {platform, system, brand, model} = systemInfo;
    const sdk = platform != 'Android' ? +system.split('.')[0] : 15;
    const vcode = +TARO_APP_VERSION.split('.').reverse()[0];

    Taro.request({
      url: TARO_APP_API + path,  // 你的API接口地址
      method:  method || "POST",
      data: {
          ...queryParams,
          // device: {
          //   "channel": "alipay", // 固定
          //   "pkgname": "test", // 固定，开发版先这样，后面会改
          //   "vername": vcode >= 29 ? TARO_APP_VERSION : '0.0.29' , // 当前小程序版本名
          //   "vercode": vcode >= 29 ? vcode : 29, // 当前小程序版本号
          //   "os": "aliapp", // 固定
          //   "os_sdk": sdk, // 通过api获取系统sdk版本
          //   "os_ver":system, // 通过api获取系统版本
          //   "brand": brand, // 系统brand
          //   "model": model, // 系统model
          //   // Md5.hashStr(authCode),
          //   // "uuid": uid.data ,// uuid，通过open_id生成，或者随机生成并存储
          //   "app_id": miniProgram.appId, // 小程序的 app_id
          //   "open_id": userInfo?.data?.open_id, // 小程序的 open_id
          //   "app_user_id": userInfo.data?.app_user_id,
          //   // "union_id": "", // 小程序的union_id
          //   "ua": navigator.userAgent, // user agent
          //   // "ip": "" // ip地址
          //   ...device
          // },

      },

    }).then((res) => {
      if (res.statusCode === 200) {
        // 请求成功
        successFn && successFn(res.data)
        console.log(res.data);
      } else {
        // 请求失败
        if (res.data.code == 100010) {
          Taro.showToast({title: '未登录，请重新登录', icon: 'none'});
          setTimeout(() => {
            Taro.redirectTo({'url':'/pages/index/index'});
          }, 1500)
        }
        else {
          Taro.showToast({title: res.data.msg, icon: 'none'})
          failFn && failFn(res);
        }
      }
    }).catch((error) => {
      // 网络错误或请求中断等情况
      console.error('Request error:', error);
    });

  }).catch((error) => {
    console.error('获取系统信息失败', error);
  });
}
