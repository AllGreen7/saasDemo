<template>
  <div id="lunpan">
    <div class="first">
      <!-- <div>万和小区</div>
      <div>东关市场</div>
      <div>人民法院</div>
      <div>园林绿化处</div> -->
      <div class="second">
        <!-- <div>万和小区</div>
        <div>东关市场</div>
        <div>人民法院</div>
        <div>园林绿化处</div> -->
        <div class="third">
          <!-- <div>万和小区</div>
          <div>东关市场</div>
          <div>人民法院</div>
          <div>园林绿化处</div> -->
          <div class="forth">
            最里层
          </div>
        </div>
      </div>
    </div>

    <div class="test">
      <div class="item">休闲娱乐</div>
      <div class="item">休闲娱乐</div>
      <div class="item">休闲娱乐</div>
      <div class="item">休闲娱乐</div>
      <div class="item">休闲娱乐</div>
      <div class="item">休闲娱乐</div>
      <div class="item">休闲娱乐</div>
      <div class="item">休闲娱乐</div>
      <div class="item">休闲娱乐</div>
      <div class="item">休闲娱乐</div>
      <div class="item">休闲娱乐</div>
      <div class="item">休闲娱乐</div>
    </div>

    <!-- 之后有时间用canvas试一下。纯css写的圆无法实现那种字弯曲的效果 -->
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  mounted(){
  },
  methods:{
  }
}
</script>

<style lang='scss'>
#lunpan{
  height: 100%;
  overflow: auto;
  .first{
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 50%;
    background: skyblue;
    .second{
      width: 300px;
      height: 300px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 50%;
      background: green;
      .third{
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 50%;
        background: grey;
        .forth{
          width: 100px;
          height: 100px;
          border-radius: 50%;
          text-align: center;
          line-height: 100px;
          background: white;
        }
      }
    }
  }

  .test{
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: space-around;
    position: relative;
    background: skyblue;
    border-radius: 50%;
    .item{
      width: 100px;
      height: 50px;
      position: absolute;
      top: 50%;
      line-height: 50px;
      color:#fff;
      background: green;
      transform-origin: center;
    }
    .item:nth-child(1){
      transform: translate(0, -225px) rotateZ(0deg);
    }
    .item:nth-child(2){
      transform: translate(100px, -200px) rotateZ(30deg);
    }
    .item:nth-child(3){
      transform: translate(175px, -125px) rotateZ(60deg);
    }
    .item:nth-child(4){
      transform: translate(200px, -25px) rotateZ(90deg);
    }
    .item:nth-child(5){
      transform: translate(175px, 75px) rotateZ(120deg);
    }
    .item:nth-child(6){
      transform: translate(100px, 150px) rotateZ(150deg);
    }
    .item:nth-child(7){
      transform: translate(0, 175px) rotateZ(180deg);
    }
    .item:nth-child(8){
      transform: translate(-100px, 150px) rotateZ(210deg);
    }
    .item:nth-child(9){
      transform: translate(-175px, 75px) rotateZ(240deg);
    }
    .item:nth-child(10){
      transform: translate(-200px, -25px) rotateZ(270deg);
    }
    .item:nth-child(11){
      transform: translate(-175px, -125px) rotateZ(300deg);
    }
    .item:nth-child(12){
      transform: translate(-100px, -200px) rotateZ(330deg);
    }
  }
  

}
</style>