---
title: 你不知道的JavaScript--上
date: 2019-09-03
tags:
 - book
categories:
 - 读书笔记
---

## 一、作用域

    1.JavaScript的编译不是发生在构建之前的。
    2.变量的赋值操作会执行两个动作，首先编译器会在当前作用域中声明一个变量（如果没有声明过），然后在运行时引擎会在作用域中查找该变量，如果找到了就会对它赋值。
    3.如果查找的目的是对变量进行赋值，那么会使用LHS查询；如果目的是获取变量的值，就会使用RHS查询。
    4.ReferencerError同作用域判别失败有关，而TypeError则代表作用域判别成功了，但是对结果的操作是非法或者不合理的。

## 二、词法作用域

    1.作用域有两种主要的工作模型：词法作用域（主流），动态作用域。
    2.词法作用域是由你在写代码时将变量和块作用域写在哪里来决定的。（eval、with可以欺骗词法作用域，不建议使用，不安全，影响性能）
    3.无论函数在哪里背调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置来决定。


## 三、函数作用域和块作用域

1.函数作用域的含义是指，属于这个函数的全部变量都可以在整个函数范围内使用及复用（事实上在嵌套的作用域中也可以使用）。

2.可以把变量和函数包裹在一个函数的作用域中，然后用这个作用域来“隐藏”它们。

3.规避冲突：库通常会在全局作用域中声明一个名字足够独特的变量，通常是一个对象，也可以使用模块管理。

4.一般是函数包裹变量会存在一些问题：首先，声明的具名函数本身名字“污染”了所在作用域；其次必须显示的调用这个函数。可以用立即执行函数表达式（IIFE）来避免：

``` javascript
// 两种形式，在功能上无区别
(function foo(){
    var a = 4
    console.log(a) // 4
})()

// 或者
(function foo(){
    var a = 4
    console.log(a) //4
}())
```
5.const、let、with、try/catch中的catch分句能创建块作用域。