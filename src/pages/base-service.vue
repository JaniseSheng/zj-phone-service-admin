<template>
<div class="base-service">
  <div class="ui-service-list">
    <p>
      快捷搜索关键字：
      <el-button type="success" size="small" @click='handleClick'>全部</el-button>
      <el-button type="success" size="small">GSX</el-button>
      <el-button type="success" size="small">AT&T</el-button>
      <el-button type="success" size="small">ID</el-button>
      <el-button type="success" size="small">SN</el-button>
    </p>
    <div :class="$style['search-wrapper']">
      <el-input v-model="searchInputValue" placeholder="请选择日期" icon="search" :on-icon-click='handleSelectService'></el-input>
      <el-button type="success" @click="$router.push({ path: '/base-service/add-new-service' })">添加新服务</el-button>
      <el-button type="warning" @click="$router.push({ path: '/base-service/edit-service-type' })">服务分类编辑</el-button>
      <el-button type="info" @click="$router.push('/base-service/level-manage')">等级维护</el-button>
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
      <el-table-column prop="servicePriceTrend" label="价格趋势" width="100">
      </el-table-column>
      <el-table-column prop="serviceDemandTrend" label="需求趋势" width="100">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template scope="scope">
            <el-button @click="handleEdit" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">上架</el-button>
          </template>
      </el-table-column>
    </el-table>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
import {
  api_basic_service, api_service_classic_edit
} from '@/api/base-service'
export default {
  data() {
    return {
      searchInputValue: '',
      tableData: []
    }
  },
  created() {
    api_basic_service({
      pageSize: 2,
      currentIndex: 1
    }).then((res) => {
      this.tableData = res
    })
    api_service_classic_edit({
      pageSize: 2,
      currentIndex: 1
    }).then((res) => {
      console.log(res);
    })
  },
  methods: {
    handleClick() {},
    handleSelectService(e) {},
    handleEdit(e) {}
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
