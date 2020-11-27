<template>
  <el-container>
    <el-header>
      <el-aside>
        <div style="line-height:60px;">Logo</div>
      </el-aside>
      <el-main>
        <div style="line-height:60px;">Header</div>
      </el-main>
    </el-header>
    <el-container>
      <el-aside class="scroll">
        <slideBar />
      </el-aside>
      <div class="main-box">
        <div class="breadcrumb-title">
          <el-breadcrumb separator="/" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-main>
          <div class="content scroll">
            <router-view></router-view>
          </div>
        </el-main>
      </div>
    </el-container>
  </el-container>
</template>

<script>
import slideBar from '@/views/layout/slideBar'
export default {
  components:{
    slideBar
  },
}
</script>

<style>

</style>