# 修饰符&$listeners&v-model

## 事件修饰符

**针对`dom`节点的原生事件**，`vue`支持多种修饰符以简化代码

详见：[事件修饰符、按键修饰符、系统修饰符](https://v2.cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6)

## $listeners

`$listeners`是`vue`的一个实例属性，它用于获取父组件传过来的所有事件函数

```html
<!-- 父组件 -->
<Child @event1="handleEvent1" @event2="handleEvent2" />
```



```js
// 子组件
this.$listeners // { event1: handleEvent1, event2: handleEvent2 }
```

> `$emit`和`$listeners`通信的异同
>
> 相同点：均可实现子组件向父组件传递消息
>
> 差异点：
>
> - `$emit`更加符合单向数据流，子组件仅发出通知，由父组件监听做出改变；而`$listeners`则是在子组件中直接使用了父组件的方法。
> - 调试工具可以监听到子组件`$emit`的事件，但无法监听到`$listeners`中的方法调用。（想想为什么）
> - 由于`$listeners`中可以获得传递过来的方法，因此调用方法可以得到其返回值。但`$emit`仅仅是向父组件发出通知，无法知晓父组件处理的结果

> 对于上述中的第三点，可以在`$emit`中传递回调函数来解决
>
> 父组件：
>
> ```vue
> <template>
> 	<Child @click="handleClick" />
> </template>
> 
> <script>
>   import Child from "./Child"
> 	export default {
>     components:{
>       Child
>     },
>     methods:{
>       handleClick(data, callback){
>         console.log(data); // 得到子组件事件中的数据
>         setTimeout(()=>{
>           callback(1); // 一段时间后，调用子组件传递的回调函数
>         }, 3000)
>       }
>     }
>   }
> </script>
> ```
>
> 子组件：
>
> ```vue
> <template>
> 	<button @click="handleClick">
>     click
>   </button>
> </template>
> 
> <script>
> 	export default {
>     methods:{
>       handleClick(){
>         this.$emit("click", 123, (data)=>{
>           console.log(data); // data为父组件处理完成后得到的数据
>         })
>       }
>     }
>   }
> </script>
> ```

> 补充第三种知晓父组件处理结果方式：props 传入函数
>
> 父组件：
>
> ```vue
> <template>
>   <LoadingButton :click="handleClick" />
> </template>
> 
> <script>
> import LoadingButton from "./LoadingButton";
> export default {
>   components: {
>     LoadingButton,
>   },
>   methods: {
>     async handleClick(count) {
>       console.log("父组件", count);
>       return new Promise((resolve) => {
>         setTimeout(() => {
>           resolve("有一个未知错误");
>         }, 3000);
>       });
>     },
>   },
> };
> </script>
> ```
>
> 子组件：
>
> ```vue
> <template>
>   <div>
>     <button @click="handleClick" :disabled="isLoading">
>       {{ isLoading ? "loading" : "submit" }}
>     </button>
>     <div class="err">{{ error }}</div>
>   </div>
> </template>
> 
> <script>
> export default {
>   props: {
>     click: Function,
>   },
>   data() {
>     return {
>       count: 0, // 点击的次数
>       isLoading: false,
>       error: "",
>     };
>   },
>   methods: {
>     async handleClick() {
>       /*
>        * 点击次数 +1
>        * 错误消息清空
>        * 为了防止重复点击，需要先将 isLoading 设置为 true
>        * 通知父组件：「我被点击了」，并传递当前的点击次数
>        * 等待父组件处理（有可能是异步的），将父组件处理的结果设置到 error
>        */
>       this.count++;
>       this.error = "";
>       this.isLoading = true;
>       if (this.click) {
>         const err = await this.click(this.count);
>         this.isLoading = false;
>         this.error = err;
>       }
>     },
>   },
> };
> </script>
> ```
>
> 

## v-model

`v-model`指令实质是一个语法糖，它是`value`属性和`input`事件的*结合体*

```html
<input :value="data" @input="data=$event.target.value" />
<!-- 等同于 -->
<input v-model="data" />
```

详见：[表单输入绑定](https://v2.cn.vuejs.org/v2/guide/forms.html)
