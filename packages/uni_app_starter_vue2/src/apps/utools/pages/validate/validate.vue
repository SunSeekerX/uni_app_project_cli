<template>
  <c-page background-color="#f6f6f6" box-class="wd-p-25r">
    <AppOutput :output="consoleText" />

    <AppOperationContent name="正则验证">
      <!-- isMobilePhone -->
      <AppOperationInput v-model="isMobilePhoneText" operation-name="请输入需要校验手机号码的内容" />
      <AppOperationButton button-text="校验手机号码: isMobilePhone(val: string): boolean" @onTap="isMobilePhone" />

      <!-- isIDCard -->
      <AppOperationInput v-model="isIDCardText" operation-name="请输入需要校验身份证号码的内容" />
      <AppOperationButton button-text="校验身份证号码: isIDCard(val: string): boolean" @onTap="isIDCard" />

      <!-- isEmail -->
      <AppOperationInput v-model="isEmailText" operation-name="请输入需要验证电子邮箱的内容" />
      <AppOperationButton button-text="验证电子邮箱: isEmail(val: string): boolean" @onTap="isEmail" />

      <!-- isUrl -->
      <AppOperationInput v-model="isUrlText" operation-name="请输入需要验证 url 地址的内容" />
      <AppOperationButton button-text="验证 url 地址: isUrl(val: string): boolean" @onTap="isUrl" />
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
  name: 'UtoolsValidateUtil',

  components: { AppOutput, AppOperationContent, AppOperationInput, AppOperationButton },

  data() {
    return {
      consoleText: '输出区(可点击复制)',

      isMobilePhoneText: '13800000000',
      isIDCardText: '110101200112128361',
      isEmailText: 'example@gmail.com',
      isUrlText: 'https://www.google.com/',
    }
  },

  methods: {
    isMobilePhone() {
      const { isMobilePhoneText } = this
      if (isMobilePhoneText) {
        this.consoleText = String(utools.ValidateUtil.isMobilePhone(isMobilePhoneText))
        utools.toast(`成功！${utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        utools.toast('请输入内容！')
      }
    },

    isIDCard() {
      const { isIDCardText } = this
      if (isIDCardText) {
        this.consoleText = String(utools.ValidateUtil.isIDCard(isIDCardText))
        utools.toast(`成功！${utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        utools.toast('请输入内容！')
      }
    },

    isEmail() {
      const { isEmailText } = this
      if (isEmailText) {
        this.consoleText = String(utools.ValidateUtil.isEmail(isEmailText))
        utools.toast(`成功！${utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        utools.toast('请输入内容！')
      }
    },

    isUrl() {
      const { isUrlText } = this
      if (isUrlText) {
        this.consoleText = String(utools.ValidateUtil.isUrl(isUrlText))
        utools.toast(`成功！${utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        utools.toast('请输入内容！')
      }
    },
  },
}
</script>
