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
        <el-button type="warning"@click="$router.push({ path: '/base-service/edit-service-type' })">服务分类编辑</el-button>
        <el-button type="info" @click="$router.push('/base-service/level-manage')">等级维护</el-button>
      </div>
      <el-table
        :data="tableData"
        border
        max-height='680'
        style="width: 100%">
        <el-table-column
          prop="id"
          label="服务ID"
          width="90">
        </el-table-column>
        <el-table-column
          prop="servicetype"
          label="服务分类"
          width="160">
        </el-table-column>
        <el-table-column
          prop="servicename"
          label="服务名称"
          width="240">
        </el-table-column>
        <el-table-column
          prop="scheduledtime"
          label="预计时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="customerlevel"
          label="客户等级"
          width="100">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格"
          width="90">
        </el-table-column>
        <el-table-column
          prop="servicenote"
          label="服务备注"
          width="240">
        </el-table-column>
        <el-table-column
          prop="recommend"
          label="推荐"
          width="90">
        </el-table-column>
        <el-table-column
          prop="pricetrend"
          label="价格趋势"
          width="100">
        </el-table-column>
        <el-table-column
          prop="demandtrends"
          label="需求趋势"
          width="100">
        </el-table-column>
        <el-table-column
          prop="edittime"
          label="修改日期"
          width="160">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
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
export default {
  data() {
    return {
      searchInputValue: '',
      tableData: [
        {
          id: '#001#',
          servicetype: 'INFO check',
          servicename: 'GSX Carrier Checker 完全策略信息有锁无锁查运营商 快',
          scheduledtime: '1~3小时',
          customerlevel: '3',
          price: '888.00',
          servicenote: 'ATT iPhone active on another account 美版ATT 被其他用户激活状态官解 高概',
          recommend: 'top1',
          pricetrend: 'top',
          demandtrends: 'down',
          edittime: '2017-12-03'
        },
        {
          id: '#001#',
          servicetype: 'INFO check',
          servicename: 'GSX Carrier Checker 完全策略信息有锁无锁查运营商 快',
          scheduledtime: '1~3小时',
          customerlevel: '3',
          price: '888.00',
          servicenote: 'ATT iPhone active on another account 美版ATT 被其他用户激活状态官解 高概',
          recommend: 'top1',
          pricetrend: 'top',
          demandtrends: 'down',
          edittime: '2017-12-03'
        },
        {
          id: '#001#',
          servicetype: 'INFO check',
          servicename: 'GSX Carrier Checker 完全策略信息有锁无锁查运营商 快',
          scheduledtime: '1~3小时',
          customerlevel: '3',
          price: '888.00',
          servicenote: 'ATT iPhone active on another account 美版ATT 被其他用户激活状态官解 高概',
          recommend: 'top1',
          pricetrend: 'top',
          demandtrends: 'down',
          edittime: '2017-12-03'
        },
        {
          id: '#001#',
          servicetype: 'INFO check',
          servicename: 'GSX Carrier Checker 完全策略信息有锁无锁查运营商 快',
          scheduledtime: '1~3小时',
          customerlevel: '3',
          price: '888.00',
          servicenote: 'ATT iPhone active on another account 美版ATT 被其他用户激活状态官解 高概',
          recommend: 'top1',
          pricetrend: 'top',
          demandtrends: 'down',
          edittime: '2017-12-03'
        },
        {
          id: '#001#',
          servicetype: 'INFO check',
          servicename: 'GSX Carrier Checker 完全策略信息有锁无锁查运营商 快',
          scheduledtime: '1~3小时',
          customerlevel: '3',
          price: '888.00',
          servicenote: 'ATT iPhone active on another account 美版ATT 被其他用户激活状态官解 高概',
          recommend: 'top1',
          pricetrend: 'top',
          demandtrends: 'down',
          edittime: '2017-12-03'
        }
      ]
    }
  },
  methods: {

    handleClick() {
      console.log(123);
    },
    handleSelectService(e) {
      console.log(e);
    },
    handleEdit(e){
      console.log(e);
    }
  }
}
</script>

<style lang="less" module>
.search-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  & :global(.el-input) {
    margin-right: 1rem;
  }
}
</style>
