### first commit  20180720 by guanyu

## 下地干活 光说不练假把式 目的：记录不同技术栈的练习 总结知识点 夯实js基础

> 近期目标：熟悉vue文档，里面的例子全部实现一遍,element UI 所有组件实践一遍 知道每个组件的用法 放在一个后台里面展示出来
  - 保持持续学习
  - 结合vue文档和Dash细化学习vue基础
  - Dash:https://kapeli.com/dash
  - 学习oc基本语法、学习foundation里面的基本常用类型、学习常用ui组件

> 长期目标：

### markdown 语法

### 1标题
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

### 2列表

#### 2.1无序列表
- js
- css
- html
  - 嵌套的列表
  - 嵌套的列表
  
#### 2.2有序列表
1. www
2. nnnn
3. weqwe

### 3链接 [链接文字](链接地址 “链接标题”)

#### 3.1不带title的链接
[OC教程](https://www.raywenderlich.com/tutorial-archive)

### 3.2带title的链接
[OC教程](https://www.raywenderlich.com/tutorial-archive "oc教程")

### 4引用

> 这是引用
>这是引用没空格的情况

### 5代码块儿

```
var a = new X({s:'ss'});
```
这是单行里面引入代码的情况`scanf`方法

### 6表格 第二行区分头和体 第二行里面-的位置可以指定对齐方式
|语言名|后缀名|作用|
-|-|-
|oc|.h|头文件 定义接口名字 里面有什么方法属性|
|oc|.m|实现文件 对应.h文件引入后 对应的方法的具体实现文件|

### 7图片
孔子： ![孔子](https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=188104088,3717499903&fm=58&bpow=508&bpoh=624 "孔子")

### 8分割线和字体

分割线：
***
或者
- - - 

**粗体**
***加粗斜体***
~~删除线~~

*斜体*
**粗体啊**
***加粗斜体啊***

### 8TODO List 未完成：- [这里要空格 ] xxx   []前后都要空格 ;  完成的 - [这里不需要空格] sss []前后都要空格
- [x] 1js
- [x] 2vue我没空格
- [x] 3element-ui
- [x] react
- [x] node
- [ ] objective-c
  - [x] 基本语法
  - [ ] foundation.h
  - [ ] UIKit我里面没空格

### 怎么显示一个项目文件结构？ 为什么要显示 因为一个项目熟悉结构是基础 不然没发往下看别人的项目
brew （homebrew）[homebrew官网](https://brew.sh/)
用到的包 tree brew install tree
man tree (查看这个包的菜单  开始试了tree -help 没效果才试这个命令)
```
tree  [-acdfghilnpqrstuvxACDFQNSUX]  [-L  level [-R]] [-H baseHREF] [-T
title] [-o filename] [--nolinks] [-P pattern] [-I  pattern]  [--inodes]
[--device] [--noreport] [--dirsfirst] [--version] [--help] [--filelimit
#]  [--si]  [--prune]  [--du]  [--timefmt  format]  [--matchdirs]  [--]
[directory ...]
```
出来上面的命令 才知道 可以 tree --help 两个--

输出项目目录结构 就在根目录下执行下面命令
```
tree -L 3 -I "node_modules"
```