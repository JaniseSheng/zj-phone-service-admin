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
      <el-table-column prop="id" label="服务分类ID">
      </el-table-column>
      <el-table-column prop="name" label="服务分类名称">
      </el-table-column>
      <el-table-column prop="number" label="分类下服务数量">
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="160">
        <template scope="scope">
            <el-button @click="handleDelete" type="danger" size="small">删除</el-button>
            <el-button @click="handleEdit" type="info" size="small">编辑</el-button>
          </template>
      </el-table-column>
    </el-table>
  </div>
  <div :class="$style['main-wrapper-bg']" @click="$router.push({path: '/base-service'})">
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
          id: '001',
          name: 'name1',
          number: '123'
        },
        {
          id: '002',
          name: 'name1',
          number: '111'
        },
        {
          id: '003',
          name: 'name1',
          number: '444'
        },
        {
          id: '001',
          name: 'name1',
          number: '231'
        },
        {
          id: '001',
          name: 'name1',
          number: '567'
        },
        {
          id: '001',
          name: 'name1',
          number: '222'
        },
        {
          id: '001',
          name: 'name1',
          number: '12'
        }
      ]
    }
  },
  methods: {
    handleDelete() {
      console.log('delete');
    },
    handleEdit() {
      console.log('edit');
    },
    handleAddNew(){
      console.log('handleAddNew');
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
