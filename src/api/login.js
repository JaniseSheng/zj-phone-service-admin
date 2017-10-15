import {axiosPost} from '@/lib/ajax'
// -------------------------- 当天普通福利 ------------------------------
//查询当天普通福利
export const api_login = (dateTime) => {
  return axiosPost(`/${system}/report/queryMemberGoodsReport`, {dateTime}).then(res=> {
    if (res.dayReport) {
      return res
    } else return null
  });
}
