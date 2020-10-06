<template>
  <div>
      <div class="citytitle">
        同城
      </div>

      <div class="citybox">
        <Citychild v-for="(item,index) in arr" :key="index" :title="item.group_name" :imgsrc="item.img_url">

        </Citychild>

         <Citychild2 v-for="(item) in arr2" :key="item.groupname" :title="item.group_name" :imgsrc="item.img_url">
          
        </Citychild2>
      </div>
  </div>
</template>

<script>
import Citychild from './citychild'
import Citychild2 from './citychild2'
export default {
  components:{
    Citychild,
    Citychild2
  },
  data(){
    return{
      arr:[],
      arr2:[]
    }
  },
  mounted() {
    this.$axios.get('../../../static/data/city2.json')
    .then(res=>{
      console.log(res.data.city[1].city_list);
      this.arr=res.data.city[0].city_list
      this.arr2=res.data.city[1].city_list
    })
  },
}
</script>

<style lang='less'>
  .citytitle{
    text-indent: 20/100rem;
    height: 60/100rem;
    line-height: 60/100rem;
    // border: 1px solid black;
  }
  .citybox{
   padding-bottom: 90/100rem;
  }
</style>