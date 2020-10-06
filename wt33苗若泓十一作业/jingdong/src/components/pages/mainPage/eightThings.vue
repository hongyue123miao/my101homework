<template>
  <li class="eightThingsMain">
      <img :src=srcc><br/>
       <!-- <img src="../../../assets/images/mainPageImg/nav0.png"><br> -->
      <span>{{namec}}</span>
     
  </li>
</template>

<script>
export default {
   props:['namec','srcc']
}
</script>

<style lang='less'>
    .eightThingsMain{

        list-style: none;
        text-align: center;
        // padding-top: 15/100rem;
        box-sizing: border-box;
        width: 25%;
        img{
            width: 100/100rem;
            height: 100/100rem;
        }
        // border: 1px solid red;
    }
</style>