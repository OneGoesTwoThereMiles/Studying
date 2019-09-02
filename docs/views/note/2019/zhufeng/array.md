---
title: 数组基础
date: 2019-09-02
tags:
 - array
categories:
 - JavaScript
---

## 1.数组的原型方法

``` javascript
console.dir(Array.prototype)
```

## 2.掌握数组方法的几个维度

>1.方法的意义和作用；
>2.方法的形参；
>3.方法的返回值；
>4.该方法是否改变原数组。

## 3.增加

``` javascript
// 方法1：push
ary.push()  // 向数组末尾添加
// 方法2：unshift
ary.unshift() // 向数组头部添加
// 方法3
ary[ary.length] = 'anything' // 向数组末尾添加
```

## 4.删除

``` javascript
// 方法1：pop
ary.pop()  // 删除数组的最后一项
// 方法2：shift
ary.shift() // 删除数组的第一项
// 方法3
delete ary[index]  //这种方式删除其他项索引值不会改变，且数组的length值也不会改变，不建议使用。
// 方法4
ary.length-- //删除数组的最后一项
```

## 5.修改 splice

>最强大的方法，可以实现数组的增加、删除、修改

``` javascript
ary.splice(m,n)  //从索引m开始，删除n个，返回由删掉元素组成的新数组
ary.splice(m,n,x)  //从索引m开始，删除n个,用x来代替
ary.splice(m,0,x)  //从索引m开始，删除0个，并将x插入到m的前面
ary.splice(0,0,x)  //向数组头部增加新元素
ary.splice(ary.length,0,x)  //向数组末尾追加新元素
ary.splice(0,1)  //删除数组第一项
ary.splice(ary.length-1)  //删除数组最后一项
ary.splice()  //一项都不删除，返回一个新的空数组
ary.splice(0)  //清空数组，返回一个复制的全新数组
```

## 6.查询

``` javascript
ary.slice(m,n)  // 从索引m开始找到n（不包括n）返回找到元素组成的新数组，原数组不变。
ary.slice(m)  // 从索引m找到末尾
ary.slice()  // 克隆数组
ary.slice(0)  // 克隆数组
```

## 7.数组拼接

``` javascript
ary.concat([1,2],[3,4])  //拼接多个数组
ary.concat()  // 克隆数组
```

## 8.数组转字符串

``` javascript
ary.toString() // 字符串形式
ary.join('-')  //以-拼接数组每一项
// 已知数组每一项都是数字，求和？
let total = null
for(let i = 0; i < ary.length; i++) {
    total += ary[0]
}

var total = eval(ary.join('+'))  // 仅仅是思路，eval不建议使用
```
