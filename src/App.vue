<template>
  <h2>{{ $store.state.name }}</h2>
  <router-link to="/login">登录</router-link>
  <router-link to="/main">首页</router-link>
  <el-button type="primary">主要</el-button>
  <el-button type="danger">危险</el-button>
  <router-view />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
