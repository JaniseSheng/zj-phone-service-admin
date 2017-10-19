import {axiosPost, axiosPatch} from '@/lib/ajax'
// -------------------------- 服务管理 ------------------------------
//查询基础服务
export const api_basic_service_query = (params) => {
  return axiosPost('basic_service_query', params).then(res=> {
    return res.serviceDtoList
  });
}
//基础服务新增、编辑
export const api_basic_service_edit = (params) => {
  return axiosPatch('basic_service_edit', params).then(res=> {
    return res
  });
}
//服务分类查询
export const api_service_classify_qurey = (pageSize) => {
  return axiosPost('service_classify_qurey', {pageSize, currentIndex: '1'}).then(res=> {
    return res.serviceClassifyDtoList
  });
}
