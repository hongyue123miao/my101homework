<template>
  <div id="app">
    <router-view/>
    <Tabbar v-show='shows'></Tabbar>
  </div>
</template>

<script>
import {obj} from '../static/setRem/utlis.js'
import Tabbar from '@/components/pages/tabbar/tabbar.vue'
export default {
  name: 'App',
  data(){
    return{
      shows:true
    }
  },
  components:{
    Tabbar
  },
  mounted(){
    obj.setRem()
  },
  watch:{
    $route(to){
      if(to.path=='/shoppingCar'){
        this.shows=false
      }else{
        this.shows=true
      }
    }
  }
}
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  font-size: 16/100rem;
}
</style>
