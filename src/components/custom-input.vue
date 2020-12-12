<template>
  <input
    v-bind="$attrs"
    :value="value"
    @input="test"
  >
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['value','a'],
  mounted(){
    console.log('a')
    console.log(this.$attrs)
  },
  methods:{
    test($event){
      console.log($event)
      this.$emit('input2', $event.target.value)
    }
  }
}
</script>

<style>

</style>