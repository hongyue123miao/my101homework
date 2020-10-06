<template>
 
    <div class="moviesChildBoxItem">
      <p class="moviesChildimg"><img :src=imgtwo></p>
      <p class="moviesChildtitle">{{title2}}</p>
      <p class="moviesChildrate">评分:{{score2}}</p>
    </div>
 
</template>

<script>
export default {
    props:['imgtwo','title2','score2']
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
  padding: 10/100rem;
  box-sizing: border-box;
  width: 33.33333333333333333333333%;
  //    outline: 1px solid blue;
  .moviesChildimg {
    width: 100%;
    height: 320/100rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>