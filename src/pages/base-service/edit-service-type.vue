<template>
<div :class="$style['add-new-service']">
  <div :class="$style['main-wrapper']" style="border: 1px solid #f7ba2a;">
    <p style="border-bottom: 2px solid #f7ba2a; margin-bottom: 1rem;">
      <el-tag type="warning" style="font-size: 1.2rem; height: auto; padding: 0.5rem">服务分类服务</el-tag>
    </p>
    <p style="margin-bottom: 1rem;">
      <el-button type='success' @click="handleAddNew">新增</el-button>
    </p>
    <el-table :data="tableData" border max-height='420' style="width: 100%">
      <el-table-column label="服务分类ID">
        <template scope="scope">
            <el-input placeholder="服务分类ID" v-model='scope.row.serviceClassifyId' />
        </template>
      </el-table-column>
      <el-table-column label="服务分类名称">
        <template scope="scope">
            <el-input placeholder="服务分类名称" v-model='scope.row.serviceClassifyName' />
        </template>
      </el-table-column>
      <el-table-column prop='serviceCount' label="分类下服务数量">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template scope="scope">
          <el-button @click="handleDelete(scope.row.serviceClassifyId)" type="danger" size="small">删除</el-button>
          <el-button @click="handleEdit(scope.row)" type="info" size="small">编辑/保存</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div :class="$style['main-wrapper-bg']" @click="$parent.isShowEditServiceType = false">
  </div>
</div>
</template>

<script>
import {
  api_service_classify_qurey,
  api_service_classify_edit,
  api_service_classify_delete
} from '@/api/base-service'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this._api_service_classify_qurey()
  },
  methods: {
    /**
     * 查询服务类型
     **/
    _api_service_classify_qurey() {
      api_service_classify_qurey(100).then((res) => {
        this.tableData = res
      })
    },
    /**
     * 新增、编辑服务
     **/
    _api_service_classify_edit(params) {
      return api_service_classify_edit(params)
    },
    handleSearch() {
      this._api_service_classify_qurey()
    },
    handleDelete(serviceClassifyId) {
      api_service_classify_delete(serviceClassifyId).then(()=>{
        this.$message.success('删除成功！！')
        this._api_service_classify_qurey()
      })
    },
    handleEdit(item) {
      console.log(item);
      this._api_service_classify_edit(item).then(() => {
        this.$message.success('保存成功！！')
        this._api_service_classify_qurey()
      })
    },
    handleAddNew() {
      this.tableData.push({
        serviceClassifyId: '',
        serviceClassifyName: ''
      })
    }
  }
}
</script>

<style lang='less' module>
@import "../../styles/color.less";

.add-new-service {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
}
.main-wrapper {
    position: relative;
    z-index: 2;
    width: 960px;
    margin: 8rem auto 0;
    background: white;
    padding: 1rem;
}
.main-wrapper-bg {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(0,0,0,.41);
}
</style>
