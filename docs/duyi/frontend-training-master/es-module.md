# ES Module

## CommonJS

> 标准类型：社区规范
>
> 支持环境：node
>
> 依赖类型：动态依赖

### 如何导出

```js
module.exports = 导出的值
```

### 如何导入

```js
require("模块路径") // 函数返回模块导出的值
```

## ES Module

> 标准类型：官方标准
>
> 支持环境：node，浏览器
>
> 依赖类型：静态依赖，动态依赖

### 如何导出

**ES Module**的导出

ES Module分为两种导出方式：

- 具名导出（普通导出），可以导出多个
- 默认导出，只能导出一个

一个模块可以同时存在两种导出方式，最终会合并为一个「对象」导出

```js
export const a = 1; // 具名，常用
export function b() {} // 具名，常用
export const c = () => {}  // 具名，常用
const d = 2;
export { d } // 具名
const k = 10
export { k as temp } // 具名

// export default 3 // 默认，常用
// export default function() {} // 默认，常用
// const e = 4;
// export { e as default } // 默认

const f = 4, g = 5, h = 6
export { f, g, h as default} // 基本 + 默认

// 以上代码将导出下面的对象
/*
{
	a: 1,
	b: fn,
	c: fn,
	d: 2,
	temp: 10,
	f: 4,
	g: 5,
	default: 6
}
*/
```

**注意：导出代码必须为顶级代码，即不可放到代码块中**

### 如何导入

针对具名导出和默认导出，有不同的导入语法

```js
// 仅运行一次该模块，不导入任何内容
import "模块路径"
// 常用，导入属性 a、b，放到变量a、b中。a->a, b->b
import { a, b } from "模块路径"   
// 常用，导入属性 default，放入变量c中。default->c
import c from "模块路径"  
// 常用，default->c，a->a, b->b  c 必须在前面
import c, { a, b } from "模块路径" 
// 常用，将模块对象放入到变量obj中
import * as obj from "模块路径" 


// 导入属性a、b，放到变量temp1、temp2 中
import {a as temp1, b as temp2} from "模块路径" 
// 导入属性default，放入变量a中，default是关键字，不能作为变量名，必须定义别名
import {default as a} from "模块路径" 
//导入属性default、b，放入变量a、b中
import {default as a, b} from "模块路径" 
// 以上均为静态导入

import("模块路径") // 动态导入，返回一个Promise，完成时的数据为模块对象
```

**注意：静态导入的代码必须为在代码顶端，也不可放入代码块中**

**另外，静态导入的代码绑定的符号是常量，不可更改**

## 浏览器中如何使用

```text
 项目结构
├─ demo
│  ├─ js
│     ├─ index.js   
│     └─ math.js  
└─ index.html
```

```html
<!-- html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./js/index.js" type="module"></script>
  </body>
</html>

```

```js
// math.js

// 导出两个函数 sum，isOdd

// export function sum(a, b) {
//   return a + b;
// }

// export const isOdd = (n) => n % 2 !== 0;

export default {
  sum(a, b) {
    return a + b;
  },
  isOdd(n) {
    return n % 2 !== 0;
  },
};

/**
 * {
      default: {
        sum: fn,
        isOdd: fn
      }
 * }
 *  */

```

```js
//index.js

// import math from './math.js';

// const result = math.sum(1, 2);
// console.log(result);

setTimeout(async () => {
  const m = await import('./math.js');
  const math = m.default;
  const result = math.isOdd(1, 2);
  console.log(result);
}, 1000);
```



## 练习题

### 练习1

书写一个ESM模块，查阅文档，导出下面的模块对象

```js
{
  a: 1
}
```

你可以写出多少种导出的方式？

再书写一个ESM模块，查阅文档，导入上面的模块，你可以写出多少中导入的方式

### 练习2

书写一个ESM模块，查阅文档，导出下面的模块对象

```js
{
  a: 1,
  b: 2,
  c: function() {},
  default: {
    a: 1,
    b: 2
  }
}
```

再书写一个ESM模块，查阅文档，按照下面的要求分别写出导入代码：

1. 仅导入default
2. 仅导入a和b
3. 同时导入default、a、b
4. 导入整个模块对象
5. 不导入任何东西，仅运行一次该模块

### 综合练习

查阅文档，按照老师的模块划分思路完成「综合练习效果」

> 登录接口文档：http://mock.duyiedu.com/project/72/interface/api/105
>
> 测试账号：username
>
> 测试密码：123123