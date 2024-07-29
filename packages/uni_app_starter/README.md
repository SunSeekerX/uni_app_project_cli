# **[uni-app-starter](https://github.com/SunSeekerX/uni-app-starter)**

**一切伟大的行动和思想,都有一个微不足道的开始。**

uni-app 业务解决集成方案。

用来记录使用 uni-app 之中出现的问题、踩过的坑、解决业务的写法、工具函数、通用组件。

[![OSCS Status](https://www.oscs1024.com/platform/badge/SunSeekerX/uni-app-starter.svg?size=large)](https://www.oscs1024.com/project/SunSeekerX/uni-app-starter?ref=badge_large)

## 📌 快速上手

### 开发

**克隆**

```bash
git clone https://github.com/SunSeekerX/uni-app-starter.git
```

**进入项目目录**

```bash
cd uni-app-starter
```

**安装依赖**

```bash
pnpm i
```

**构建 utools**

项目内带了一个 uni-app 开发工具包，需要手动构建。

```shell
cd packages/limm-utools/
# 构建
yarn build
```

**启动**

回到项目根目录，运行

```bash
yarn serve
```

**更新 uni-app 依赖**

```shell
# 更新到最新正式版
npx @dcloudio/uvm
# 更新到最新 alpha 版
npx @dcloudio/uvm alpha
# 更新到正式版指定版本
npx @dcloudio/uvm 3.2.0
# 更新到 alpha 版指定版本
npx @dcloudio/uvm 3.2.0-alpha
```

## 📌 项目亮点

- 代码风格统一：使用 `eslint + stylelint + prettier + lint-stage + husky`集成代码提交格式化检测，避免团队代码风格不一致。
- 业务实现模板：集成 `uni-app` 中常用业务流程处理方案，提供众多优秀实现。
- 无瑕疵：遵循“写代码如写诗”的理念，对每一处的代码进行优化力求结构精简，功能完善。
- 大量多端统一的业务组件：自写大量多端通用的业务组件，减少寻找轮子，造轮子的时间。
- 最新的依赖，有升级就更新，就怕他不出问题。🤭。
- 完美：尽量做到 **no warning, no error.**

## 📌 项目说明

### 多端兼容

- H5
- App
- 微信小程序

项目优先适配 `h5 + app`，有空会适配到微信小程序。

### 规则校验

项目内各种规则校验一定会对天马行空的编码风格有限制，对于个人来说会是个牢笼。

可是对于团队来说，在我看来收益 => 限制，就看你怎么说服团队的其他人接受了。

我也见过有人非常抨击这种规则，他认为自己写的代码根本就不需要这种东西来约束，例如 eslint 、stylelint。这里我不去评价这种想法是对是错。我个人单纯的想法是不懂就得学，当然不是学个别人写代码的风格和方式，除非你很出名，在这个编程圈能有一定的影响力。否则，就好好享受前人栽的树。

### 组件库

目前项目内导入的组件库

1. [uview](https://www.uviewui.com/)

## 📌 问题解决

1. 运行到小程序模拟器出现 `Cannot read property 'mark' of undefined` ?

   > 初步判断是引入 `uView` 导致的，点击小程序开发者工具右上角选择详情>本地设置>取消 es6 转 es5

## 📌 更新日志

❗ 本项目正处于并且长期处于开发中。有任何想、功能、bug 都可以提出来，包括不限于

- 想要的组件
- 想要实现的功能
- Bug
- ...

等等，我会尽力集成进来给个示例。💗💗💗

## 📌 发布信息

### Android

**发布**

应用名：`UAS`

包名：`cn.yoouu.uni.app.starter`

**开发**

应用名：`Uni-app-starter`

包名：`cn.yoouu.uni.app.starter.dev`

```shell
# Just a tips 👻
password: key1
```

### Ios

没有证书。

## 📌 鸣谢

本项目参考或直接复制了以下项目的实现

- [uView](https://github.com/YanxinNet/uView)
- [vue-vben-admin](https://github.com/anncwb/vue-vben-admin)
