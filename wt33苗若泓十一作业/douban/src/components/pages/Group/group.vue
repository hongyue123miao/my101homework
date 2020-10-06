<template>
  <div>
    <PublicHead fontTitle='小组'>
        <template #imgright1>
          <img src="../../../assets/publicHeadImg/ic_actionbar_search_icon.png">
        </template>
        <template #imgright2>
          <img src="../../../assets/publicHeadImg/ic_chat_green.png">
        </template>
    </PublicHead>
    <div class="groupbox">
      <div class="groupboxTitle">新组速报</div>
      <Groupchild1 v-for='(item,index) in arr1' :key='index' :imgone='item.img_url' :title1='item.group_name' :main1='item.topic_title' :num1='item.group_member'>

      </Groupchild1>
      <div class="moreGroup">更多相关小组</div>
      <div>
          <div class="groupbox2">热门小组</div>
          <Groupchild2 v-for='(item,index) in arr2' :key='index' :imgtwo='item.img_url' :title2='item.group_name' :main2='item.topic_title' :num2='item.group_member'>

          </Groupchild2>
      </div>
    </div>
  </div>
</template>

<script>
import PublicHead from '../../publicHead.vue'
import Groupchild1 from '@/components/pages/Group/groupchild1'
import Groupchild2 from '@/components/pages/Group/groupchild2'
export default {
  components:{
    PublicHead,
    Groupchild1,
    Groupchild2
  },
  mounted() {
    this.$axios.get('../../../static/data/groupData.json')
    .then(res=>{
      this.arr1=res.data.group[0].group_list
      }),
       this.$axios.get('../../../static/data/groupData.json')
    .then(res=>{
      this.arr2=res.data.group[1].group_list
      })
  },
  data(){
    return{
      arr1:[],
       arr2:[]
    }
  }
}
</script>

<style lang='less'>
  .groupbox{
    margin-top: 66/100rem;
  }

  .groupboxTitle,.groupbox2{
    text-indent: 20/100rem;
    height: 80/100rem;
    font-size: 25/100rem;
    line-height: 80/100rem;
  }

  .moreGroup{
    text-align: center;
    margin: 0 auto;
    margin-top: 20/100rem;
     color: #96daa2;
  }
</style>