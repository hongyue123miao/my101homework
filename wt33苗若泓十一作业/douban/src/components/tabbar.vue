<template>
  <ul class="bottomUl">
    <Item title="首页"  index='home' @change='getv'  :hasselected="selected">
        <template #normalImg>
               <img src="../assets/tabbarimg/ic_tab_home_normal.png">
        </template>
         <template #activeImg>
               <img src="../assets/tabbarimg/ic_tab_home_active.png">
        </template>
    </Item>

    <Item title="书影音"  index='audio'  @change='getv'  :hasselected="selected">
         <template #normalImg>
               <img src="../assets/tabbarimg/ic_tab_subject_normal.png">
        </template>
         <template #activeImg>
               <img src="../assets/tabbarimg/ic_tab_subject_active.png">
        </template>
    </Item>
    <Item title="广播"  index='broadcast'  @change='getv' :hasselected="selected" >
         <template #normalImg>
               <img src="../assets/tabbarimg/ic_tab_status_normal.png">
        </template>
         <template #activeImg>
               <img src="../assets/tabbarimg/ic_tab_status_active.png">
        </template>
    </Item>
    <Item title="小组"  index='group'  @change='getv' :hasselected="selected">
        <template #normalImg>
               <img src="../assets/tabbarimg/ic_tab_group_normal.png">
        </template>
         <template #activeImg>
               <img src="../assets/tabbarimg/ic_tab_group_active.png">
        </template>
    </Item>
     <Item title="我的"  index='mine'  @change='getv' :hasselected="selected">
        <template #normalImg>
               <img src="../assets/tabbarimg/ic_tab_profile_normal.png">
        </template>
         <template #activeImg>
               <img src="../assets/tabbarimg/ic_tab_profile_active.png">
        </template>
    </Item>
  </ul>
</template>

<script>
import Item from "./item.vue";
export default {
  components: {
    Item,
  },
  data(){
      return{
          selected:'home'
      }
  },
  methods: {
      getv(val){
          this.selected=val
          if(this.selected=='audio'){
          
            this.$router.push({path: "/"+this.selected+'/movies'});
          }else{
                this.$router.push({path: "/"+this.selected});
          }
        
      }
  },
};
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
.bottomUl {
  // border: 1px solid black;
  // box-sizing: border-box;
  width: 100%;
  height: 80/100rem;
  background-color: #f1f1f1;
  position: fixed;
  bottom: 0/100rem;
  display: flex;
  justify-content: space-around;
}
</style>