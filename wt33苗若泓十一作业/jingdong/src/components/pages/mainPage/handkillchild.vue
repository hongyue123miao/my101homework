<template>
  <li class="handchildLi">
    <img :src=sc><br />
    <span class="nowprice">{{np}}</span><br />
    <span class="preprice">{{pre}}</span>
  </li>
</template>

<script>
export default {
    props:['sc','np','pre'],
    data(){
        return{
           
        }
    }
};
</script>

<style lang='less'>
.handchildLi {
list-style: none;
  text-align: center;
  width: 25%;
  img {
    width: 100%;
    height: 200/100rem;
    // border: 1px solid blue;
  }
}
.nowprice {
  color: #d43d4a;
  font-weight: bold;
  font-size: 30/100rem;
}
.preprice {
  // color: #d43d4a;
  // font-weight: bold;
  font-size: 20/100rem;
  text-decoration: line-through;
}
</style>