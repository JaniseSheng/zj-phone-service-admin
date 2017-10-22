import {axiosPost, axiosPatch, axiosDel, axiosGet} from '@/lib/ajax'
// -------------------------- 订单维护 ------------------------------
//查询历史订单列表
export const api_history_order_list_query = (params) => {
  return axiosPost('history_order_list_query', params)
}
