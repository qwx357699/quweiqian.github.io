# Corepack

- Corepack 是一个实验性的工具，它用来管理包管理工具

- 目前支持 yarn 和 pnpm

- 项目中使用包管理器命令时，nodejs会根据项目的配置`package.json``packageManager`字段识别该项目需要用的包管理工具，根据`Corepack`提供对应的包管理器的代理进行处理，透明的安装后调用。

  



[Node.js Corepack - 掘金 (juejin.cn)](https://juejin.cn/post/7111998050184200199)

## 包的入口

在包的 `package.json` 文件中，两个字段可以定义包的入口点：[`"main"`](https://nodejs.cn/api/packages.html#main) 和 [`"exports"`](https://nodejs.cn/api/packages.html#exports)。 这两个字段都适用于 ES 模块和 CommonJS 模块入口点。

所有版本的 Node.js 都支持 [`"main"`](https://nodejs.cn/api/packages.html#main) 字段，但它的功能有限：它只定义了包的主要入口点。

[`"exports"`](https://nodejs.cn/api/packages.html#exports) 提供了 [`"main"`](https://nodejs.cn/api/packages.html#main) 的现代替代方案，允许定义多个入口点，支持环境之间的条件入口解析，并防止除了 [`"exports"`](https://nodejs.cn/api/packages.html#exports) 中定义的入口点之外的任何其他入口点。 此封装允许模块作者清楚地为他们的包定义公共接口。

对于针对当前支持的 Node.js 版本的新包，建议使用 [`"exports"`](https://nodejs.cn/api/packages.html#exports) 字段。 对于支持 Node.js 10 及以下的包，[`"main"`](https://nodejs.cn/api/packages.html#main) 字段是必需的。 如果同时定义了 [`"exports"`](https://nodejs.cn/api/packages.html#exports) 和 [`"main"`](https://nodejs.cn/api/packages.html#main)，则在支持的 Node.js 版本中，[`"exports"`](https://nodejs.cn/api/packages.html#exports) 字段优先于 [`"main"`](https://nodejs.cn/api/packages.html#main)。

[条件导出](https://nodejs.cn/api/packages.html#conditional-exports)可以在 [`"exports"`](https://nodejs.cn/api/packages.html#exports) 中用于为每个环境定义不同的包入口点，包括包是通过 `require` 还是通过 `import` 引用。 有关在单个包中同时支持 CommonJS 和 ES 模块的更多信息，请参阅[双 CommonJS/ES 模块包章节](https://nodejs.cn/api/packages.html#dual-commonjses-module-packages)。

现有包引入 [`"exports"`](https://nodejs.cn/api/packages.html#exports) 字段将阻止包的消费者使用任何未定义的入口点，包括 [`package.json`](https://nodejs.cn/api/packages.html#nodejs-packagejson-field-definitions)（例如 `require('your-package/package.json')`。 **这可能是一个突破性的变化。**

为了使 [`"exports"`](https://nodejs.cn/api/packages.html#exports) 的引入不间断，请确保导出每个以前支持的入口点。 最好明确指定入口点，以便包的公共 API 定义明确。 例如，以前导出 `main`、`lib`、`feature` 和 `package.json` 的项目可以使用以下 `package.exports`：

```json
{
  "name": "my-package",
  "exports": {
    ".": "./lib/index.js",
    "./lib": "./lib/index.js",
    "./lib/index": "./lib/index.js",
    "./lib/index.js": "./lib/index.js",
    "./feature": "./feature/index.js",
    "./feature/index": "./feature/index.js",
    "./feature/index.js": "./feature/index.js",
    "./package.json": "./package.json"
  }
}
```

或者，项目可以选择使用导出模式导出带有和不带有扩展子路径的整个文件夹：

```json
{
  "name": "my-package",
  "exports": {
    ".": "./lib/index.js",
    "./lib": "./lib/index.js",
    "./lib/*": "./lib/*.js",
    "./lib/*.js": "./lib/*.js",
    "./feature": "./feature/index.js",
    "./feature/*": "./feature/*.js",
    "./feature/*.js": "./feature/*.js",
    "./package.json": "./package.json"
  }
}
```

以上为任何次要包版本提供向后兼容性，包的未来重大更改可以适当地将导出限制为仅暴露的特定功能导出：

```json
{
  "name": "my-package",
  "exports": {
    ".": "./lib/index.js",
    "./feature/*.js": "./feature/*.js",
    "./feature/internal/*": null
  }
}
```

## es6 模块化入口配置

```js
  "type": "module",
  "exports": {
    "import": "./index.js"
  }
```







[包的入口 | Node.js API 文档 (nodejs.cn)](https://nodejs.cn/api/packages/package_entry_points.html)

