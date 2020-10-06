<template>
  <div class="citychildLi">
      <div class="citychildLiTitle"><img :src=imgsrc></div>
       <div class="citychildLiTitle">{{title}}</div>
  </div>
</template>

<script>
export default {
props:["title",'imgsrc']
}
</script>

<style lang='less'>
    .citychildLi{
        display: flex;
        align-items: center;
        width: 80%;
    }
</style>