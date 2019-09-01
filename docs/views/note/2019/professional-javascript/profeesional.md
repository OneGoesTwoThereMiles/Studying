---
title: JavaScript 高级程序设计
date: 2019-08-31
tags:
 - book
categories:
 - 读书笔记
---

## 一、数值类型

### 1.1 typeof操作符

typeof操作符的操作数可以是变量（message），也可以是数值字面量（66），返回的值都是string，可以区分object和function。

``` javascript
var message = "some string"
console.log(typeof message) // "string"
console.log(typeof 66)  // ""number
```

### 1.2 Boolean

任何**非空字符串和非零数字值**都会转化为true，注意数字0会转化为false，字符串“0”会转化为true。

### 1.3 Number

NaN与任何值都不相等，包括NaN本身。

parseInt()转换空字符串会返回NaN，Number()对空字符串返回0。

parseFloat()只解析十进制的值，所以没有用第二个参数指定基数的用法。

### 1.4 String

数值、布尔值、对象和字符串值都有toString()方法，但是null和undefinded没有这个方法。

构造函数String()可以将**任何类型**的值转为字符串。

### 1.5 Object

Object的每个实例都具有以下属性和方法：

    constructor: 保存着用于创建当前对象的函数;
    hasOwnProperty(propertyName): 用于检查给定的属性在当前对象实例中（而不是实例原型中）是否存在，propertyName必须是字符串形式的，如：o.hasOwnProperty("name");
    isPrototypeOf(object): 用于检查传入的object是否是当前对象的原型;
    propertyIsEnumerable(propertyName): 用于检查给定的propertyName能否使用for-in语句来枚举;
    toLocaleString(): 返回对象的字符串形式;
    toString(): 返回对象的字符串形式;
    valueOf(): 返回对象的字符串、数值、布尔值表示。

### 1.6 逗号操作符

逗号操作符在用于赋值时总会返回表达式中的最后一项：

``` javascript
var num = (1, 3, 5, 7)  // num值为7
```
