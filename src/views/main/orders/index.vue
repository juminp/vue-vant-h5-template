<template>
  <div class="orders">
    <NavBar
      :default-left="false"
      :left-arrow="false"
      left-text
      right-text
      title="订单"
    ></NavBar>
    <van-tabs
      @change="changeTab"
      class="orders-tabs"
      color="#ff4e22"
      title-active-color="#ff4e22"
      v-model="active"
    >
      <van-tab
        :key="index"
        :title="item.title"
        v-for="(item, index) in ordersTabs"
      ></van-tab>
    </van-tabs>
    <van-pull-refresh
      @refresh="onRefresh"
      class="orders-con"
      success-text="刷新成功"
      v-model="refreshing"
    >
      <van-list
        :finished="finished"
        @load="onLoad"
        finished-text="没有更多了"
        v-model="loading"
      ></van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { setTimeout } from 'timers'

import NavBar from '@/components/NavBar.vue'
import { httpRequest } from '@/lib/httpHelper'
import { List, PullRefresh, Tab, Tabs } from 'vant'
// @ is an alias to /src
export default {
  name: 'Orders',
  components: {
    VanTabs: Tabs,
    VanTab: Tab,
    VanPullRefresh: PullRefresh,
    VanList: List,
    NavBar,
  },
  data() {
    return {
      active: 0,
      ordersTabs: [
        {
          title: '全部',
          key: 0,
        },
        {
          title: '待付款',
          key: 1,
        },
        {
          title: '已完成',
          key: 2,
        },
        {
          title: '已取消',
          key: 3,
        },
      ],
      loading: false,
      finished: false,
      refreshing: false,
    }
  },
  created() {
    console.log('created')
  },
  methods: {
    onRefresh() {
      this.finished = false
      this.initData()
    },
    onLoad() {
      this.initData()
    },
    initData() {
      if (!this.finished) {
        setTimeout(() => {
          this.refreshing = false
          this.finished = true
          this.loading = false
        }, 500)
      }
    },
    changeTab(name) {
      console.log(name)
    },
  },
}
</script>

<style lang="scss" scoped>
.orders {
  &-tabs {
    position: fixed;
    width: 100%;
    top: 92px;
    z-index: 1;
  }
  &-con {
    margin-top: 88px;
  }
}
</style>
