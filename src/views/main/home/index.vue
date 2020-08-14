<template>
  <div class="home">
    <NavBar
      :default-left="false"
      :left-arrow="false"
      left-text="LOGO"
      right-text
      title
    ></NavBar>
    <van-pull-refresh
      @refresh="onRefresh"
      success-text="刷新成功"
      v-model="refreshing"
    >
      <div class="home-top">
        <van-swipe
          :autoplay="2000"
          @change="onChangeSwipe"
          class="home-top-swipe"
          height="150"
        >
          <van-swipe-item
            :key="index"
            v-for="(image, index) in swipeImages"
          >
            <img v-lazy="image" />
          </van-swipe-item>
          <template #indicator>
            <div class="custom-indicators">
              <i
                :class="['custom-indicator', index === currentSwipe ? 'custom-indicator-active' : '']"
                :key="index"
                v-for="(image, index) in swipeImages"
              ></i>
            </div>
          </template>
        </van-swipe>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { httpRequest } from '@/lib/httpHelper'
import { PullRefresh, Swipe, SwipeItem } from 'vant'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    VanPullRefresh: PullRefresh,
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem,
    NavBar,
  },
  data() {
    return {
      refreshing: false,
      currentSwipe: 0,
      swipeImages: [
        'https://oss.suning.com/adpp/creative_kit/material/picture/20200805-46d495a2efbd49eca102fc9f82d7493ad19add64db2f47a4.jpg?format=_is_1242w_610h',
        'https://image2.suning.cn/uimg/cms/img/159663394535266820.jpg?format=_is_1242w_610h',
        'https://image3.suning.cn/uimg/cms/img/159654336317786686.jpg?format=_is_1242w_610h',
      ],
    }
  },
  computed: {},
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
    onChangeSwipe(index) {
      this.currentSwipe = index
    },
  },
}
</script>

<style lang="scss" scoped>
.home-top {
  padding: 20px 30px 50px;
  color: white;
  background: linear-gradient(bottom, #f4f4f4, #ff4e22) no-repeat;
  &-swipe {
    height: 260px;
    border-radius: 20px;
    img {
      width: 100%;
      height: 260px;
    }
  }
  .custom-indicators {
    position: absolute;
    bottom: 24px;
    left: 50%;
    display: flex;
    transform: translateX(-50%);
    .custom-indicator {
      width: 12px;
      height: 12px;
      background-color: #333333;
      border-radius: 12px;
      opacity: 0.3;
      transition: opacity 0.2s;
      &:not(:last-child) {
        margin-right: 6px;
      }
      &-active {
        width: 20px;
        opacity: 1;
        background-color: #ffffff;
      }
    }
  }
}
</style>
