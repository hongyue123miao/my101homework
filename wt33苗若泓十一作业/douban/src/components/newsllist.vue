<template>
  <li class="homelistLi">
    <div class="liboxleft">
      <div class="title">
        {{ title}}<br />
      </div>
      <div class="title2">
        {{desc}}<br/>
        
      </div>
      <div class="authorLine">作者：<span>{{author}}</span></div>
    </div>
    <!-- liboxleft结束 -->
    <div class="liboxright">
      <img :src='imgs'/>
    </div>
  </li>
</template>

<script>
export default {
  props: ["title",'desc','author','imgs'],

};
</script>

<style lang='less'>
*{margin: 0;padding: 0;}
.homelistLi {
  box-sizing: border-box;
  padding: 20/100rem;
  padding-bottom: 30/100rem;
  justify-content: space-around;
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
  display: flex;
  width: 100%;
  .liboxleft {
    // border:1px solid black;
    width: 70%;
  }
  .liboxright {
    width: 30%;
    
    // border: 1px solid red;
    img{
        width:100%;
        height: 100%;
    }
  }
  .authorLine{
    color: #dededf;
  }
  .title{
    color: black;
    font-size: 25/100rem;
  }
  .title2{
    font-size: 15/100rem;
    color: #c0bab3;
  }
}
</style>