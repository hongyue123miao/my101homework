<template>
  <div>
      <div class="tvTitle">电视</div>
      <div class="tvUl">
          <Tvchild v-for="(item,index) in arr" :key="index" :imgsrc="item.cover" :rate="item.rate" :title="item.title">

          </Tvchild>
      </div>
  </div>
</template>

<script>
import Tvchild from './tvchild'
export default {
  components:{
    Tvchild
  },
  data(){
    return{
      arr:[]
    }
  },
  mounted() {
    this.$axios.get('../../../static/data/tv.json')
    .then(res=>{
      console.log(res.data.subjects);
      this.arr=res.data.subjects
    })
  },
}
</script>

<style lang='less'>
  .tvTitle{
    border-bottom: 1px solid gainsboro;
    height: 80/100rem;
    line-height: 80/100rem;
    text-indent: 20/100rem;
  }
  .tvUl{
    box-sizing: border-box;
    padding-bottom: 90/100rem;
    }
</style>