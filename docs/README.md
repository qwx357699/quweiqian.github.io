图片引用可以用~@alias/imgs 处理,config.js配置，主要是有loader 处理，直接压缩成base64.

静态文件，如ppt.pdf 都放在public 目录中。使用绝对或相对路径都可以。见块级格式上下文具体写法

| 类型            | 写法                                                  | 写法                                                      |
| --------------- | ----------------------------------------------------- | --------------------------------------------------------- |
| 相对路径写法：  | `<a href="../../../ppts/bfc.pptx">文档.ppt</a>`       | [文档.ppt](http://localhost:8082/quweiqian/ppts/bfc.pptx) |
| 绝对路径写法1： | `<a :href="$withBase('/ppts/bfc.pptx')">文档.ppt</a>` | [文档.ppt](http://localhost:8082/quweiqian/ppts/bfc.pptx) |
| 绝对路径写法2： | `<a href="/quweiqian/ppts/bfc.pptx">文档.ppt</a>`     | [文档.ppt](http://localhost:8082/quweiqian/ppts/bfc.pptx) |
| md文档写法:     | `[文档.ppt](../../../ppts/bfc.pptx)`                  | [文档.ppt](http://localhost:8082/quweiqian/ppts/bfc.pptx) |