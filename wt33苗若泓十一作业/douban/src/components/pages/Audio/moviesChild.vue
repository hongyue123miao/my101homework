<template>
 
    <div class="moviesChildBoxItem">
      <p class="moviesChildimg"><img :src=imgone></p>
      <p class="moviesChildtitle">{{title1}}</p>
      <p class="moviesChildrate">评分:{{score1}}</p>
    </div>
 
</template>

<script>
export default {
    props:['imgone','title1','score1']
};
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
.moviesChildBoxItem {
  display: inline-block;
  text-align: center;
  width: 33.33333333333333333333333%;
  //    outline: 1px solid blue;
  .moviesChildimg {
    width: 100%;
    height: 260/100rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>