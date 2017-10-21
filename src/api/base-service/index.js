import {axiosPost, axiosPatch, axiosDel} from '@/lib/ajax'
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
//基础服务删除
export const api_basic_service_delete = (serviceId) => {
  return axiosDel('basic_service_delete', `serviceId=${serviceId}`).then(res=> {
    return res
  });
}
//服务分类查询
export const api_service_classify_qurey = (pageSize) => {
  return axiosPost('service_classify_qurey', {pageSize, currentIndex: '1'}).then(res=> {
    return res.serviceClassifyDtoList
  });
}
//服务分类新增、编辑
export const api_ervice_classify_edit = (pageSize) => {
  return axiosPost('ervice_classify_edit', {pageSize, currentIndex: '1'}).then(res=> {
    return res.serviceClassifyDtoList
  });
}
