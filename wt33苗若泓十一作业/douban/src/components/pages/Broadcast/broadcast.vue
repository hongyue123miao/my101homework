<template>
  <div>
    <PublicHead fontTitle='广播'>
        <template #imgright1>
          <img src="../../../assets/publicHeadImg/ic_status_search_user.png">
        </template>
        <template #imgright2>
          <img src="../../../assets/publicHeadImg/ic_chat_green.png">
        </template>
    </PublicHead>
     <div class="exheader">
       <span class="iconfont exheadericon">&#xe66b;</span>
      <span class="exheaderLogin">
        <router-link to="/login">登录发广播</router-link>
      </span>
     </div>
    <Broadcast></Broadcast>
    <ul class="broadcastmainUl">
       <Broadcastmain v-for='(item,index) in arr' :key='index' :title="item.title" :main='item.main'>
       
       </Broadcastmain>
    </ul>
  </div>
</template>

<script>
import PublicHead from '../../publicHead.vue'
import Broadcast from './loginBroadCast.vue'
import Broadcastmain from './broadcastmain.vue'
export default {
  components:{
    PublicHead,
    Broadcast,
    Broadcastmain
  },
    data(){
    return{
      arr:[]
    }
  },
  mounted() {
    this.$axios.get('../../../static/data/city.json')
    .then(res=>{
      console.log(res.data.city);
      this.arr=res.data.city
    })
  },

}
</script>

<style lang='less'>
.exheader{
  margin-left: 30/100rem;
  margin-top: 66/100rem;
  height: 100/100rem;
  line-height: 100/100rem;
}
.exheaderLogin{
  a{
    font-size: 25/100rem;
    text-decoration: none;
    color: gainsboro;
  }
}
.exheadericon{
  display: inline-block;
  width: 60/100rem;
  height: 60/100rem;
  line-height: 60/100rem;
  vertical-align: middle;
  color: white;
  text-align: center;
  font-size: 50/100rem;
  border-radius: 50%;
  background-color: #dedede;
}
  .broadcastmainUl{
    padding-bottom: 80/100rem;
  }
  .bgGrey{
    background-color: gainsboro;
  }
</style>