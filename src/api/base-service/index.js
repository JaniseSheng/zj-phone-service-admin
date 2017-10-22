import {axiosPost, axiosPatch, axiosDel, axiosGet} from '@/lib/ajax'
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
  return axiosDel('basic_service_delete', `?serviceId=${serviceId}`).then(res=> {
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
export const api_service_classify_edit = (params) => {
  return axiosPatch('service_classify_edit', params)
}
//服务分类删除
export const api_service_classify_delete = (serviceClassifyId) => {
  return axiosDel('service_classify_delete', `?serviceClassifyId=${serviceClassifyId}`)
}

//等级服务查询
export const api_level_query = () => {
  return axiosGet('level_query')
}

//等级服务新增、编辑
export const api_level_edit = (params) => {
  return axiosPatch('level_edit', params)
}
