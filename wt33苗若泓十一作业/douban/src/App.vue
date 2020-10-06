<template>
  <div id="app">
    <router-view />
    <Tabbar v-if='showtabBar'></Tabbar>
  </div>
</template>

<script>
import { obj } from "../static/utlis/utlis.js";
import Tabbar from "../src/components/tabbar.vue";

export default {
  name: "App",
  components: {
    Tabbar,
  },
  mounted() {
    obj.setRem();
   
  },
  data(){
    return{
      showtabBar:true
    }
  },
   watch:{
    $route(to,from){
      // console.log("watch $route(to,from), ",to,from);
      if(to.name =="login"){
        this.showtabBar = false;
      }else{
         this.showtabBar = true;
      }
    }
  }
};
</script>

<style lang='less'>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  font-size: 16/100rem;
}
</style>
