<template>
  <li class="threeIconchildLi">
     <span class="iconfont">{{icon}}</span><br>
     <span>{{title}}</span>
  </li>
</template>

<script>
export default {
props:['icon','title']
}
</script>

<style lang='less'>
    .threeIcon{
        width: 100%;
        display: flex;
        align-items: center;
        border:1px solid gainsboro;
        justify-content: space-around;
        height:140/100rem;
        // background-color: gainsboro;
    }
    .threeIconchildLi{
        list-style: none;
        text-align: center;
        .iconfont{
            font-size: 80/100rem;
        }
    }
</style>