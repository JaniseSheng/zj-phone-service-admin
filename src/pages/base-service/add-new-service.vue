<template>
<div :class="$style['add-new-service']">
  <div :class="$style['main-wrapper']">
    <p style="border-bottom: 2px solid #13ce66; margin-bottom: 1rem;"><el-tag type="success" style="font-size: 1.2rem; height: auto; padding: 0.5rem">添加新服务</el-tag></p>
    <div :class="$style['main-contaion']">
      <el-row>
        <el-col :span="14" style="padding-right: 0.5rem">
          <el-input placeholder="填写服务ID" icon="search" v-model='serviceId' style="margin-bottom: 1rem"/>
          <el-input placeholder="服务名称" v-model="serviceName" style="margin-bottom: 1rem"/>
        </el-col>
        <el-col :span="10" style="padding-left: 0.5rem">
          <el-select v-model="serviceClassifyId" placeholder="选择服务类型" style="width:100%; margin-bottom: 1rem">
            <el-option v-for="item in serviceTypes" :key="'serviceTypes' + item.serviceClassifyId" :label="item.serviceClassifyName" :value="item.serviceClassifyId">
            </el-option>
          </el-select>
          <el-input placeholder="预计时间" icon="" v-model="serviceTime" style="margin-bottom: 1rem"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14" style="padding-right: 0.5rem">
          <div :class="$style['row-contaion-left']">
            <el-row style="margin-bottom: 1rem">
              <el-col :span="12" style="padding-right: 0.5rem">
                <p style="margin-bottom: 1rem">服务上架
                  <el-switch v-model="serviceShelves" on-color="#13ce66" off-color="#ff4949" />
                </p>
                <p>推荐排名(无api)
                  <el-select v-model="serviceRank" placeholder="推荐排名">
                    <el-option v-for="item in serviceRanks" :key="item.userLevel" :label="item.userLevel" :value="item.userLevelCode">
                    </el-option>
                  </el-select>
                </p>
              </el-col>

              <el-col :span="12" style="padding-left: 0.5rem">
                <p style="margin-bottom: 1rem">价格趋势
                  <el-radio-group v-model="servicePriceTrend">
                    <el-radio :label="1">下跌</el-radio>
                    <el-radio :label="2">上涨</el-radio>
                  </el-radio-group>
                </p>
                <p>需求趋势
                  <el-radio-group v-model="serviceDemandTrend">
                    <el-radio :label="1">下跌</el-radio>
                    <el-radio :label="2">上涨</el-radio>
                  </el-radio-group>
                </p>
              </el-col>
            </el-row>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="line-height: 36px;">价格策略</span>
              </div>
              <div>
                <el-input placeholder="请输入内容" v-model="item.servicePrice" v-for="item, index in pricePolicyList" :key="'level' + index">
                  <template slot="prepend">等级{{item.userLevel}}</template>
                  <template slot="append">成本</template>
                </el-input>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="10" style="padding-left: 0.5rem">
          <div class="grid-content bg-purple-light">
            <el-input type="textarea" :autosize="{ minRows: 18}" placeholder="请输入内容" v-model="serviceRemark" />
          </div>
        </el-col>
      </el-row>
      <p style="margin-top: 1rem; text-align:center">
        <el-button type="success" @click='handeInsertService'>保存</el-button>
   <el-button type="warning">取消</el-button>
      </p>
    </div>
  </div>
  <div :class="$style['main-wrapper-bg']" @click="handleClickBack">
  </div>
</div>
</template>

<script>
import {
  api_service_classify_qurey, api_basic_service_edit, api_level_query
} from '@/api/base-service'
export default {
  data() {
    return {
      // 服务ID
      serviceId: '',
      // 服务分类
      serviceClassifyId: '',
      serviceTypes:[],
      // 服务名称
      serviceName: '',
      // 预计时间
      serviceTime: '',
      // 服务是否上架
      serviceShelves: false,
      // 推荐排名
      serviceRank: '3',
      serviceRanks: [],
      // 价格趋势
      servicePriceTrend: 1, // 1 下 2上
      // 需求趋势
      serviceDemandTrend: 1, // 1下 2上
      // 价格策略
      pricePolicyList: [{
          userLevel: 1,
          servicePrice: 10
        },
        {
          userLevel: 2,
          servicePrice: 15
        },
        {
          userLevel: 3,
          servicePrice: 20
        }
      ],
      // 服务备注
      serviceRemark: ''
    }
  },
  computed: {
    formData(){
      return {
        data: this.serviceInfo
      }
    }
  },
  created() {
    api_level_query().then(res=> {
      console.log(res);
        this.serviceRanks = res
    })
    api_service_classify_qurey(10).then((res) => {
      this.serviceTypes = res
    })
  },
  methods: {
    handleClickBack(){
      this.$parent.isShowNewService = false
    },
    handeInsertService(){
      api_basic_service_edit({
        serviceClassifyId: this.serviceClassifyId,
        serviceId: this.serviceId,
        serviceName: this.serviceName,
        serviceTime: this.serviceTime,
        serviceRemark: this.serviceRemark,
        servicePriceTrend: this.servicePriceTrend,
        serviceDemandTrend: this.serviceDemandTrend,
        pricePolicyList: this.pricePolicyList
      }).then(res=> {
        this.$parent.isShowNewService = false
        this.$emit('cick-insert')
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
  border: 1px solid @blue-darker;
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
.main-contaion {
  & .row-1 {
    padding: 1rem 0;
    display: flex;
    flex-wrap: nowrap;
  }
}

</style>
