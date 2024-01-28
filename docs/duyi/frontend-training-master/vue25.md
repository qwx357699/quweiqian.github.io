# 经典案例
## 用户模块逻辑示意图

路由总体示意图

![image-20210130141625925](https://qwq9527.gitee.io/resource/imgs/20210130144001.png)

鉴权守卫逻辑示意图

![image-20210130144001709](https://qwq9527.gitee.io/resource/imgs/20210130144001.png)

## 参考资料

### vue

[watch配置](https://v2.cn.vuejs.org/v2/api/#watch)

[Vue.prototype.$watch](https://v2.cn.vuejs.org/v2/api/#vm-watch)

### vuex

[mapState](https://vuex.vuejs.org/zh/guide/state.html#mapstate-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0)

[getters](https://vuex.vuejs.org/zh/guide/getters.html)

类似计算属性，可以认为是 **store 的计算属性**。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

```js
// 例如取 todeos 的 done 属性值
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
```

```js
// 访问
store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]
```

**通过方法访问**

```js
getters: {
  // ...
  getTodoById: (state) =>{
    return (id) => {
        return state.todos.find(todo => todo.id === id)
      }  
  } 
}
```

```js
// 使用
store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
```

[mapGetters](https://vuex.vuejs.org/zh/guide/getters.html#mapgetters-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0)

[需遵守 vue 的响应规则](https://v3.vuex.vuejs.org/zh/guide/mutations.html#mutation-需遵守-vue-的响应规则)

1. 最好提前在你的 store 中初始化好所有所需属性。
2. 当需要在对象上添加新属性时，你应该

- 使用 `Vue.set(obj, 'newProp', 123)`, 或者

- 以新对象替换老对象。例如，利用[对象展开运算符 (opens new window)](https://github.com/tc39/proposal-object-rest-spread)我们可以这样写：

  ```js
  state.obj = { ...state.obj, newProp: 123 }
  ```

[modules](https://vuex.vuejs.org/zh/guide/modules.html)

如果希望你的模块具有更高的封装度和复用性，你可以通过添加 `namespaced: true` 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会**自动根据模块注册的路径调整命名**。

使用命名空间后，this.$sotre 中如图

| 配置                        | 访问方式                                 |
| --------------------------- | ---------------------------------------- |
| `state:{}`                  | `this.$store.xxmodule.xxx`(模块)         |
| `getters:{"isAdmin":(...)}` | `this.$store.getters['account/isAdmin']` |
| `actions:{}`                | ` this.$store.dispatch('account/login')` |
| `mutations:{}`              | `this.$store.commit('account/login')`    |

### 在带命名空间的模块内访问全局内容

如果你希望使用全局 state 和 getter，`rootState` 和 `rootGetters` 会作为第三和第四参数传入 getter，也会通过 `context` 对象的属性传入 action。

- 通过参数访问
- 通过加入参数`{root:true}` 操控全局的 action /mutation

| 访问全局内容                              | 访问方式                                                     |
| ----------------------------------------- | ------------------------------------------------------------ |
| 全局 `state`和 `getter`                   | `someGetter (state, getters, rootState, rootGetters) {}`     |
| 全局命名空间内分发 action 或提交 mutation | `commit('someMutation', null, { root: true }) ` `dispatch('someOtherAction', null, { root: true })` |

参数表：

| 配置        | 方法参数                                                     |
| ----------- | ------------------------------------------------------------ |
| `state`     | 无                                                           |
| `getters`   | `getters:{someGetter (state, getters, rootState, rootGetters) {}}` |
| `mutations` | `mutations:{someM(state,payload){}}`                         |
| `actions`   | `actions:{someAction(ctx,payload){}}`                        |



### 在带命名空间的模块注册全局 action（mutaion不可注册）

加上 `root:true` 后，便在全局加上了命名空间

```js
actions: {
        someAction: {
          root: true,
          handler (namespacedContext, payload) { ... } // -> 'someAction'
        }
      }
```

## 辅助函数的写法

### `mapState` 辅助函数

- 参数为对象时

  ```js
   computed: mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,
  
      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',
  
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    })
  ```

  

- 参数为数组时

  ```js
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'count'
  ])
  ```

### `mapGetters` 辅助函数

- 数组写法

  ```js
   computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'doneTodosCount',
        'anotherGetter',
        // ...
      ])
    }
  ```

  

- 对象写法，改名

  ```js
  ...mapGetters({
    // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
    doneCount: 'doneTodosCount'
  })
  ```

###  `mapMutations` `mapActions`

```js
methods: {
  ...mapActions([
    'some/nested/module/foo', // -> this['some/nested/module/foo']()
    'some/nested/module/bar' // -> this['some/nested/module/bar']()
  ])
}
```

简写：

```js
methods: {
  ...mapActions('some/nested/module', [ 'foo', 'bar'])
}
```



[watch](https://vuex.vuejs.org/zh/api/#watch)

### router

[exact-path](https://router.vuejs.org/api/#exact-path)

[导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)



