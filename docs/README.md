
# 课程

    课程所需资料都在资料文件链接里，链接自动更新，保存好即可，不需要权限！

<ul>
	<li>1、先将链接复制到浏览器，看下能不能打开</li>
	<li>2、如果不能打开，用自己手机号登陆即可</li>
	<li>3、登陆后仍打不开，刷新/重新进就可以了</li>
</ul>
​	

<a target="_blank" href="https://duyiedu.yuque.com/fmi7t1/nwhh7g/gtucggflr4xxpp6m?singleDoc#"> 34期学员入学须知 </a> <br>
<a target="_blank" href="https://duyiedu.yuque.com/fmi7t1/nwhh7g/gtucggflr4xxpp6m?singleDoc#"> https://duyiedu.yuque.com/fmi7t1/nwhh7g/gtucggflr4xxpp6m?singleDoc# 《前端-中枢课文件资料》 </a> <br>
<a target="_blank" href="https://duyiedu.yuque.com/fmi7t1/nwhh7g/bcqyd9mdraozmatp?singleDoc#">https://duyiedu.yuque.com/fmi7t1/nwhh7g/bcqyd9mdraozmatp?singleDoc# 《前端-语言基础文件资料》</a><br>
<a target="_blank" href="https://duyiedu.yuque.com/fmi7t1/nwhh7g/tfd9blexuk02ggqr?singleDoc#">https://duyiedu.yuque.com/fmi7t1/nwhh7g/tfd9blexuk02ggqr?singleDoc# 《前端-强化课文件资料》 </a><br>
<a target="_blank" href="https://duyiedu.yuque.com/fmi7t1/nwhh7g/ohf2y7sggobkm47p?singleDoc#">https://duyiedu.yuque.com/fmi7t1/nwhh7g/ohf2y7sggobkm47p?singleDoc# 《前端-笔面试甄选文件资料》</a><br>
<br> 这些是全部的课程资料，一定保存好哈，按照步骤操作就可以了<br>
<a target="_blank" href="https://duyiedu.yuque.com/fmi7t1/nwhh7g/xu5lrh13qrhsw2wn?singleDoc#">https://duyiedu.yuque.com/fmi7t1/nwhh7g/xu5lrh13qrhsw2wn?singleDoc# 《34期学习指导》</a> <br> 学习vip课程之前，先看这个文档，选择适合自己规划的学习路线<br>
<a target="_blank" href="https://duyiedu.yuque.com/hghs2q/ybli0a/kgbr16?singleDoc#">https://duyiedu.yuque.com/hghs2q/ybli0a/kgbr16?singleDoc# 《前端课程目录（新）》</a> <br>

<p >
    然后到这个文档里找到对应的课程，课程标题个你要看的视频标题都是对应的 学的时候不用管那些中枢强化的名字，看这两个文档就行 在学习过程中遇到不会的技术问题都可以问答疑老师（直接在班级群内搜索答疑即可），直接在群里问（一定记得@老师）或者加老师微信私聊都可以
</p>

# 图片路径用法
图片引用可以用~@alias/imgs 处理,config.js配置，主要是有loader 处理，直接压缩成base64.

静态文件，如ppt.pdf 都放在public 目录中。使用绝对或相对路径都可以。见块级格式上下文具体写法

| 类型            | 写法                                                  | 写法                                                      |
| --------------- | ----------------------------------------------------- | --------------------------------------------------------- |
| 相对路径写法：  | `<a href="../../../ppts/bfc.pptx">文档.ppt</a>`       | <a href="../../../ppts/bfc.pptx">文档.ppt</a>|
| 绝对路径写法1： | `<a :href="$withBase('/ppts/bfc.pptx')">文档.ppt</a>` | <a :href="$withBase('/ppts/bfc.pptx')">文档.ppt</a> |
| 绝对路径写法2： | `<a href="/quweiqian/ppts/bfc.pptx">文档.ppt</a>`     | <a href="/quweiqian/ppts/bfc.pptx">文档.ppt</a>|
| md文档写法:     | `[文档.ppt](/quweiqian/ppts/bfc.pptx)`                  | [文档.ppt](/quweiqian/ppts/bfc.pptx) |
| 图片写法		  | `![image-20230628153726713](~@alias/image-20230628153726713.png)`|![image-20230628153726713](~@alias/image-20230628153726713.png)| 