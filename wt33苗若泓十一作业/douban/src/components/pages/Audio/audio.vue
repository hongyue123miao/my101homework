<template>
  <div>
    <PublicHead fontTitle='书影音'>
        <template #imgright1>
          <img src="../../../assets/publicHeadImg/ic_actionbar_search_icon.png">
        </template>
        <template #imgright2>
          <img src="../../../assets/publicHeadImg/ic_chat_green.png">
        </template>
    </PublicHead>
    <div class="audioNav">
      <span :class="{selectedGreen:curindex==0}" @click='curindex=0'><router-link to='/audio/movies'>电影</router-link></span>
      <span :class="{selectedGreen:curindex==1}" @click='curindex=1'><router-link to='/audio/read'>读书</router-link></span>
      <span :class="{selectedGreen:curindex==2}" @click='curindex=2'><router-link to='/audio/tv'>电视</router-link></span>
      <span :class="{selectedGreen:curindex==3}" @click='curindex=3'><router-link to='/audio/city'>同城</router-link></span>
      <span :class="{selectedGreen:curindex==4}" @click='curindex=4'><router-link to='/audio/music'>音乐</router-link></span>
    </div>
      <div>
        <router-view></router-view>
      </div> 
  </div>
  
</template>

<script>
import PublicHead from '../../publicHead.vue'
export default {
  components:{
    PublicHead
  },
  data(){
      return{
        curindex:0
      }
  }
}
</script>
<style lang="less">
  .audioNav{
    width: 100%;
    display: flex;
    margin-top: 66/100rem;
    span{ 
      // outline: 1px solid red; 
      border-top: 1px solid gray;
       border-bottom: 1px solid gray;
      text-align: center;
      width: 20%;
      height: 40/100rem;
      line-height: 40/100rem;
      a{
        color: gainsboro;
        text-decoration: none;
      }
      
    };
  }
  .selectedGreen{
        background-color: #07d614;
        a{
          color: white!important;
        }
      }
</style>

