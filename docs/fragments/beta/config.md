# 生成配置

```js
const fs = require("fs");
const path = require("path");

const replaceURL = "C:\\Users\\12181\\Desktop\\记录\\9剑\\";
const reg2 = /C:\\Users\\12181\\Desktop\\记录\\9剑\\/g;
function replaceContentURL(reg2) {
    const targetURL = "https://qwq9527.gitee.io/resource/imgs/";
    fs.readdir(__dirname, async (err, fileNames) => {
        if (err) return console.log('读取文件目录失败!')
        var reg = /^\d.*\.md$/;
        fileNames = fileNames.filter((fileName) => {
            return reg.test(fileName);
        })

        // console.log(fileNames);
        for (const fileName of fileNames) {
            let content = await fs.readFileSync(path.resolve(__dirname, fileName), { encoding: "utf-8" });
            content = content.replace(reg2, targetURL);
            await fs.writeFileSync(path.resolve(__dirname, fileName), content, { encoding: "utf-8" })
        }
    })
}

function getConfig() {
    fs.readdir(__dirname, async (err, fileNames) => {
        if (err) return console.log('读取文件目录失败!')
        var reg = /^\d.*\.md$/;
        fileNames = fileNames.filter((fileName) => {
            return reg.test(fileName);
        }).sort((a, b) => {
            a = parseInt(a);
            b = parseInt(b);
            return a - b
        }).map(res => {
            return "9j/" + res.replace(/\.md$/, "");

        });
        console.log(fileNames);


    })
}
getConfig();

```

