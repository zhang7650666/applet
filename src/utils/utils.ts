export const formateData = (timestamp?: number | string) => {
  const date = timestamp ? new Date(timestamp) :  new Date(); // 根据时间戳创建Date对象
  const year = date.getFullYear(); // 获取年份
  const month = date.getMonth() + 1; // 获取月份，需要加1
  const day = date.getDate(); // 获取日期
  const hour = date.getHours(); // 获取小时
  const minute = date.getMinutes(); // 获取分钟
  const second = date.getSeconds(); // 获取秒数
  return  timestamp ? `${year}-${month}-${day} ${hour}:${minute}:${second}` : `${year}-${month}-${day}`;
}
interface IPhotoRule {
  height_mm: string; 
  height_px: string; 
  width_mm: string; 
  width_px: string;
}
export const getPhotoRule = (template?: IPhotoRule) => {
  if(!template) return {}
  const {height_mm, height_px, width_mm, width_px} = template;
  return {
    pxWidth: width_px,
    pxHeight: height_px,
    mmWidth: width_mm,
    mmHeight: height_mm
  }
}


export const templateBaseParams = {
  // changeBg: 1,
  bgColor: '',
  // addLabel: 1,
  labelText: '',
  // labelHeight: 30,
  clothes_num: '',
  // layout
  qualify: 1,
  layout: 1, //0或1，是否返回排版，默认为0
  layoutVertical: 1, 
  layoutSize: '5inch',
  layoutBgColor: 'ffffff',
  layoutQRCodeData: '', //二维码地址
  layoutLabelText: '专业\n证件照拍摄\n证件照制作',
}

export const onClickLongCopyText = (val) => {
  my.setClipboard ({
    text: val,
    success: function (res) {
      my.showToast({content: '复制成功'})
    },
    fail: function (err) {
      console.log (err);
    },
  });
}

// px 转 mm 1mm =  11.8px
const pxRadio = 11.8;
export const px2mm = (arg) => {
  return Math.ceil(Number(arg) / pxRadio); // 调用Math对象的ceil()函数进行向上取整操作
}
export const mm2px = (arg) => {
  return Math.ceil(Number(arg) * pxRadio); // 调用Math对象的ceil()函数进行向上取整操作
}

type Oobject  = Record<string, any>;
interface ColorsData {
  name: string,
  value: string,
  color?: string
}
interface LData {
    code?: string,
color?: ColorsData,
colors?: ColorsData[],
dpi?: string,
max_kb?: string,
min_kb?: string,
name?: string,
pix_h_max?: string,
pix_h_min?: string,
pix_w_max?: string,
pix_w_min?: string,
print_h_max:string,
print_h_min?: string,
print_w_max?: string,
print_w_min?: string,
ratio_max?: number,
ratio_min?: number,
search_text?: string,
size?: string,
icon?: boolean,
formatColor?: ColorsData[]
}
export const fromMateTemplateList = (templates:LData[], colorMapRaw?:Oobject) => {
  const list = (templates || []).map((item) => {
    item.formatColor = (item.colors || [item.color]);
    item.formatColor = item.formatColor.map((col) => {
      col.value = colorMapRaw[col.value || col.color];
      return col;
    });
    return item
  })
  return list;
}