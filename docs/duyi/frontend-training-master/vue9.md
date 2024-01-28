# 弹出消息

有时候需要实现一个简单的功能，弄一大堆组件非常麻烦，就想使用一个函数调用下，如弹出消息，这里需要使用一下四个知识点

## 使用css module

需要将样式文件命名为`xxx.module.ooo`

`xxx`为文件名

`ooo`为样式文件后缀名，可以是`css`、`less`



## 得到组件渲染的Dom（难）

```js
  /**
    获取某个组件渲染的Dom根元素
  */
function getComponentRootDom(comp, props){
  const vm = new Vue({
    render: h => h(comp, {props})
  })
  vm.$mount();
  return vm.$el;
}
```



## 扩展vue实例

<img src="https://qwq9527.gitee.io/resource/imgs/20201203172154.jpg" alt="扩展vue实例" style="zoom:33%;" />

## ref

```html
<template>
	<div>
    <p ref="para">some paragraph</p>
    <ChildComp ref="comp" />
    <button @click="handleClick">查看所有引用</button>
  </div>
</template>

<script>
  import ChildComp from "./ChildComp"
	export default {
    components:{
      ChildComp
    },
    methods:{
      handleClick(){
        // 获取持有的所有引用
        console.log(this.$refs);
        /*
        {
        	para: p元素（原生DOM）,
        	comp: ChildComp的组件实例
        }
        */
      }
    }
  }
</script>
```



> 通过`ref`可以直接操作`dom`元素，甚至可能直接改动子组件，这些都不符合`vue`的设计理念。
>
> 除非迫不得已，否则不要使用`ref`



## 自己补充

### export 与 import 的复合写法

```js
export { default as showMessage } from "./showMessage";

export { default as getComponentRootDom } from "./getComponentRootDom";
```

上面代码中，`export`和`import`语句可以结合在一起，写成一行。但需要注意的是，写成一行以后，`showMessage`和`getComponentRootDom`实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用`showMessage`和`getComponentRootDom`。

具体见 [Module 的语法 | 目录 (gitee.io)](http://qwq9527.gitee.io/quweiqian/es6/module.html#export-与-import-的复合写法)

### translate 同时存在两个

```css
transform: translate(-50%, -50%) translateY(20px);
```

这样写保证了居中还能往上移动 20px 

### transitionend事件为啥执行多次

因为 css 写法没有指定具体那个属性需要过度，所以能过度的属性都执行了

`transition: 0.4s;`

想要执行一次只需要 添加第三个参数 `{once:true}`
