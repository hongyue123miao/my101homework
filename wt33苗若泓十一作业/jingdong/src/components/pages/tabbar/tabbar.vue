<template>
  <div class="tabbarMain" >
        <tabbarChild getindex='mainPage' @change='getv' :resindex='shows'>
        <template #normalImg>
           <span class="normalImg"><img src="../../../assets/images/tabbarImg/icon-home.png"></span>
        </template>

        <template #activeImg>
           <span class="activeImg"><img src="../../../assets/images/tabbarImg/icon-home-active.png"></span>
        </template>
    </tabbarChild>


     <tabbarChild getindex='kinds'  @change='getv' :resindex='shows'>
        <template #normalImg>
           <span class="normalImg"><img src="../../../assets/images/tabbarImg/icon-catergry.png"></span>
        </template>

        <template #activeImg>
           <span class="activeImg"><img src="../../../assets/images/tabbarImg/icon-catergry-active.png"></span>
        </template>
    </tabbarChild>


     <tabbarChild getindex='find'  @change='getv' :resindex='shows'>
        <template #normalImg>
           <span class="normalImg"><img src="../../../assets/images/tabbarImg/icon-find.png"></span>
        </template>

        <template #activeImg>
           <span class="activeImg"><img src="../../../assets/images/tabbarImg/icon-find-active.png"></span>
        </template>
    </tabbarChild>

     <tabbarChild getindex='shoppingCar'  @change='getv' :resindex='shows'>
        <template #normalImg>
           <span class="normalImg"><img src="../../../assets/images/tabbarImg/icon-cart.png"></span>
        </template>

        <template #activeImg>
           <span class="activeImg"><img src="../../../assets/images/tabbarImg/icon-cart - active.jpg"></span>
        </template>
    </tabbarChild>

     <tabbarChild getindex='mine'  @change='getv' :resindex='shows'>
        <template #normalImg>
           <span class="normalImg"><img src="../../../assets/images/tabbarImg/icon-me.png"></span>
        </template>

        <template #activeImg>
           <span class="activeImg"><img src="../../../assets/images/tabbarImg/icon-me-active.png"></span>
        </template>
    </tabbarChild>
  </div>



</template>

<script>
import tabbarChild from "./tabbarchild";
export default {
  components: {
    tabbarChild,

  },
  data(){
    return{
      shows:'mainPage'
    }
  },
  methods:{
    getv(val){
        this.shows=val
        this.$router.push('./'+val)
    }
  }
};
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
.tabbarMain {
   z-index: 12;
  display: flex;
  background-color: white;
  height: 100/100rem;
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>