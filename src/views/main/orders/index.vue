<template>
  <div class="orders">
    <NavBar
      title="订单"
      left-text=""
      :left-arrow="false"
      :default-left="false"
      right-text=""></NavBar>
    <van-tabs class="orders-tabs" color="#ff4e22" title-active-color="#ff4e22" v-model="active" @change="changeTab">
      <van-tab v-for="(item, index) in ordersTabs" :key="index" :title="item.title"></van-tab>
    </van-tabs>
    <van-pull-refresh class="orders-con" v-model="refreshing" @refresh="onRefresh" success-text="刷新成功">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { httpRequest } from '@/lib/httpHelper'
import { Tabs, Tab, PullRefresh, List } from 'vant'
import NavBar from '@/components/NavBar.vue'
import { setTimeout } from 'timers';
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
          key: 0
        },
        {
          title: '待付款',
          key: 1
        },
        {
          title: '已完成',
          key: 2
        },
        {
          title: '已取消',
          key: 3
        },
      ],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  created() {
    console.log('created');
  },
  methods: {
    onRefresh() {
      this.finished = false;
      this.initData()
    },
    onLoad() {
      this.initData()
    },
    initData() {
      if (!this.finished) {
        setTimeout(()=>{
          this.refreshing = false;
          this.finished = true;
          this.loading = false;
        }, 500)
      }
    },
    changeTab(name) {
      console.log(name);
    }
  } 
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
