<template>
  <div :class="$style['header-info-wrapepr']">
    <div :class="$style.logo">
      <img src="../assets/logo.jpg" alt="">
    </div>
    <div :class="$style.user">
      <p><img src="../assets/user.jpg" alt=""> admin</p>
      <el-button :class="$style.loginOut" type="primary" size="small">退出</el-button>
    </div>

    <div :class="$style['tag-wrapper']" data-type='price-total'>
      <div data-type='up'>
        <el-tag type="danger">总收入</el-tag><span :class="$style['point']">65712</span>
      </div>
      <div data-type='down'>
        <el-tag type="danger">本月</el-tag><span :class="$style['point']">65712</span>
      </div>
    </div>
    <div :class="$style['tag-wrapper']" data-type='price-month'>
      <div data-type='up'>
        <el-tag type="primary">总利润</el-tag><span :class="$style['point']">65712</span>
      </div>
      <div data-type='down'>
        <el-tag type="primary">本月</el-tag><span :class="$style['point']">65712</span>
      </div>
    </div>

    <div :class="$style['order-wrapper']">
      <div :class="$style['tag-wrapper']" data-type='order-wait'>
        <div data-type='up'>
          <el-tag type="warning">等待</el-tag><span :class="$style['point']">65712</span>
        </div>
        <div data-type='down'>
          65712<span :class="$style['point']">点</span>
        </div>
      </div>
      <div :class="$style['tag-wrapper']" data-type='order-complete'>
        <div data-type='up'>
          <el-tag type="success">进行中</el-tag><span :class="$style['point']">65712</span>
        </div>
        <div data-type='down'>
          65712<span :class="$style['point']">点</span>
        </div>
      </div>
      <div :class="$style['tag-wrapper']" data-type='order-fail'>
        <div data-type='up'>
          <el-tag type="danger">失败</el-tag><span :class="$style['point']">65712</span>
        </div>
        <div data-type='down'>
          65712<span :class="$style['point']">点</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='less' module>
@import "../styles/color";
.logo {
    width: 120px;
    height: 98px;
    -o-object-fit: contain;
    object-fit: contain;
    padding: 1rem 1rem 1rem 0;
}
.user {
    height: 98px;
    -o-object-fit: contain;
    object-fit: contain;
    padding: 1rem 1rem 1rem 0;
    & img {
        height: 32px;
        width: 32px;
        border-radius: 50%;
        margin-right: 0.5rem;
    }
    & p {
        margin-bottom: 0.4rem;
    }
    & button {
      width: 100%;
        }
}

.tag-wrapper {
    padding: 0.5rem;
    width: 132px;
}
.point {
  float: right;
}
.header-info-wrapepr {
    display: flex;
    justify-content: space-between;

    & [data-type='up'] {
        padding: 0.5rem 0;
    }

    & [data-type='down'] {
        padding: 0.5rem 0;
    }

    & [data-type='price-total'] {
        & [data-type='up'] {
            border-bottom: 2px solid @danger;
        }
    }
    & [data-type='price-month'] {
        & [data-type='up'] {
            border-bottom: 2px solid @primary;
        }
    }
    & [data-type='order-wait'] {
        & [data-type='up'] {
            border-bottom: 2px solid @warning;
        }
    }
    & [data-type='order-complete'] {
        & [data-type='up'] {
            border-bottom: 2px solid @success;
        }
    }
    & [data-type='order-fail'] {
        & [data-type='up'] {
            border-bottom: 2px solid @danger;
        }
    }
}

.order-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
</style>
