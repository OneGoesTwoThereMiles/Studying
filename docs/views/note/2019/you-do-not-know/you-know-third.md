---
title: 你不知道的JavaScript--下
date: 2019-09-05
tags:
 - book
categories:
 - 读书笔记
---

## 一、深入编程

* 简单的输入输出：

![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190905201442.png)

* 隐式类型转换是可以学习的机制，任何想要严肃对待 JavaScript 编程的人都应该学习。不仅仅是因为一旦掌握了其规则，就不会再被它迷惑，实际上这也可以提高你的程序质量！
* 变量的主要用途：管理程序状态。换句话说，状态跟踪了值随着程序运行的变化。
* 变量的另一个常见用法是集中设置值。更常见的说法是**常量**，即声明一个变量，赋予一个特定值，然后这个值在程序执行过程中保持不变。
* for 循环有 3 个分句：初始化分句（var 1 = 0）、条件测试分句（i <= 9），以及更新分句（i = i + 1）。

## 二、深入JavaScript
* 在 JavaScript 中，只有值有类型；变量只是这些值的容器。
![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190905203719.png)
* 确的说法是，== 检查的是允许类型转换情况下的值的相等性，而 === 检查不允许类型转换情况下的值的相等性；因此，=== 经常被称为“严格相等”。
* ES5 规范（http://www.ecmainternational.org/ecma-262/5.1/）
![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190905204633.png)

![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190905204950.png)

* 关于this
![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190905205728.png)

* 通过工具将新版代码转换为等价的旧版代码。这个过程通常被称为
“transpiling”。它是由 transforming（转换）和 compiling（编译）组合而成的术语。
* 单 词“polyfill”是由 Remy Sharp 发 明 的 一 个 新 术 语（https://remysharp.com/2010/10/08/what-is-a-polyfill），用于表示根据新特性的定义，创建一段与之行为等价但能够在旧的
JavaScript 环境中运行的代码。