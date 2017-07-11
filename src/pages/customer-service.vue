<template>
<div class="base-service">
  <div class="ui-service-list">
    <div :class="$style['search-wrapper']">
      <el-input v-model="searchInputValue" placeholder="姓名，手机号，邮箱模糊查询" icon="search" style="margin-right: 1rem"></el-input>
      <el-button type="success" @click="handleClickSearch(searchInputValue)" style="width: 168px">查询</el-button>
    </div>
    <el-table :data="tableData" border max-height='680' style="width: 100%">
      <el-table-column prop="createDate" label="用户注册日期" width="180">
      </el-table-column>
      <el-table-column prop="userId" label="用户ID" width="140">
      </el-table-column>
      <el-table-column prop="userName" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="level" label="等级" width="80">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="90">
      </el-table-column>
      <el-table-column prop="gender" label="性别" width="80">
      </el-table-column>
      <el-table-column prop="remainMoney" label="账户余额" width="100">
      </el-table-column>
      <el-table-column prop="monthMoney" label="本月金额" width="100">
      </el-table-column>
      <el-table-column prop="totalMoney" label="累计金额" width="100">
      </el-table-column>
      <el-table-column prop="progress" label="进度+进行中" width="120">
      </el-table-column>
      <el-table-column prop="refuse" label="拒绝未退" width="100">
      </el-table-column>
      <el-table-column label="充值" width="80">
        <template scope="scope">
              <el-button type="success" size="small" @click="modelShow = true; showIndex = 1; modelTitle = '充值'; userInfo = scope.row">充值</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="arrowArrears" label="允许欠款" width="100">
        <template scope="scope">
              <el-button type="success" size="small" @click="modelShow = true; showIndex = 2; modelTitle = '是否允许欠款'; userInfo = scope.row">{{scope.row.arrowArrears ? '是' : '否'}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="密码" width="80">
        <template scope="scope">
              <el-button type="success" size="small" @click="modelShow = true; showIndex = 3; modelTitle = '修改密码'; userInfo = scope.row">更改</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="账户状态" width="100">
        <template scope="scope">
              <el-button :type="scope.row.status ? 'info' : 'danger'" size="small"  @click="modelShow = true; showIndex = 4; modelTitle = '修改用户状态'; userInfo = scope.row">{{scope.row.status ? '启用' : '停用'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <uiModal v-if='modelShow' width=500 :isShow.sync="modelShow" :title='modelTitle'>
    <add-price v-if='showIndex == 1' :userInfo.once='userInfo'/>
    <allow-arrears v-if='showIndex == 2' :userInfo.once='userInfo'/>
    <re-password  v-if='showIndex == 3' :userInfo.once='userInfo' />
    <status  v-if='showIndex == 4' :userInfo.once='userInfo' />
  </uiModal>
</div>
</template>

<script>
import uiModal from '@/components/ui-modal';
import addPrice from './customer-service/addPrice';
import allowArrears from './customer-service/allowArrears';
import rePassword from './customer-service/rePassword';
import status from './customer-service/status';

export default {
  data() {
    return {
      searchInputValue: '',
      tableData: [{
          createDate: '2017-12-03',
          userId: '7788162721',
          userName: 'janise001',
          level: '1',
          name: '张三',
          gender: '男',
          remainMoney: '245.00',
          monthMoney: '200.00',
          totalMoney: '400.00',
          progress: '3',
          refuse: '1',
          arrowArrears: false,
          status: true
        },
        {
          createDate: '2017-12-03',
          userId: '7788162721',
          userName: 'janise001',
          level: '1',
          name: '张三',
          gender: '男',
          remainMoney: '245.00',
          monthMoney: '200.00',
          totalMoney: '400.00',
          progress: '3',
          refuse: '1',
          arrowArrears: true,
          status: true
        },
        {
          createDate: '2017-12-03',
          userId: '7788162721',
          userName: 'janise001',
          level: '1',
          name: '张三',
          gender: '男',
          remainMoney: '245.00',
          monthMoney: '200.00',
          totalMoney: '400.00',
          progress: '3',
          refuse: '1',
          arrowArrears: false,
          status: true
        },
        {
          createDate: '2017-12-03',
          userId: '7788162721',
          userName: 'janise001',
          level: '1',
          name: '张三',
          gender: '男',
          remainMoney: '245.00',
          monthMoney: '200.00',
          totalMoney: '400.00',
          progress: '3',
          refuse: '1',
          arrowArrears: true,
          status: false
        }
      ],
      modelShow: false,
      showIndex: '1',
      ismodelShow: true,
      modelTitle: '',
      userInfo: {}
    }
  },
  methods: {
    handleClickSearch(value) {
      console.log('value', value);
    }
  },
  components: {
    uiModal,
    addPrice,
    allowArrears,
    rePassword,
    status
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
