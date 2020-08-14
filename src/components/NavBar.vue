<template>
  <section class="my-nav-bar">
    <van-nav-bar
      :fixed="fixed"
      :left-arrow="leftArrow"
      :left-text="leftText"
      :title="title"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      placeholder
    >
      <template
        #right
        v-if="rightText"
      >
        <span>{{ rightText }}</span>
      </template>
    </van-nav-bar>
  </section>
</template>

<script>
import { NavBar } from 'vant'
export default {
  name: 'NavBar',
  components: {
    VanNavBar: NavBar,
  },
  props: {
    title: {
      type: String,
      default: 'vant',
    },
    leftArrow: {
      type: Boolean,
      default: true,
    },
    leftText: {
      type: String,
      default: '返回',
    },
    defaultLeft: {
      type: Boolean,
      default: true,
    },
    rightText: {
      type: String,
      default: '',
    },
    fixed: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    onClickLeft() {
      console.log('返回')
      if (this.defaultLeft) {
        console.log('defaultLeft')
        this.routerBack()
      } else if (this.leftText) {
        this.$emit('click-left-btn')
      }
    },
    onClickRight() {
      if (this.rightText) {
        this.$emit('click-right-btn')
      }
    },
  },
}
</script>

<style lang="scss">
.my-nav-bar {
  .van-hairline--bottom:after {
    border-bottom-width: 0;
  }
  .van-nav-bar {
    background-color: #ff4e22;
    color: white;
    .van-nav-bar__title,
    .van-nav-bar__text,
    .van-icon {
      color: white;
    }
  }
}
</style>