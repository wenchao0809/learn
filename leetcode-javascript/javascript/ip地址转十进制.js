/**
 * IP地址与int整数的转换——腾讯PCG TEG都考过的一道题
前言
今天继续为大家补充Leetcode没有的高频面试题：IP地址与int整数的转换

引用几篇面经原文描述

给你一个IP4的地址，请转成十进制整数 （2021-03 腾讯-PCG-前端）
手撕算法: ip地址转整数 （2021-03 腾讯-TEG-后端）
ip字符串转整型（2021-02 快手-效率工程-后端）
 */
/**
 * 
 * @param {string} ip 
 */
  function ipTonumber(ip) {
    const s = ip.split('.')
    let bi = ''
    for (let item of s) {
      bi += Number(item).toString(2).padStart(8, '0')
    }
    return parseInt(bi, 2)
  }

  // 进阶实现parseInt
  // 进阶实现number toString

  console.log(ipTonumber('10.0.3.193'))