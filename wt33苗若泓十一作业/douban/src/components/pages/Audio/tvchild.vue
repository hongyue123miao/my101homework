<template>
  <div class="tvchildLi">
      <div class="tvchildLiImg"><img :src=imgsrc></div>
       <div class="tvchildLirate">评分:{{rate}}</div>
        <div class="tvchildLititle">{{title}}</div>
  </div>
</template>

<script>
export default {
    props:["imgsrc","rate","title"]
}
</script>

<style lang='less'>
    .tvchildLi{
        display: inline-block;
        width: 50%;
        // border: 1px solid blue;
        box-sizing: border-box;
        height: 360/100rem;
        padding-top: 30/100rem;
        padding-bottom: 30/100rem;
        text-align: center;
        img{
            width: 300/100rem;
            height: 300/100rem;
        }
    }
</style>