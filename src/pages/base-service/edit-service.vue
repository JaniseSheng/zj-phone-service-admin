<template>
<div :class="$style['add-new-service']">
  <div :class="$style['main-wrapper']">
    <p style="border-bottom: 2px solid #13ce66; margin-bottom: 1rem;"><el-tag type="success" style="font-size: 1.2rem; height: auto; padding: 0.5rem">编辑服务</el-tag></p>
    <div :class="$style['main-contaion']">
      <el-row>
        <el-col :span="14" style="padding-right: 0.5rem">
          <el-input placeholder="填写服务ID" icon="search" v-model='formData.data.serviceId' style="margin-bottom: 1rem"/>
          <el-input placeholder="服务名称" v-model="formData.data.serviceName" style="margin-bottom: 1rem"/>
        </el-col>
        <el-col :span="10" style="padding-left: 0.5rem">
          <el-select v-model="formData.data.serviceClassifyId" placeholder="选择服务类型" style="width:100%; margin-bottom: 1rem">
            <el-option v-for="item in serviceTypes" :key="'serviceTypes' + item.serviceClassifyId" :label="item.serviceClassifyName" :value="item.serviceClassifyId">
            </el-option>
          </el-select>
          <el-input placeholder="预计时间" icon="" v-model="formData.data.serviceTime" style="margin-bottom: 1rem"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14" style="padding-right: 0.5rem">
          <div>
            <el-row style="margin-bottom: 1rem">
              <el-col :span="12" style="padding-right: 0.5rem">
                <p style="margin-bottom: 1rem">服务上架
                  <el-switch v-model="formData.data.serviceShelves" on-color="#13ce66" off-color="#ff4949" />
                </p>
                <p>推荐排名(无api)
                  <el-select v-model="formData.data.rank" placeholder="推荐排名">
                    <el-option v-for="item in ranks" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </p>
              </el-col>

              <el-col :span="12" style="padding-left: 0.5rem">
                <p style="margin-bottom: 1rem">价格趋势
                  <el-radio-group v-model="formData.data.servicePriceTrend">
                    <el-radio :label="1">下跌</el-radio>
                    <el-radio :label="2">上涨</el-radio>
                  </el-radio-group>
                </p>
                <p>需求趋势
                  <el-radio-group v-model="formData.data.serviceDemandTrend">
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
                <el-input placeholder="请输入内容" v-model="item.servicePrice" v-for="item, index in formData.data.pricePolicyList" :key="'level' + index">
                  <template slot="prepend">等级{{item.userLevel}}</template>
                  <template slot="append">成本</template>
                </el-input>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="10" style="padding-left: 0.5rem">
          <div class="grid-content bg-purple-light">
            <el-input type="textarea" :autosize="{ minRows: 18}" placeholder="请输入内容" v-model="formData.data.serviceRemark" />
          </div>
        </el-col>
      </el-row>
      <p style="margin-top: 1rem; text-align:center">
        <el-button type="success" @click='handeEditService'>保存</el-button>
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
  api_service_classify_qurey, api_basic_service_edit
} from '@/api/base-service'
export default {
  data() {
    return {
      serviceTypes:[],
      ranks: [{
          label: 'top1',
          value: '1'
        },
        {
          label: 'top2',
          value: '2'
        },
        {
          label: 'top3',
          value: '3'
        }
      ]
    }
  },
  props: ['serviceInfo'],
  computed: {
    formData(){
      return {
        data: this.serviceInfo
      }
    }
  },
  created() {
    api_service_classify_qurey(10).then((res) => {
      this.serviceTypes = res
    })
  },
  methods: {
    handleClickBack(){
      this.$parent.isShowEditService = false
    },
    handeEditService(){
      api_basic_service_edit(this.formData.data).then(res=> {
        this.$parent.isShowEditService = false
        this.$emit('cick-edit')
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
