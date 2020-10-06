<template>
  <div>
     <div class="readtitle">
       新书速递
     </div>
     
       <ReadChild v-for="(item,index) in arrs" :key="index" :src="item.cover_url" :title="item.title" :aut="item.author">

       </ReadChild>
   
  </div>
</template>

<script>
import ReadChild from './readChild.vue'
export default {
  components:{
    ReadChild
  },
  data(){
    return{
      arrs:[]
    }
  },
  mounted() {
    this.$axios.get('../../../static/data/read.json')
    .then(res=>{
      console.log(res.data.recommend_one)
      this.arrs=res.data.recommend_one
    })
  },
}
</script>

<style lang='less'>
  .readtitle{
    font-size: 30/100rem;
    font-weight: bold;
    text-indent: 20/100rem;
    height: 80/100rem;
    line-height: 80/100rem;
    // border: 1px solid black;
  }
</style>