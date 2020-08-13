<template>
  <div class="classify">
    <NavBar
      title="分类"
      left-text=""
      :left-arrow="false"
      :default-left="false"
      right-text=""></NavBar>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" success-text="刷新成功">
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
import { PullRefresh, List } from 'vant'
import NavBar from '@/components/NavBar.vue'

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
    };
  },
  computed: {},
  created() {
    console.log('created');
  },
  watch: {},
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
  } 
}
</script>

<style lang="scss" scoped>

</style>
