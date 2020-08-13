const webpack = require('webpack')

const envConfig = {
  develop: 'http://dev_XXXXXX',
}
// const target = envConfig[env]

module.exports = {
  publicPath: './',
  // outputDir: `dist`,
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  // configureWebpack: webpackConfig => {
  //   Object.assign(webpackConfig, {
  //     externals: {
  //       vue: 'Vue',
  //       'vue-router': 'VueRouter',
  //       vuex: 'Vuex',
  //       vant: 'Vant',
  //       axios: 'axios',
  //     },
  //   })
  // },
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('style-vw-loader')
      .loader('style-vw-loader')
      .tap(options => {
        return {
          ...options,
          viewportWidth: 750,
          unitPrecision: 3,
        }
      })
  },

  configureWebpack: webpackConfig => {
    webpackConfig.plugins.push(
      new webpack.DefinePlugin({
        currentEnv: JSON.stringify(process.env.CURREN_ENV)
        // deviceType: JSON.stringify(deviceType)
      })
    )
  },
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: false,
    },
    // 查阅 https://cli.vuejs.org/zh/config/#devserver-proxy
    proxy: {
      '/xs': {
        target: envConfig.develop,
        changeOrigin: true,
      },
      '/tui': {
        target: envConfig.develop,
        changeOrigin: true,
      },
    },
    disableHostCheck: true,
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: ['./src/theme'],
      },
    },
  },
}
