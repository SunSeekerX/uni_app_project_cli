<template>
  <c-page background-color="#f6f6f6" box-class="wd-p-25r">
    <view
      v-for="item of menuList"
      :key="item.name"
      class="wd-flex wd-flex-row wd-justify-between wd-items-center wd-rounded-6 wd-mb-12 wd-p-12"
      :style="{
        'background-image': item.backgroundImage,
      }"
      @tap="onRoute(item.url)"
    >
      <view class="wd-flex wd-flex-col wd-flex-1">
        <view class="item wd-flex-row wd-justify-between wd-items-center wd-leading-34">
          <text class="wd-text-fff wd-text-16 wd-font-bold">{{ item.name }}</text>
        </view>

        <!-- 描述 -->
        <view class="description wd-mt-6">
          <text class="description-text">{{ item.description }}</text>
        </view>
      </view>

      <c-icon color="#ffffff" name="icon-gengduo" size="16" />
    </view>
  </c-page>
</template>

<script>
import utools from '@root/packages/limm_utools'

export default {
  name: 'UtoolsPageIndex',
  data() {
    return {
      // 菜单列表
      /*
        渐变色：https://webkul.github.io/coolhue/
        */
      menuList: [
        {
          name: 'uni-app',
          description: 'uni-app 相关',
          url: '/apps/utools/pages/uni-app/uni-app',
          backgroundImage: 'linear-gradient( to left, #70F570, #49C628)',
        },
        {
          name: 'encode',
          description: '编码解码相关',
          url: '/apps/utools/pages/encode/encode',
          backgroundImage: 'linear-gradient( to left, #F05F57, #360940)',
        },
        {
          name: 'encrypt',
          description: '加密解密相关',
          url: '/apps/utools/pages/encrypt/encrypt',
          backgroundImage: 'linear-gradient( to left, #FFAA85, #B3315F)',
        },
        {
          name: 'validate',
          description: '正则验证相关',
          url: '/apps/utools/pages/validate/validate',
          backgroundImage: 'linear-gradient( to left, #97ABFF, #123597)',
        },
        // {
        //   name: 'log',
        //   description: '日志工具',
        //   url: '/apps/utools/pages/log/log',
        //   backgroundImage: 'linear-gradient( to left, #FFF6B7, #F6416C)',
        // },
        {
          name: 'random',
          description: '随机工具',
          url: '/apps/utools/pages/random/random',
          backgroundImage: 'linear-gradient( to left, #3B2667, #BC78EC)',
        },
      ],
    }
  },
  methods: {
    onRoute(url) {
      utools.route({
        url,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.description-text {
  color: #fff;
  font-size: 12px;
}
</style>
