### html

1. h1标签一般只有一个 <html lang="en"> html开始结尾就是一个html文件 默认en 可以设置为zh-Hant
2. pre(写段古诗 输出代码) p （段落）h1-h6（标题）
3. time address  [del s]（横穿线） [ins u ]下划线
4. i em 斜体  mark醒目标记
5. code 包装代码  代码必须是等宽字体
6. 表格 标题 caption  头部 thead 主体 tbody 底部tfoot  头部 tr th   主体 tr（行）  td (td 是单元格)
7. 图片 img  alt 方便seo src 要显示的图片地址 可以本地 可以网络 width 
8. 列表 ul无序 li子元素 无序列表常用做导航或者标题列表   ol有序列表 列表可以嵌套
9. 描述列表 dl dt dd
10. 表单 是网页中数据采集的工具 表单标签 form  表单域 input input 是当标签 结尾不需要封闭   表单按钮 button
```
<form name="login " method="post" action="login.php">
input 属性 1 type text radio select
           2name 元素名称 与服务器端数据传送
           3value 元素默认值
           4 size 以字符计算的元素可见宽度 
           5maxlength 元素允许的最大字符长度 
           6disabled 禁用该控件 既不能选择也不能点击
           7readonly 该控件字段只读不允许更改

<input type="text" name="login" value="不能为空">  
<input type="submit" value="提交" >      
```


h5表单新增属性 1placeholder 占位符 默认值 
2autofocus 自动聚焦
3required 必填项 项目里面遇到过这个
4pattern 对输入进行正则验证
5list 限定输入内容的列表 列表由datalist标签创建
6height width input type image时候 设置图像宽高
7 min max step input为数字或者日期类型时候 设置取值范围和步长
8 novalidate 用在form 标签中 提交时不对数据进行验证

video audio 