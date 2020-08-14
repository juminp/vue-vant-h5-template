<template>
  <div class="classify">
    <NavBar
      :default-left="false"
      :left-arrow="false"
      left-text
      right-text
      title="分类"
    ></NavBar>
    <van-pull-refresh
      @refresh="onRefresh"
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
import NavBar from '@/components/NavBar.vue'
import { httpRequest } from '@/lib/httpHelper'
import { List, PullRefresh } from 'vant'

// @ is an alias to /src
export default {
  name: 'Classify',
  components: {
    VanPullRefresh: PullRefresh,
    VanList: List,
    NavBar,
  },
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
    }
  },
  computed: {},
  watch: {},
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
  },
}
</script>

<style lang="scss" scoped>
</style>
