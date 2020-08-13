<template>
  <div class="cart">
    <NavBar
      title="购物车"
      left-text=""
      :left-arrow="false"
      :default-left="false"
      right-text=""></NavBar>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" success-text="刷新成功">
      <van-list
        v-model="loading"
        :finished="finished"
        :finished-text="list.length ? '没有更多了' : ''"
        @load="onLoad"
      >
        
      </van-list>
      <van-empty description="空空如是也">
        <van-button round color="#ff4e22" class="empty-button" @click="toShoping">去看看</van-button>
      </van-empty>
    </van-pull-refresh>
  </div>
</template>

<script>
import { httpRequest } from '@/lib/httpHelper'
import { PullRefresh, List, Empty, Button } from 'vant'
import NavBar from '@/components/NavBar.vue'
// @ is an alias to /src
export default {
  name: 'Cart',
  components: {
    VanList: List,
    VanPullRefresh: PullRefresh,
    VanEmpty: Empty,
    VanButton: Button,
    NavBar,
  },
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      list: [],
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
    toShoping() {
      this.$router.push({ path: '/classify' })
    }
  } 
}
</script>

<style lang="scss" scoped>
.empty-button {
  width: 320px;
  height: 80px;
}
</style>
