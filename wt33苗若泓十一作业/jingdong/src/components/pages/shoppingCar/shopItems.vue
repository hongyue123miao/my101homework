<template>
  <div class="shopItemsMain">
    <div class="fakeGrey"></div>
    <div class="shopItemsMain-top">商品用劵满99元（20kg内）免运费</div>
    <div class="shopItemsMain-main">
      <div>
        <i class="shopItemsMain-main-L" @click="isactive" :class="{active:resshows}" ></i>
      </div>
      <div><img :src="src" /></div>
      <div class="shopItemsMain-main-R">
        <div>{{ title }}</div>
        <div class="price">
          ￥<span>{{ price }}</span
          >.00
        </div>
        <div class="counts">
          <span @click="reduce">-</span>
          <span>{{ num }}</span>
          <span @click='plus'>+</span>
        </div>
      </div>
    </div>
    <div class="bin iconfont" @click="remove">&#xe663;</div>
  </div>
</template>

<script>
export default {
  props: [
    "src",
    "title",
    "price",
    "indexs",
    "catchindexs",
    "num",
    "getreducenum",
    "getplusnum",
    'getTotal',
    'getremove',
    'ifshows',
    'checkifshows',
    'resshows'
  ],
  computed: {
   
  },

  methods: {
   
    isactive(){
      // console.log(this.ifshows);
      this.$emit('actives',this.ifshows,this.indexs)
        
    },
      reduce(){
          if(this.indexs==this.getreducenum){
             this.$emit('getr',this.num,this.indexs)
          }
       
      },
      plus(){
          if(this.indexs==this.getplusnum){
             this.$emit('getp',this.num,this.indexs)
          }
        
      },
      remove(){
          if(this.indexs==this.getplusnum){
             this.$emit('getremove',this.num,this.indexs)
          }
      }
  },
};
</script>

<style  lang='less'>
.active {
  background-color: #c00101;
  border: 1px solid white;
}
.fakeGrey {
  box-sizing: border-box;
  //   border: 1px solid black;
  background-color: #f5f5f5;
  height: 30/100rem;
  width: 100%;
}
.bin {
  position: absolute;
  bottom: 20/100rem;
  right: 10/100rem;
  font-size: 35/100rem;
}
.counts {
  display: flex;
  height: 35/100rem;
  line-height: 35/100rem;
  width: 130/100rem;
  //   border: 1px solid red;
  text-align: center;
  span {
    flex: 1;
    text-align: center;
    border: 1px solid gainsboro;
  }
}
.shopItemsMain {
  box-sizing: border-box;
  border-bottom: 1px solid gainsboro;
  background-color: white;
  position: relative;
  width: 100%;
  .shopItemsMain-top {
    text-indent: 20/100rem;
    height: 50/100rem;
    box-sizing: border-box;
    line-height: 50/100rem;
    border-bottom: 1px solid gray;
  }
  img {
    width: 150/100rem;
    width: 150/100rem;
  }
}
.shopItemsMain-main {
  display: flex;
  height: 200/100rem;
  align-items: center;
  //   background-color: red;
  justify-content: space-around;
}

.shopItemsMain-main-L {
  display: inline-block;
  width: 30/100rem;
  height: 30/100rem;
  border: 1px solid gray;
  margin-bottom: 100/100rem;
  box-sizing: border-box;
  border-radius: 50%;
}

.shopItemsMain-main-R {
  //   border: 1px solid black;
  width: 50%;
  div {
    margin-top: 10/100rem;
  }
}
</style>