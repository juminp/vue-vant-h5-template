<template>
  <div class="login">
    <NavBar
      :default-left="false"
      :left-arrow="false"
      left-text
      right-text
      title="登录"
    ></NavBar>
    <div class="login-con">
      <div class="welcome">Welcome</div>
      <div class="login-form">
        <div class="login-input">
          <van-field
            class="login-input-tel"
            clearable
            placeholder="手机号"
            type="tel"
            v-model="userInfo.phone"
          />
        </div>
        <div class="login-input">
          <van-field
            @keyup.enter.native="onSubmit"
            clearable
            placeholder="验证码"
            v-model="userInfo.code"
          >
            <template #button>
              <van-button
                color="#ff4e22"
                plain
                round
                size="small"
              >获取验证码</van-button>
            </template>
          </van-field>
        </div>
        <div>
          <van-button
            @click="onSubmit"
            block
            class="login-btn"
            native-type="submit"
            round
          >登录</van-button>
        </div>
      </div>
      <van-divider :style="dividerStyle">其他方式登录</van-divider>
      <div class="f-flex-box justify-center f-text-center">
        <div class="logo-box">
          <img
            alt
            class="logo-img"
            src="../../assets/images/wechat.png"
          />
          <p class="logo-txt">微信登录</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { httpRequest } from '@/lib/httpHelper'
import { Button, Divider, Field } from 'vant'
// @ is an alias to /src
export default {
  name: 'Login',
  components: {
    VanField: Field,
    VanButton: Button,
    VanDivider: Divider,
    NavBar,
  },
  data() {
    return {
      dividerStyle: {
        color: '#999999',
        borderColor: '#999999',
        padding: '0 16px',
      },
      userInfo: {
        phone: '',
        code: '',
      },
      redirect: undefined,
    }
  },
  computed: {},
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true,
    },
  },
  created() {},
  methods: {
    onSubmit() {
      console.log('submit', this.userInfo)
      const { phone, code } = this.userInfo
      if (phone && code) {
        this.$store
          .dispatch('user/login', this.userInfo)
          .then(() => {
            this.$router.push({ path: this.redirect || '/' })
          })
          .catch(() => {})
      }
    },
  },
}
</script>

<style lang="scss">
.login-con .login-input .login-input-tel .van-field__value .van-field__body {
  margin: 6px auto;
}
</style>
<style lang="scss" scoped>
.login-con {
  width: 80%;
  margin: 220px auto 0;
  text-align: center;
  .welcome {
    color: #ff4e22;
    font-size: 80px;
    margin-bottom: 100px;
  }
  .login-input {
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #ebedf0;
    border-radius: 999px;
    background-color: white;
    overflow: hidden;
  }
  .login-btn {
    margin: 60px auto;
    color: white;
    background: linear-gradient(left, #ff9000, #ff4e22) no-repeat;
  }
  .logo-box {
    text-align: center;
    .logo-img {
      width: 104px;
    }
    .logo-txt {
      margin-top: 20px;
      font-size: 24px;
      color: #333333;
    }
  }
}
</style>
