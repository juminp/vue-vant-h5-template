<template>
  <section>
    <keep-alive>
        <router-view v-if="$route.meta && $route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta || !$route.meta.keepAlive"></router-view>
    <div class="tabbar-placeholder"></div>
    <van-tabbar
      @change="changeTab"
      v-model="active"
      active-color="#ff4e22"
      inactive-color="#999999">
      <van-tabbar-item
        v-for="(item, index) in tabs"
        :key="index"
        :icon="item.icon">{{ item.txt }}</van-tabbar-item>
    </van-tabbar>
  </section>
</template>

<script>
import { httpRequest } from '@/lib/httpHelper'
import { Tabbar, TabbarItem } from 'vant';
// @ is an alias to /src
export default {
  name: 'Main',
  components: {
    VanTabbar: Tabbar,
    VanTabbarItem: TabbarItem,
  },
  data() {
    return {
      active: 0,
      tabs: [
        {
          icon: 'home-o',
          txt: '首页',
          path: '/home',
        },
        {
          icon: 'apps-o',
          txt: '分类',
          path: '/classify',
        },
        {
          icon: 'cart-o',
          txt: '购物车',
          path: '/cart',
        },
        {
          icon: 'orders-o',
          txt: '订单',
          path: '/orders',
        },
        {
          icon: 'user-o',
          txt: '我的',
          path: '/user',
        },
      ]
    };
  },
  watch: {
    $route(newVal,oldVal) {
      // console.log(newVal,oldVal);
      this.initActive()
    }
  },
  created() {
    this.initActive()
  },
  methods :{
    initActive() {
      this.tabs.forEach((item, index) => {
        if (item.path === this.$route.path) {
          this.active = index
        }
      })
    },
    changeTab(e) {
      this.$router.push({
        path: this.tabs[e].path,
      })
    },
  } 
}
</script>

<style lang="scss">
.tabbar-placeholder {
  width: 100%;
  height: 120px;
}
.van-tabbar-item__icon i{
  font-size: 42px;
}
</style>
