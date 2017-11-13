import {axiosPost, axiosPatch, axiosDel, axiosGet, axiosPut} from '@/lib/ajax'
// -------------------------- 订单维护 ------------------------------
//查询用户列表
export const api_user_account = (params) => {
  return axiosGet('user_account/', params).then(res=> {
    return res.userAccountDtoList
  })
}
//账户充值
export const api_account_recharge = (params) => {
  return axiosPost('account_recharge/', params)
}
//是否允许欠款
export const api_account_status_edit = (params) => {
  return axiosPut('account_status_edit/', params)
}
