<template>
  <div>
    welcome
    <br />
    <a :[attr()]="url" @[event()]="test2">链 接</a>
    <div v-once>
      {{b}}
      <div>{{c}}</div>
    </div>
    <custominput v-model="searchText" @input2='input2' :a='1' :b='2' :c='3' :obj='{e:7,f:8,g:9}'/>
    <div>{{searchText}}</div>
    <el-button @click.ctrl="test3">测试按键12345</el-button>
    <el-button @click="test">按钮{{a}}</el-button>
    <el-button @click="changeTitle">改变{{title}}</el-button>
  </div>
</template>

<script>
import custominput from '@/components/custom-input'
import { Person } from '@/utils'
export default {
  components:{
    custominput
  },
  props:{
    author: Person,
    a:{
      type:Number,
      default:6
    },
    title:{
      type:String
    },
  },
  data(){
    return{
      searchText:'123',
      b:2,
      c:7,
      // attr:'href',
      url:'https://www.baidu.com'
    }
  },
  methods:{
    changeTitle(){
      this.$emit('update:title',this.title==='title'?'标题':'title')
    },
    test(){
      this.b=3
      this.c=66
    },
    attr(){
      return 'href'
    },
    event(){
      return 'click'
    },
    test2(){
      console.log('点击事件')
    },
    test3(){
      console.log('在系统修饰符的修饰下,只有按键的同时点击才会触发')
    },
    input2(value){
      this.searchText=value
    },
  },
  watch:{
    b(n){
      console.log(n)
    },
  },
  // created:()=>{
  //   console.log(777)
  //   // console.log(this.a)//会报错
  // }
  beforeCreate(){
    console.log('子组件beforeCreate')
  },
  created(){
    console.log('子组件created')
    // console.log(this.$watch)
    console.log(this.author)
  },
  beforeMount(){
    console.log('子组件beforeMount')
  },
  mounted(){
    console.log('子组件mounted')
  },
  beforeUpdate(){
    console.log('子组件beforeUpdate')
  },
  updated(){
    console.log('子组件updated')
  },
  beforeDestroy(){
    console.log('子组件beforeDestroy')
  },
  destroyed(){
    console.log('子组件destroyed')
  },
}
</script>

<style>

</style>