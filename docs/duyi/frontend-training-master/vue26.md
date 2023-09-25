# 打包优化
## 分析打包结果

由于`vue-cli`是利用`webpack`进行打包，我们仅需加入一个`webpack`插件`webpack-bundle-analyzer`即可分析打包结果

为了避免在开发环境中启动`webpack-bundle-analyzer`，我们仅需使用以下代码即可

```js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
// vue.config.js
module.exports = {
  // 通过 configureWebpack 选项，可对 webpack 进行额外的配置
  // 该配置最终会和 vue-cli 的默认配置进行合并（webpack-merge）
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  },
};
```

> 项目使用了vue、vuex、 vueRouter 里面部分东西，按理说可以使用 tree shaking（树摇）优化，但是vue2 不支持 tree shaking ，因为都是默认导入，一导入全部都有了。vuex 可以通过具名导出优化，tree shaking 特别依赖具名导出。

```js
// 优化前
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
export default new Vuex.Store({
	state:{}
});
// 优化后
import {Store,install} from "vuex";
import Vue from "vue";
install(Vue);
export default new Store({
	state:{}
});
// 这种优化的东西有限 打包后才12.32kb 优化后才 10.46kb 减少的不大
```



## 优化公共库打包体积

### 使用CDN

CDN全称为Content Delivery Network，称之为内容分发网络

它的基本原理是：架设多台服务器，这些服务器定期从源站拿取资源保存本地，到让不同地域的用户能够通过访问最近的服务器获得资源

![img](http://mdrs.yuanjin.tech/img/20210203133956.png)

我们可以把项目中的所有静态资源都放到CDN上（收费），也可以利用现成免费的CDN获取公共库的资源

<img src="http://mdrs.yuanjin.tech/img/20210203140030.png" alt="image-20210203140029967" style="zoom:50%;" />

首先，我们需要告诉`webpack`不要对公共库进行打包

```js
// vue.config.js
module.exports = {
  configureWebpack: {
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
    }
  },
};
```

然后，在页面中手动加入`cdn`链接，这里使用[bootcn](https://www.bootcdn.cn/)

```html
<body>
  <div id="app"></div>
    <!-- 模板语法，html-webpack-plugin 识别，判断是否是生产环境 htmlWebpackPlugin.options.NODE_ENV 或者自定义变量-->
  <% if(NODE_ENV === "production"){ %>
  <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js"></script>
  <script src="https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.min.js"></script>
  <script src="https://cdn.bootcdn.net/ajax/libs/vue-router/3.4.7/vue-router.min.js"></script>
  <% } %>
  <!-- built files will be auto injected -->
</body>
```

对于`vuex`和`vue-router`，使用这种传统的方式引入的话会自动成为`Vue`的插件，因此需要去掉`Vue.use(xxx)`

我们可以使用下面的代码来进行兼容

```js
// store.js
import Vue from "vue";
import Vuex from "vuex";

if(!window.Vuex){
  // 没有使用传统的方式引入Vuex
  Vue.use(Vuex);
}

// router.js
import VueRouter from "vue-router";
import Vue from "vue";

if(!window.VueRouter){
  // 没有使用传统的方式引入VueRouter
  Vue.use(VueRouter);
}
```



### 启用现代模式

为了兼容各种浏览器，`vue-cli`在内部使用了`@babel/present-env`对代码进行降级，你可以通过`.browserlistrc`配置来设置需要兼容的目标浏览器

这是一种比较*偷懒*的办法，因为对于那些使用现代浏览器的用户，它们也*被迫*使用了降级之后的代码，而降低的代码中包含了大量的`polyfill`，从而提升了包的体积

因此，我们希望提供两种打包结果：

1. 降级后的包（大），提供给旧浏览器用户使用
2. 未降级的包（小），提供给现代浏览器用户使用

除了应用`webpack`进行多次打包外，还可以利用`vue-cli`给我们提供的命令：

```shell
vue-cli-service build --modern
```

> + 该命令进行了两次打包，BundleAnalyzerPlugin 只记录了第一次
>
> + 打包后生成的html 文件中有`<link href="/js/chunk-vendors.69445775.js" rel="modulepreload" as="script" />`代码，rel="modulepreload" 表示现代浏览器才有的功能，预下载，旧版本浏览器不识别
>
> + ```html
>   <!-- 新浏览器能识别 modeule,并且当做es module来处理，旧版本会忽略-->
>   <script type="module" src="/js/chunk-vendors.69445775.js"></script>
>    <script type="module" src="/js/app.97bfca16.js"></script>
>   <!-- 新浏览器能识别 nomodeule,会忽略，旧版本不能识别，当做普通脚本来处理-->
>    <script src="/js/chunk-vendors-legacy.69445775.js" nomodule></script>
>    <script src="/js/app-legacy.97bfca16.js" nomodule></script>
>   ```

```shell
`preload` 比  `prefetch` 优先级要高，表示当前页面就要使用，`prefetch` 表示当前页面用不到，将来页面可能会用到，有空就先下载放着
```



## 优化项目包体积

这里的项目包是指`src`目录中的打包结果

### 页面分包

默认情况下，`vue-cli`会利用`webpack`将`src`目录中的所有代码打包成一个`bundle`

这样就导致访问一个页面时，需要加载所有页面的`js`代码

我们可以利用`webpack`对**`动态import`**的支持，从而达到把不同页面的代码打包到不同文件中

```js
// routes 路由懒加载会使得页面分包
export default [
  {
    name: "Home",
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home"),
  },
  {
    name: "About",
    path: "/about",
    component: () => import(/* webpackChunkName: "about" */"@/views/About"),
  }
];
```

## 优化首屏响应

> 首页白屏受很多因素的影响

`vue`页面需要通过`js`构建，因此在`js`下载到本地之前，页面上什么也没有

一个非常简单有效的办法，即在页面中先渲染一个小的加载中效果，等到`js`下载到本地并运行后，即会自动替换

```html
<div id="app">
  <img src="loading.gif" />
</div>
```

