<template>
  <el-container id="app">
    <aside-menu/>
    <el-container>
      <el-header>
        <div class="el-icon-menu hidden-md-and-up burger"></div>
        <div class="header">
          Header
        </div>
      </el-header>
      <router-view/>
      <el-footer
        class="hidden-md-and-up"
      >
        Footer
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import AsideMenu from './components/AsideMenu'

export default {
  components: {
    AsideMenu
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
  
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    padding: 0;
    text-align: center;
    width: 100%;
  }
  
  .el-header {
    display: flex;
    align-items: center;
  }


  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 10px 0;
  }
  
  .burger {
    cursor: pointer;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: xx-large;
  }

  .header{
    width: 100%;
    align-items: center;
    text-align: center;
  }

  body > .el-container {
    height: 100vh;
  }

</style>
