# 命令

关于yarn全局安装找不到命令问题

- `nvm `安装时，自己手动选择了`D:/nodejs` 目录，`nvm`的做法是将这个目录做成了快捷方式，切换版本时，目录实际的指向是对应版的`nodejs`目录

- `D：/nodejs`在 `nvm` 安装时，已经安装到了系统的环境变量中。

- 运行命令时，系统通过环境变量中提供的路径查找是否有该命令。windows 默认能执行哪些文件命令呢？`cmd,bat,js.exe `等。试了下，在`D：/nodejs` 建了个`aaaa.bat`的文件。命令行输入 `aaaa `就能执行，有效果。

  ```bat
  @echo off
  echo test1
  echo test2
  end
  pause
  ```

- 问题

     ## yarn.bat

```bat
## 表示所有命令运行后不在控制台显示
@ECHO off 

SETLOCAL
CALL :find_dp0

IF EXIST "%dp0%\node.exe" (
  SET "_prog=%dp0%\node.exe"
) ELSE (
  SET "_prog=node"
  SET PATHEXT=%PATHEXT:;.JS;=;%
)

"%_prog%"  "%dp0%\node_modules\yarn\bin\yarn.js" %*
ENDLOCAL
EXIT /b %errorlevel%
:find_dp0
SET dp0=%~dp0
EXIT /b

```

### setlocal、endlocal

`setlocal`和`endlocal`命令执行结果是让中间的程序对于系统变量的改变只在程序内起作用，不会影响整个系统级别。

```bat
@echo off
setlocal
path=d:\
echo 局部环境变量path值
set path
endlocal
echo 系统环境变量path的值
set path
```

在第二行`setlocal`之后，第三行对于变量path进行了赋值，第四行就是显示一下该值。在第六行`endlocal`后，重新显示一下系统变量path（第七行），会发现仍然是程序运行之前的path值，没有被程序改变。

## %~dp0的含义

|序号| 符号     | 含义                                                         |
|---| -------- | ------------------------------------------------------------ |
|1| ~        | 是扩展的意思，**变量扩充(下面详细介绍)**，相当于把一个相对路径转换绝对路径 |
|2| %0       | 代指批处理文件自身（绝对路径 "D:\test\bat\test.bat"，注意有双引号） |
|3| %~d0     | 是指批处理所在的盘符，其中d代表drive。(扩充到盘符 D: )       |
|4| %~p0     | 是指批处理所在的目录，其中p代表path。(扩充到路径 \test\bat\ ） |
|5| %~dp0    | 是批处理所在的盘符加路径。（扩充到盘符和路径 ：D:\test\bat\） |
|6| cd %~dp0 | 就是进入批处理所在目录了                                     |

```bat
@echo off
echo 当前盘符：%~d0
echo 当前路径：%~p0
echo 当前盘符和路径：%~dp0
echo 当前批处理(%0文件)全路径：%~f0
echo 当前盘符和路径的短文件名格式：%~sdp0
echo 当前CMD默认目录：%cd%
pause
```

```tex
C:\Users\12181\Desktop\yarn>sbsb
当前盘符：D:
当前路径：\nodejs\
当前盘符和路径：D:\nodejs\
当前批处理(sbsb文件)全路径：D:\nodejs\sbsb.bat
当前盘符和路径的短文件名格式：D:\nodejs\
当前CMD默认目录：C:\Users\12181\Desktop\yarn
请按任意键继续. . .
```

[npm scripts 使用指南 - 阮一峰的网络日志 (ruanyifeng.com)](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

## EXIT /b

```text
EXIT [/B] [exitCode]

  /B          指定要退出当前批处理脚本而不是 CMD.EXE。如果从一个
              批处理脚本外执行，则会退出 CMD.EXE

  exitCode    指定一个数字号码。如果指定了 /B，将 ERRORLEVEL
              设成那个数字。如果退出 CMD.EXE，则用那个数字设置
              过程退出代码。
```

命令概括：
exit，意为“退出”；
**/b，全英文batch（不确定）；**
code，意为“代码”，exitcode就是“退出码”；
