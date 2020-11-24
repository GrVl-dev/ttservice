<template>
  <el-container class="home">
    <el-main>
      Main
    </el-main>
    <el-aside
      class="hidden-sm-and-down"
    >
      Aside 2
    </el-aside>
  </el-container>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
 .el-aside {
  background-color: #D3DCE6;
  color: #333;
  width: 300px;
 }
</style>