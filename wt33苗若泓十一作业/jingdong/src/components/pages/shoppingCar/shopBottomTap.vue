<template>
  <div class="shopBottomTap">
  
    <div class="shopBottomTap-L">
      <div class="shopBottomTap-L-leftmain"><i class="iconcircle" @click="fulls" :class="{active:full}"></i>全选</div>

      <div class="shopBottomTap-L-rightmain">
        <div>合计：￥<span>{{sums}}</span></div>
        <div>总额：￥<span>{{sums}}</span><span>返现：￥0.0</span></div>
      </div>
    </div>
   
    <div class="shopBottomTap-R">
     
      <span>去结算：<span>{{sums}}</span></span>
    </div>
  </div>
</template>

<script>
export default {
  data(){return{showit:false}},
  props:['sums','full'],
  methods: {
    fulls(){
      // console.log("this.full:"+this.full);
      this.$emit('checkfull',this.full)
     
     
    }
  },
};
</script>

<style lang='less'>
.active {
  background-color: #c00101;
  border: none;
}
.shopBottomTap {
  display: flex;
  height: 100/100rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
//   border: 1px solid red;
  .shopBottomTap-L {
    font-size: 26/100rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 100%;
    background-color: #313131;
    .shopBottomTap-L-leftmain{
        // border: 1px solid white;
        margin-right: 15/100rem;
    }
    .iconcircle{
        margin-right: 10/100rem;
        vertical-align: middle;
        display: inline-block;
        border: 1px solid white;
        width: 25/100rem;
        height: 25/100rem;
        border-radius: 50%;
    }
  }

  .shopBottomTap-R {
    font-size: 25/100rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 30%;
    height: 100%;
    background-color: #d8505c;
  }
}
</style>