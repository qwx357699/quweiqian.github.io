# 404页面&静态图片
## 静态页面

项目中两种：

+ 放到 public 目录下的img目录，这种实在 index.html 页面中直接引入使用，如目前使用的loading.gif;

+ 放到 src/assets 目录下，有可能图片被打包，变成base64位

  > 这种情况使用两种方式：
  >
  > + js中想使用， `import imgUrl from "@/assets/a.png";` 直接使用引用
  > + vue 模板中 `<img src="@/assets/404.jpg" alt="" />` 直接使用

## 404页面

+ route最后的位置配置

  ```js
  [
      ...
   {
      name: "NotFound",
      path: "*", // 通配符
      component: NotFound,
      meta: {
        title: "404",
      },
    }
  ]
  ```

+ 项目中文章详情，可能服务器中不存在 ` path: "/blog/:id"`，需要判断下 /404 没有定义进通配符

  ```js
  async fetchData() {
        let resp = await getBlog(this.$route.params.id);
        // resp = null;
        if (!resp) {
          // 文章不存在
          this.$router.push("/404");
          return;
        }
        titleController.setRouteTitle(resp.title);
        return resp;
      },
  ```

  
