<template>
  <div class="cart">
    <NavBar
      :default-left="false"
      :left-arrow="false"
      left-text
      right-text
      title="购物车"
    ></NavBar>
    <van-pull-refresh
      @refresh="onRefresh"
      success-text="刷新成功"
      v-model="refreshing"
    >
      <van-list
        :finished="finished"
        :finished-text="list.length ? '没有更多了' : ''"
        @load="onLoad"
        v-model="loading"
      ></van-list>
      <van-empty description="空空如是也">
        <van-button
          @click="toShoping"
          class="empty-button"
          color="#ff4e22"
          round
        >去看看</van-button>
      </van-empty>
    </van-pull-refresh>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { httpRequest } from '@/lib/httpHelper'
import { Button, Empty, List, PullRefresh } from 'vant'
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
    toShoping() {
      this.$router.push({ path: '/classify' })
    },
  },
}
</script>

<style lang="scss" scoped>
.empty-button {
  width: 320px;
  height: 80px;
}
</style>
