<!--
 * 操作输出
 * @author: SunSeekerX
 * @Date: 2021-09-06 16:05:46
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 17:45:45
-->

<template>
  <!-- 内容输出区域 -->
  <view class="console" @click="onCopy">
    <text class="output">{{ output }}</text>
  </view>
</template>

<script>
import utools from '@root/packages/limm_utools'
export default {
  name: 'AppOutput',
  props: {
    output: {
      type: [String, Boolean, Object, null, undefined],
      required: true,
    },
  },
  methods: {
    onCopy() {
      utools.copy(this.output, { msg: '复制成功' })
    },
  },
}
</script>

<style lang="scss" scoped>
// 内容输出区域
.console {
  position: sticky;
  z-index: 99;
  top: calc(var(--window-top) + 6px);
  max-height: 200px;
  padding: 12rpx;

  // padding: 6px;
  overflow-y: scroll;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: #ddd;
  background: #fff;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  word-break: break-all;

  .output {
    color: #333;
    font-size: 12px;
  }
}
</style>
