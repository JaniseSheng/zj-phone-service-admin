<template>
<div class="base-service">
  <div class="ui-service-list">
    <p>
      快捷搜索关键字：
      <el-button type="success" size="small" @click="_api_basic_service_query('')">全部</el-button>
      <el-button type="success" size="small" @click="_api_basic_service_query('GSX')">GSX</el-button>
      <el-button type="success" size="small" @click="_api_basic_service_query('AT&T')">AT&T</el-button>
      <el-button type="success" size="small" @click="_api_basic_service_query('ID')">ID</el-button>
      <el-button type="success" size="small" @click="_api_basic_service_query('SN')">SN</el-button>
    </p>
    <div :class="$style['search-wrapper']">
      <el-input v-model="searchInputValue" placeholder="输入服务名称查询" icon="search"></el-input>
      <el-button style='margin-left: 20px' type="primary" icon="search" @click='_api_basic_service_query(searchInputValue)'>搜索</el-button>
      <el-button type="success" @click="isShowNewService = true">添加新服务</el-button>
      <el-button type="warning" @click="isShowEditServiceType = true">服务分类编辑</el-button>
      <el-button type="info" @click="isShowLevel = true">等级维护</el-button>
    </div>
    <el-table :data="tableData" border max-height='680' style="width: 100%">
      <el-table-column prop="serviceId" label="服务ID" width="90">
      </el-table-column>
      <el-table-column prop="serviceClassifyName" label="服务分类" width="160">
      </el-table-column>
      <el-table-column prop="serviceName" label="服务名称" width="240">
      </el-table-column>
      <el-table-column prop="service_time" label="预计时间" width="100">
      </el-table-column>
      <el-table-column prop="userLevel" label="客户等级" width="100">
      </el-table-column>
      <el-table-column prop="serviceCost" label="价格" width="90">
      </el-table-column>
      <el-table-column prop="serviceRemark" label="服务备注" width="240">
      </el-table-column>
      <el-table-column prop="servicePriceTrend_text" label="价格趋势" width="100">
      </el-table-column>
      <el-table-column prop="serviceDemandTrend_text" label="需求趋势" width="100">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template scope="scope">
            <el-button @click="handleEdit(scope.row)" type="info" size="small">编辑</el-button>
            <el-button type="danger" size="small" @click='_api_basic_service_delete(scope.row.serviceId)' >删除</el-button>
            <el-button type="success" size="small">上架</el-button>
          </template>
      </el-table-column>
    </el-table>
  </div>
  <template v-if='isShowNewService'>
    <new-service @cick-insert='_api_basic_service_query'/>
  </template>
  <template v-if='isShowEditService'>
    <edit-service :serviceInfo='editServiceInfo' @cick-edit='_api_basic_service_query' />
  </template>
  <template v-if='isShowEditServiceType'>
    <edit-service-type />
  </template>
  <template v-if='isShowLevel'>
    <level-manage />
  </template>
</div>
</template>

<script>
import {
  api_basic_service_query,
  api_basic_service_delete
} from '@/api/base-service'
import newService from './base-service/add-new-service.vue'
import editService from './base-service/edit-service.vue'
import editServiceType from './base-service/edit-service-type.vue'
import levelManage from './base-service/level-manage.vue'
export default {
  data() {
    return {
      isShowNewService: false, //是否打开添加新服务
      isShowEditService: false, //是否打开编辑新服务
      isShowEditServiceType: false, //是否打开编辑服务类型
      isShowLevel: false, //是否打开编辑等级服务
      editServiceInfo: '',
      searchInputValue: '',
      tableData: []
    }
  },
  created() {
    /**
     * 基础服务查询
     **/
    this._api_basic_service_query()
  },
  methods: {
    _api_basic_service_delete(serviceId) {
      const decodeUnicode = (str) => {
        str = str.replace(/\\/g, '%');
        return unescape(str);
      }
      api_basic_service_delete(decodeUnicode(serviceId)).then(res => {
        this.$message.success('删除成功！')
        this._api_basic_service_query()

      })
    },
    _api_basic_service_query(keyword = '') {
      api_basic_service_query({
        pageSize: 100,
        currentIndex: 1,
        keyword
      }).then((res) => {
        this.tableData = res.map(item => {
          return Object.assign({}, item, {
            serviceDemandTrend: parseInt(item.serviceDemandTrend),
            servicePriceTrend: parseInt(item.servicePriceTrend),
            serviceDemandTrend_text: item.serviceDemandTrend == '1' ? '下降' : '上升',
            servicePriceTrend_text: item.servicePriceTrend == '1' ? '下降' : '上升'
          })
        })
      })
    },
    handleEdit(item) {
      this.editServiceInfo = item
      this.isShowEditService = true
    }
  },
  components: {
    newService,
    editService,
    editServiceType,
    levelManage
  }
}
</script>

<style lang="less" module>
.search-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    &:global(.el-input) {
        margin-right: 1rem;
    }
}
</style>
