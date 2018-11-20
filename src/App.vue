<template>
  <div id="app">
    <!-- 显示的是当前路由所对应的内容 -->
    <!-- 路由被加载，就把内容放入内存之中，达到性能优化 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
  //name作用：1、做递归组件 2、做页面缓存 3、vue工具
}
</script>

<style>

</style>
