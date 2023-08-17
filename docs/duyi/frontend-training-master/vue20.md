# v-on 高级用法

## 用法
先看官方文档描述

+ 缩写：@
+ 预期：Function | Inline Statement | Object
+ 参数：event
+ 修饰符：

  +  .stop - 调用 event.stopPropagation()。
  +  .prevent - 调用 event.preventDefault()。
  +  .capture - 添加事件侦听器时使用 capture 模式。
  +  .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
  +  .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
  +  .native - 监听组件根元素的原生事件。
  +  .once - 只触发一次回调。
  +  .left - (2.2.0) 只当点击鼠标左键时触发。
  +  .right - (2.2.0) 只当点击鼠标右键时触发。
  +  .middle - (2.2.0) 只当点击鼠标中键时触发。
  +  .passive - (2.3.0) 以 { passive: true } 模式添加侦听器

+ 用法：

绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。

用在普通元素上时，只能监听**原生 DOM 事件**。用在自定义元素组件上时，也可以监听子组件触发的**自定义事件**。

在监听原生 DOM 事件时，方法以事件为唯一的参数。如果使用内联语句，语句可以访问一个 `$event` property：`v-on:click="handle('ok', $event)"`。

从 `2.4.0 `开始，`v-on` 同样支持不带参数绑定一个事件/监听器键值对的对象。注意当使用对象语法时，是不支持任何修饰器的。

- **示例**：

  ```vue
  <!-- 方法处理器 -->
  <button v-on:click="doThis"></button>
  
  <!-- 动态事件 (2.6.0+) -->
  <button v-on:[event]="doThis"></button>
  
  <!-- 内联语句 -->
  <button v-on:click="doThat('hello', $event)"></button>
  
  <!-- 缩写 -->
  <button @click="doThis"></button>
  
  <!-- 动态事件缩写 (2.6.0+) -->
  <button @[event]="doThis"></button>
  
  <!-- 停止冒泡 -->
  <button @click.stop="doThis"></button>
  
  <!-- 阻止默认行为 -->
  <button @click.prevent="doThis"></button>
  
  <!-- 阻止默认行为，没有表达式 -->
  <form @submit.prevent></form>
  
  <!--  串联修饰符 -->
  <button @click.stop.prevent="doThis"></button>
  
  <!-- 键修饰符，键别名 -->
  <input @keyup.enter="onEnter">
  
  <!-- 键修饰符，键代码 -->
  <input @keyup.13="onEnter">
  
  <!-- 点击回调只会触发一次 -->
  <button v-on:click.once="doThis"></button>
  
  <!-- 对象语法 (2.4.0+) -->
  <button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
  ```

  在子组件上监听自定义事件 (当子组件触发“my-event”时将调用事件处理器)：

  ```vue
  <my-component @my-event="handleThis"></my-component>
  
  <!-- 内联语句 -->
  <my-component @my-event="handleThis(123, $event)"></my-component>
  
  <!-- 组件中的原生事件 -->
  <my-component @click.native="onClick"></my-component>
  ```

  ### 多个组件嵌套中使用
  当前场景是多个组件嵌套，如test>C>D>E,E 组件中抛事件，想知道父组件事件是否处理完成，使用了回调模式，想D处理不了，那么只能往上抛，代码相同，这时可用使用`v-on="{event:fn}"`表示当前组件的所有事件，而 `$listeners` 正是表示组件的事件，所以有以下代码
  ```vue
  <-- E.vue 组件 -->
   <template>
    <form @submit.prevent="handleSubmit">
      {{isLoading}}
      <button :disabled="isLoading">
        {{isLoading?"提交中":"提交"}}
      </button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: false,
      };
    },
    methods: {
      handleSubmit() {
        this.isLoading = true;
        this.$emit("submit", "aaa", () => {
          console.log("callback excuted");
          this.isLoading = false;
        });
      },
    },
  };
  </script>
      
  <-- D.vue -->
  <template>
    <E v-on="$listeners" />
  </template>
  
  <script>
  import E from "./E.vue";
  export default {
    components: {
      E,
    },
  };
  </script>
      
  <-- C.vue -->
  <template>
    <C v-on="$listeners" />
  </template>
  
  <script>
  import C from "./C.vue";
  export default {
    components: {
      C,
    },
  };
  </script>
  
  <-- test.vue -->    
  <template>
    <div>
      <C @submit="handleSubmit" />
    </div>
  </template>
  
  <script>
  import C from "./C";
  export default {
    components: {
      C,
    },
    methods: {
      handleSubmit(data, callback) {
        console.log(data);
        callback();
      },
    },
  };
  </script>    
  ```


## 文章详情页组成结构

![image-20230628153726713](~@alias/blogDetail.png)

