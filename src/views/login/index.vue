<template>
  <div class="login">
    <NavBar
      title="登录"
      left-text=""
      :left-arrow="false"
      :default-left="false"
      right-text=""></NavBar>
    <div class="login-con">
      <div class="welcome">Welcome</div>
      <div class="login-form">
        <div class="login-input">
          <van-field
            v-model="userInfo.phone"
            type="tel"
            clearable
            placeholder="手机号"
            class="login-input-tel"
          />
        </div>
        <div class="login-input">
          <van-field
            v-model="userInfo.code"
            clearable
            placeholder="验证码"
            @keyup.enter.native="onSubmit"
          >
            <template #button>
              <van-button plain round size="small" color="#ff4e22">获取验证码</van-button>
            </template>
          </van-field>
        </div>
        <div>
          <van-button class="login-btn" round block native-type="submit" @click="onSubmit">登录</van-button>
        </div>
      </div>
      <van-divider :style="{ color: '#999999', borderColor: '#999999', padding: '0 16px' }">其他方式登录</van-divider>
      <div class="f-flex-box justify-center f-text-center">
        <div class="logo-box">
          <img class="logo-img" src="../../assets/images/wechat.png" alt="">
          <p class="logo-txt">微信登录</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { httpRequest } from '@/lib/httpHelper'
import { Field, Button, Divider } from 'vant';
import NavBar from '@/components/NavBar.vue'
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
      userInfo: {
        phone: '',
        code: '',
      },
      redirect: undefined
    };
  },
  computed: {},
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {},
  methods: {
    onSubmit() {
      console.log('submit', this.userInfo);
      let { phone, code } = this.userInfo
      if (phone && code) {
        this.$store.dispatch('user/login', this.userInfo).then(() => {
          this.$router.push({ path: this.redirect || '/' })
        }).catch(() => {
        })
      }
    },
  } 
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
    background: linear-gradient(left, #ff9000 , #ff4e22) no-repeat;
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
