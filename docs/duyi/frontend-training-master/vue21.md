# 事件总线

##  手动实现

```js
const $listeners = {};
export default {
  // 注册事件
  $on(eventName, handler) {
    if (!$listeners[eventName]) {
      $listeners[eventName] = new Set();
    }
    $listeners[eventName].add(handler);
  },
  // 删除事件
  $off(eventName, handler) {
    if (!$listeners[eventName]) {
      return;
    }
    $listeners[eventName].delete(handler);
  },
  // 触发事件
  $emit(eventName, ...args) {
    for (const handler of $listeners[eventName]) {
      handler(...args);
    }
  }
}
```

## 使用 vue 实例

vue 实例实现上了上述方式，因此直接用一个实例即可。

````js
import Vue from "vue";
// export default new Vue({});

/**
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的 dom 元素，如果是 undefined 表示 dom 不存在
 * 
 * 事件名：setMainScroll
 * 含义：当需要设置主区域滚动条位置时触发
 * 参数：
 * - 滚动高度
 */
const bus = new Vue({});
Vue.prototype.$bus = bus;
export default bus;
````

