<template>
  <div id="app">
    <keep-alive>
        <router-view v-if="$route.meta && $route.meta.keepAlive">
            <!-- 这里是会被缓存的视图组件，比如 Home！ -->
        </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta || !$route.meta.keepAlive">
        <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
    </router-view>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'App',
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {},
}
</script>

<style lang="scss">
  html, body, #app {
    background-color: #f4f4f4;
  }
  .van-pull-refresh .van-pull-refresh__track {
    min-height: 80vh;
  }
  img {
    content: normal !important;
  }
  .color-main {
    color: #ff4e22;
    i {
      color: #ff4e22;
    }
  }
  .bgc-main {
    background-color: #ff4e22;
  }
</style>
