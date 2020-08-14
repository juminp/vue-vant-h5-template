<template>
  <div class="user">
    <NavBar
      :default-left="false"
      :left-arrow="false"
      left-text
      right-text
      title="我的"
    ></NavBar>
    <van-pull-refresh
      @refresh="onRefresh"
      success-text="刷新成功"
      v-model="refreshing"
    >
      <div class="user-top f-flex-box align-center">
        <div class="avatar">
          <img
            :src="userInfo.avatar"
            alt
            class="avatar-img"
          />
        </div>
        <div class="user-info">
          <p class="user-info-name">{{ userInfo.nickname }}</p>
          <p class="user-info-tag">{{ userInfo.level }}</p>
        </div>
        <div class="edit-user">
          <van-icon name="arrow" />
        </div>
      </div>
      <van-button
        @click="onLogout"
        block
        class="logout-btn"
        plain
        round
        size="small"
      >退出登录</van-button>
    </van-pull-refresh>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { httpRequest } from '@/lib/httpHelper'
import { Button, Icon, PullRefresh } from 'vant'

// @ is an alias to /src
export default {
  name: 'User',
  components: {
    VanPullRefresh: PullRefresh,
    VanIcon: Icon,
    VanButton: Button,
    NavBar,
  },
  data() {
    return {
      refreshing: false,
      userInfo: {
        nickname: '多啦啊莫奈',
        avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP.GbkWaAtaUEMreyTFG9FM9AAAAA?pid=Api&rs=1',
        level: 'silver',
      },
    }
  },
  watch: {},
  created() {
    console.log('created')
  },
  methods: {
    onRefresh() {
      this.initData()
    },
    initData() {
      setTimeout(() => {
        this.refreshing = false
      }, 500)
    },
    onLogout() {
      this.$dialog
        .confirm({
          title: '退出登录',
          message: '亲，您真的要离开我们吗？',
          confirmButtonText: '留下',
          confirmButtonColor: '#ff4e22',
          cancelButtonText: '退出',
          cancelButtonColor: '#999999',
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
          this.$store
            .dispatch('user/logout')
            .then(() => {
              this.$router.push(`/login?redirect=${this.$route.fullPath}`)
            })
            .catch(() => {})
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.user-top {
  padding: 50px 30px;
  color: white;
  background: linear-gradient(bottom, #ff9000, #ff4e22) no-repeat;
  .avatar {
    width: 128px;
    height: 128px;
    margin-right: 20px;
    &-img {
      border-radius: 50%;
    }
  }
  .user-info {
    flex: 1;
    &-name {
      margin-bottom: 12px;
    }
    &-tag {
      display: inline-block;
      padding: 4px 10px;
      font-size: 20px;
      border: 1px solid white;
      border-radius: 20px;
    }
  }
}
.logout-btn {
  width: 300px;
  margin: 60px auto 40px;
  background-color: #f4f4f4;
  color: #999;
}
</style>
