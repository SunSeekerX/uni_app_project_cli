<template>
  <c-page background-color="#f6f6f6" box-class="wd-p-25r">
    <AppOutput :output="consoleObj.res" />

    <AppOperationContent name="URL 编码">
      <!-- urlEncode -->
      <AppOperationInput v-model="encodeText" operation-name="请输入需要 URL 编码的内容" />
      <AppOperationButton button-text="URL 编码: urlEncode(val: string)" @onTap="onEncode" />

      <!-- urlDecode -->
      <AppOperationInput v-model="decodeText" operation-name="请输入需要 URL 解码的内容" />
      <template>
        <text class="wd-text-12">解码为 ios 可识别的 url 链接</text>
        <radio-group class="wd-text-12" @change="onRadioChange">
          <radio value="true" :checked="isUrl">true</radio>
          <radio class="wd-ml-12" value="false" :checked="!isUrl">false</radio>
        </radio-group>
      </template>
      <AppOperationButton button-text="URL 解码 - urlDecode(val: string, [url: boolean = true])" @onTap="onDecode" />
    </AppOperationContent>

    <AppOperationContent name="base64 编码">
      <!-- base64Encode2String -->
      <AppOperationInput v-model="encodeTextBase64" operation-name="请输入需要 base64 编码的内容" />
      <AppOperationButton button-text="base64 编码: base64Encode2String(val: string)" @onTap="onEncodeBase64" />

      <!-- base64Decode -->
      <AppOperationInput v-model="decodeTextBase64" operation-name="请输入需要 base64 解码的内容" />
      <AppOperationButton button-text="base64 解码: base64Decode(val: string)" @onTap="onDecodeBase64" />
    </AppOperationContent>
  </c-page>
</template>

<script>
import utools from '@root/packages/limm_utools'
import AppOutput from '../../components/app-output/app-output'
import AppOperationContent from '../../components/app-operation-content/app-operation-content'
import AppOperationInput from '../../components/app-operation-input/app-operation-input'
import AppOperationButton from '../../components/app-operation-button/app-operation-button'

export default {
  name: 'UtoolsEncodeUtil',

  components: { AppOutput, AppOperationContent, AppOperationInput, AppOperationButton },

  data() {
    return {
      encodeText: 'https://doc.yoouu.cn/basic/resource/#📌-开源软件',
      decodeText:
        'https%3A%2F%2Fdoc.yoouu.cn%2Fbasic%2Fresource%2F%23%F0%9F%93%8C-%E5%BC%80%E6%BA%90%E8%BD%AF%E4%BB%B6',
      encodeTextBase64: '富贵不能淫，贫贱不能移，威武不能屈。',
      decodeTextBase64: '5a+M6LS15LiN6IO95rer77yM6LSr6LSx5LiN6IO956e777yM5aiB5q2m5LiN6IO95bGI44CC',

      isUrl: false,

      consoleObj: {
        res: '输出区(可点击复制)',
      },
    }
  },

  methods: {
    onEncode() {
      const { encodeText } = this
      if (encodeText) {
        this.consoleObj = {
          time: new Date().getTime(),
          res: utools.EncodeUtil.urlEncode(encodeText),
        }
        utools.toast(`成功！${utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        utools.toast('请输入需要编码的内容！')
      }
    },

    onDecode() {
      const { decodeText } = this
      if (decodeText) {
        const decodeTextStr = utools.EncodeUtil.urlDecode(decodeText, this.isUrl)
        this.consoleObj = {
          time: new Date().getTime(),
          res: decodeTextStr,
        }
        utools.toast(`成功！${utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        utools.toast('解码的内容为空！')
      }
    },

    onEncodeBase64() {
      const { encodeTextBase64 } = this
      if (encodeTextBase64) {
        const encodeTextStr = utools.EncodeUtil.base64Encode2String(encodeTextBase64)
        this.consoleObj = {
          time: new Date().getTime(),
          res: encodeTextStr,
        }
        utools.toast(`成功！${utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        utools.toast('请输入需要编码的内容！')
      }
    },

    onDecodeBase64() {
      const { decodeTextBase64 } = this
      if (decodeTextBase64) {
        const decodeTextStr = utools.EncodeUtil.base64Decode(decodeTextBase64)
        this.consoleObj = {
          time: new Date().getTime(),
          res: decodeTextStr,
        }
        utools.toast(`成功！${utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        utools.toast('解码的内容为空！')
      }
    },

    onRadioChange(e) {
      if (e.detail.value === 'true') {
        this.isUrl = true
      } else {
        this.isUrl = false
      }
    },
  },
}
</script>
