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
* ES5 规范（http://www.ecma-international.org/ecma-262/5.1/）
![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190905204633.png)

![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190905204950.png)

* 关于this
![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190905205728.png)

* 通过工具将新版代码转换为等价的旧版代码。这个过程通常被称为
“transpiling”。它是由 transforming（转换）和 compiling（编译）组合而成的术语。
* 单 词“polyfill”是由 Remy Sharp 发 明 的 一 个 新 术 语（https://remysharp.com/2010/10/08/what-is-a-polyfill），用于表示根据新特性的定义，创建一段与之行为等价但能够在旧的
JavaScript 环境中运行的代码。

## 三、ES6语法

* 过早访问 let 声明的引用导致的这个 ReferenceError 严格说叫作临时死亡区（Temporal Dead Zone，TDZ）错误——你在访问一个已经声明但没有
初始化的变量。
![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190906091141.png)

* 常量不是对这个值本身的限制，而是对赋值的那个变量的限制。换句话说，这个值并没有因为 const 被锁定或者不可变，只是赋值本身不可变。如果这个值是复杂值，比如对象或者数组，其内容仍然是可以修改的。

![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190906091600.png)

* foo(..) 函数声明中的 ...args 通常称为“rest 参数”。

![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190906092808.png)

* 默认参数值

![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190906093419.png)

![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190906093605.png)

* 默认值表达式

![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190906093846.png)
注意函数声明中形式参数是在它们自己的作用域中（可以把它看作是就在函数声明包裹的 ( .. ) 的作用域中），而不是在函数体作用域中。这意味着在默认值表达式中的标识符引用首先匹配到形式参数作用域，然后才会搜索外层作用域。

![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190906094334.png)
z + 1 中的 z 发现 z 是一个此刻还没**初始化**的参数变量，所以它永远不会试图从外层作用域寻找 z。

![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190906094711.png)

从 JavaScript 的早期开始，就有一个不为人知但是很有用的技巧可以使用：Function.prototype 本身就是一个没有操作的空函数。所以，这个声明可以是 cb = Function.prototype，这样就省去了在线函数表达式的创建过程。

* 对象属性赋值模式
在使用对象解构赋值的时候——也就是说，把看起来像是对象字面值的语法 { .. }
放在 = 运算符的左侧——反转了 target: source 模式。
![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190906105830.png)

别对于对象解构形式来说，如果省略了 var/let/const 声明符，就必须把
整个赋值表达式用 ( ) 括起来。因为如果不这样做，语句左侧的 {..} 作为语句中的第一个元素就会被当作是一个块语句而不是一个对象。
![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190906110215.png)

![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190906110640.png)

![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190906110843.png)

![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190906111251.png)

![](https://raw.githubusercontent.com/onetothere/pic/master/study/20190906111322.png)

