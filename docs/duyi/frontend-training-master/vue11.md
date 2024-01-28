# 组件生命周期

<img src="https://qwq9527.gitee.io/resource/imgs/20200908051939.png" alt="image-20200908051939745" style="zoom:50%;" />

<img src="https://qwq9527.gitee.io/resource/imgs/20201206132819.png" alt="image-20201206132819263" style="zoom:50%;" />

## 常见应用

> 不要死记硬背，要根据具体情况灵活处理

### 加载远程数据

```js
export default {
  data(){
    return {
      news: []
    }
  },
  async created(){
    this.news = await getNews();
  }
}
```

### 直接操作DOM

```js
export default {
  data(){
    return {
      containerWidth:0,
    	containerHeight:0
    }
  },
  mounted(){
    this.containerWidth = this.$refs.container.clientWidth;
    this.containerHeight = this.$refs.container.containerHeight;
  }
}
```

### 启动和清除计时器

```js
export default {
  data(){
    return {
      timer: null
    }
  },
  created(){
    this.timer = setInterval(()=>{
     ... 
    }, 1000)
  },
  destroyed(){
    clearInterval(this.timer);               
  }
}
```

## updated 触发注意点

由于数据更改**导致的虚拟 DOM 重新渲染**和打补丁，在这之后会调用该钩子。



+ 不同的位置可能不起作用不起作用（在插槽中）

  ```vue
  <template>
    <div class="app-container">
      <Layout>
        <template #left>
          <div class="aside">
            <SiteAside />
            {{q}}
          </div>
        </template>
        <template #default>
          <RouterView />
        </template>
        {{a}}
      </Layout>
    </div>
  </template>
  
  <script>
  import Layout from "@/components/Layout";
  import SiteAside from "@/components/SiteAside";
  
  export default {
    name: "App",
    components: {
      Layout,
      SiteAside,
    },
    data() {
      return { q: 1, a: 1 };
    },
    methods: {},
    mounted() {
      let i = 0;
      setInterval(() => {
        this.q = i++;
        //   this.a = i++;
      }, 1000);
    },
    updated() {
      console.log(9999999);
    },
  };
  </script>
  ```

  + 属性 a 能触发，失效，q 不能触发
  + 属性 a 不在 ` <template #default>` 里面能触发

  > 上述想表达上的意思：在具名插槽中 数据更新不触发 `updated`。想要触发，默认的具名插槽，不同 `<template #default>` 包裹

+ 只改变属性值但不更新vnode是不触发的
