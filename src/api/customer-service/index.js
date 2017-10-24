import {axiosPost, axiosPatch, axiosDel, axiosGet} from '@/lib/ajax'
// -------------------------- 订单维护 ------------------------------
//查询用户列表
export const api_user_account = (params) => {
  return axiosGet('user_account/', params).then(res=> {
    return res.userAccountDtoList
  })
}
