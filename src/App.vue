<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
  $aside_width:200px;
  $header_height:60px;
  $breadcrumb_height:50px;
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
        height: $header_height;
        display: flex;
        padding: 0;
        >.el-aside{
          width: $aside_width !important;
          background: skyblue;
        }
        >.el-main{
          padding: 0;
        }
      }
      >.el-container{
        flex: 1;
        overflow: auto;
        >.el-aside {
          width: $aside_width !important;
          background-color: #D3DCE6;
          color: #333;
          text-align: center;
          // line-height: 200px;
          // >div>a{
          //   display: block;
          //   height: 100%;
          // }
          // >div>a:hover{
          //   color: skyblue;
          // }
        }
        .breadcrumb-title{
          background-color:rgba(255,255,255,0.75);
          border-radius: 10px;
          >.el-breadcrumb{
            height: $breadcrumb_height;
            line-height: $breadcrumb_height;
            padding:0 20px;
          }
        }
        .main-box{
          flex: 1;
          flex-basis: auto;
          // overflow: auto;
          box-sizing: border-box;
          .el-main {
            background-color: #E9EEF3;
            color: #333;
            text-align: center;
            height: calc(100% - #{$breadcrumb_height});
            >.content{
              height: 100%;
              background: rgba(255,255,255,0.75);
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
</style>
