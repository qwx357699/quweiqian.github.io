# git 指南

主要有两个功能：版本控制和多人协作

## 1. 版本控制

![image-20230628153726713](~@alias/image-20230628153726713.png)

1. 初始化仓库 `git init git-demo`

2. 进入仓库 `cd git-demo`

3. 创建 index.html 文件后，在控制台进行 add 操作 `git add index.html`

4. 提交，填写提交日志 `git commit -m "初始化html"`

5. 创建 index.css 文件后，在控制台进行 add 操作 `git add index.css`

6. 提交，填写提交日志 `git commit -m "init css"`

   ![image-20230627164628549](~@alias/image-20230627164628549.png)

7. 查看状态，如 html 里面更改内容，使用 `git status`，发现 index.html 发红色，提示没有分段提交，

   ![image-20230627171644423](~@alias/image-20230627171644423.png)

8. 将 index.html 添加到缓存区，`git add index.html`，查看状态 `git status`，发现提交后变绿色了

   ![image-20230627170316836](~@alias/image-20230627170316836.png)

9. 提交版本库 `git commit -m "修改html"`，再查看状态 `git status` 发现只有一个 `a.dio`文件没处理

![image-20230627172044622](~@alias/image-20230627172044622.png)

10. 配置忽略文件，需要建一个 .gitignore 文件，里面配置规则

如

```.gitignore
# 忽略所有 dio文件
*.dio
# 不要忽略 a.dio文件,
!a.dio 
```

![image-20230627173701838](~@alias/image-20230627173701838.png)

![image-20230627173849667](~@alias/image-20230627173849667.png)

这里将 dio 文件都忽略掉，修改下规则`#!a.dio`,这时执行 `git status` ，发现 dio 文件 untracked 的提示不见了，多了.gitignore文件的提示，该文件一般需要保留

![image-20230627174310143](~@alias/image-20230627174310143.png)

11. 改动下 html 文件和 css 文件内容，使用 `git add .`命令全部提交，再查看下状态 `git status`，再提交文件`git commit -m "修改文件，并且添加忽略文件"`

![image-20230627175816951](~@alias/image-20230627175816951.png)

12. 查看版本使用 `git log` 命令，控制台比较短会出现分号，显示不全，直接按 q 退出

> 默认的git在输出log日志时候，如果日记太多一页显示不完，则会分页分屏显示log日志，这样需要用户手动按Enter键一步一步输出直到完全输出所有log日志

![image-20230627180907433](~@alias/image-20230627180907433.png)

窗口拖大点显示全部，或者enter键一步一步输出所有，或者使用`git --no-pager log` 命令不分页全部显示，数据多估计会卡死

13. 穿越，让工作区和暂存区回到某个版本，使用 `git reset --hard  [commitID]`，后面的记录 用 `git log`就看不到了，要想看使用`git reflog`，就可以找到操作记录，拿到commitID 仍然可以切回到某个版本

    ![image-20230628094812249](~@alias/image-20230628094812249.png)

    ![image-20230628101233663](~@alias/image-20230628101233663.png)

    14. 回滚 `git revert [commitID]`，不是说回到某个版本，而是将原来做的事抵消掉,版本记录里，之前的还在，这里加了一个js文件，js内容错误，想回滚到上个版本，执行后会显示 linux 系统的文本编辑，按 i 键表示插入指定，然后就可以在文本记录下内容，按 ESC 键表示退出编辑，按`:wq`（write quite） 指令表示退出文件。

        ![image-20230628104451945](~@alias/image-20230628104451945.png)

        ![image-20230628103623839](~@alias/image-20230628103623839.png)

        > 简单形象理解 `git reset` 和 `git revert` 这两个指令的区别：
        >
        > 1. `git reset` 好比时光机穿越回到 3 岁那个点，未来如何仍然不知道
        > 2. `git revert` 好似“失败乃成功之母”，这次失败了，面对它，让它过去了，重新再来一次

    15. diff 比较，比较的种类比较多，默认`git diff` 指令比较工作区和暂存区

        ![image-20230628153752845](~@alias/image-20230628153752845.png)

## 2. 多人协作-分支

### 2.1 分支基础

1. 先创建一个仓库 branch，里面含有 dio 文件，.gitignore 文件

2. 查看所有分支 `git branch`，创建分支 `git branch [分支名]`，创建一个 li-doing 的分支

   ![image-20230628182624294](~@alias/image-20230628182624294.png)

3. 切换分支 `git checkout [分支名]`

   > 切换到指定的分支，并且更新工作区

![image-20230628183414003](~@alias/image-20230628183414003.png)

4. 建 lbt\index.html 文件，提交

   ![image-20230628184413954](~@alias/image-20230628184413954.png)

5. 切回 master 分支，发现 lbt/index.html 不见了，然后创建文件 pbl/index.html

![image-20230628190047892](~@alias/image-20230628190047892.png)

![image-20230628190816133](~@alias/image-20230628190816133.png)

6. 切换到 li-doing 分支，发现 pbl/index.html 文件不见了，lbt/index.html 又出现了

7. 切回到 master 分支，准备合并，`git merge 分支`，会出现记录合并原因的提示![image-20230628192000949](~@alias/image-20230628192000949.png)

   ![image-20230628191900687](~@alias/image-20230628191900687.png)

   > 这里需要注意一个问题，master 合并 li-doing 后，li-doing 分支继续开发不影响，但是 master 分支合并了新东西，如果 v2 和 v3 合并，li-doing 的分支指针要改变，指向 v3

![image-20230628192859214](~@alias/image-20230628192859214.png)

![image-20230629061919608](~@alias/image-20230629061919608.png)

8. 接下来，写公共样式，在 li-doing 分支中写了 index.css 样式，提交，切换到 master 再合并

![image-20230629062956955](~@alias/image-20230629062956955.png)

9. 接下来，master 中对 index.css 添加样式后提交，然后切换到 li-doing 分支对 index.css 文件写样式

   ![image-20230629064044667](~@alias/image-20230629064044667.png)

10. 冲突，切换到 master 进行合并，发现提示 merging 有冲突，自动合并失败

![image-20230629064825577](~@alias/image-20230629064825577.png)

![image-20230629065435105](~@alias/image-20230629065435105.png)

11. 解决完冲突，添加，提交，完整的流程见下图

    ![image-20230629070105414](~@alias/image-20230629070105414.png)

![image-20230629070242241](~@alias/image-20230629070242241.png)

### 2.2 远程分支

2.1 讲述的是在本地玩的做法，一般多人协作需要用到远程分支

1. https 和 ssh ，都是 协议，https 每次对仓库的操作都要用户名密码验证，ssh 只需要一次的配置，本质上是通过加密算法完成验证，为什么要配置，多人协作开发，不仅仅需要用户名密码，还需要验证用户是否让参与该项目。

2. 使用 `ssh-keygen -t rsa -C "xxx@xxx.com"` 指令创建 ssh key

   ![image-20230629090125890](~@alias/image-20230629090125890.png)

这个表示生成的 rsa 文件存放的路径。

a. 直接回车用默认路径

b. 输入短语密码，再次输入短语密码

3. 在 /c/users/administrator/.ssh/id_rsa 路径下生成两个文件，将 id_rsa.pub 文件内容配置到 gitee

   的个人设置>安全设置> SSH公匙 中

![image-20230629094307223](~@alias/image-20230629094307223.png)

4. 使用`ssh -T git@gitee.com` 指令检查是否配置成功
5. `git clone url` clone gitee 上面的代码

6. 建立index.html 文件，`git push [origin] 分支`

   ![image-20230629102855710](~@alias/image-20230629102855710.png)

> `git push origin master` 因为本地也有 master 分支，加了 origin 表示远端

7. 推送其他分支，使用 `git checkout -b [branch]` 指令创建 ding-dev 分支，index.html 添加内容，

![image-20230629104225233](~@alias/image-20230629104225233.png)

8. 分支写完了，主干想下载下代码，进行合并下，使用 `git pull [origin]  [branch]` 命令，获取远程仓库的变化，并与本地分支合并

   > 注意：本地是 ding-dev 分支，使用 `git push origin master` 会失败。分支没有对应上

9. 每次对远程仓库进行操作会提示输入短密码的原因是在初始创建 sshkey 时，填写了密码，不填写，就不会每次验证

## 3. sourceTree 工具

1. 下载后安装，最后一步选择秘钥，第一次选择否

   <img src="~@alias/image-20230629204115853.png" alt="image-20230629204115853" style="zoom:50%;" />

<img src="~@alias/image-20230629204155842.png" alt="image-20230629204155842" style="zoom:50%;" />

2. 创建或导入 SSH 秘钥 ，也就是载入 key.ppk 文件，生成 putty 格式秘钥，加载完后保存为 key.ppk 文件

![image-20230629213029711](~@alias/image-20230629213029711.png)

![image-20230629213144538](~@alias/image-20230629213144538.png)

![image-20230629220045957](~@alias/image-20230629220045957.png)

![image-20230629220208457](~@alias/image-20230629220208457.png)

![image-20230629221941495](~@alias/image-20230629221941495.png)

> 大致明白了，远程链接避免每次登录麻烦，有两种方式，
>
> 1.输入用户名和密码验证
>
> 2.生成秘钥和公钥验证
>
> 原来的秘钥需要生成 putty 格式，通过  putty key generator (秘钥生成器)

![image-20230629222910436](~@alias/image-20230629222910436.png)
