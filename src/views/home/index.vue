<template>
  <div>
    home

    <el-button @click="test">测试按钮</el-button>
    <el-button @click="changeC">测试按钮{{c}}</el-button>
    <router-view :a='a' :author="author" v-bind.sync='obj'></router-view>
  </div>
</template>

<script>
import { Person } from '@/utils'
export default {
  data(){
    return {
      a:123,
      c:124,
      author:new Person('lucy','nazi'),
      obj:{
        title:'title'
      }
    }
  },
  methods:{
    test(){
      this.a=777
    },
    changeC(){
      this.c=666
    },
  },
  beforeCreate(){
    console.log('父组件beforeCreate')
  },
  created(){
    console.log('父组件created')
  },
  beforeMount(){
    console.log('父组件beforeMount')
  },
  mounted(){
    console.log('父组件mounted')
  },
  beforeUpdate(){
    console.log('父组件beforeUpdate')
  },
  updated(){
    console.log('父组件updated')
  },
  beforeDestroy(){
    console.log('父组件beforeDestroy')
  },
  destroyed(){
    console.log('父组件destroyed')
  },
}
</script>

<style>

</style>