import {axiosPost} from '@/lib/ajax'
// -------------------------- 当天普通福利 ------------------------------
//查询当天普通福利
export const api_basic_service = (params) => {
  return axiosPost('basicservice', params).then(res=> {
    return res.serviceDtoList
  });
}
//服务分类编辑
export const api_service_classic_edit = (params) => {
  return axiosPost('serviceclassicedit', params).then(res=> {
    return res
  });
}
