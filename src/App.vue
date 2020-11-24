<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside style="width:200px">
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
          <div>aside</div>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
  #app{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: auto;
    >.el-container{
      height: 100%;
      overflow: auto;
      display: flex;
      >.el-header{
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        height: 60px;
      }
      >.el-container{
        flex: 1;
        overflow: auto;
        >.el-aside {
          background-color: #D3DCE6;
          color: #333;
          text-align: center;
          line-height: 200px;
        }
        >.el-main {
          background-color: #E9EEF3;
          color: #333;
          text-align: center;
          line-height: 160px;
        }
      }
    }
    
  }
  





  body > .el-container {
    margin-bottom: 40px;
  }
</style>
