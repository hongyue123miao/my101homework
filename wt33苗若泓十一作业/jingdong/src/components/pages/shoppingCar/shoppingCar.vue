<template>
  <div>
    <div class="shopCarTitle">
      <div class="shopCarTitle-L iconfont">&#xe606;</div>
      <div class="shopCarTitle-M">购物车</div>
      <div class="shopCarTitle-R iconfont">&#xe605;</div>
    </div>
    <div class="safeToshoping">
      <span class="iconfont iconfonforDef">&#xe607;</span>
      <span>您正在安全购物环境中，请放心购物</span>
    </div>
    <ShopItems
      :getsingleT="singlePriceTotal"
      @getremove="willremove"
      @getr="willreduce"
      @getp="willplus"
      :indexs="index"
      :getreducenum="index"
      :getplusnum="index"
      v-for="(item, index) in arr"
      :key="index"
      :num="item.num"
      :src="item.imgsrc"
      :title="item.title"
      :price="item.price"
      :ifshows="item.ifshow"
      @actives="getactive"
      :resshows="item.ifshow"
    >
      <!-- 需要循环 -->
    </ShopItems>
    <div class="leaveBottom"></div>

    <ShopBottomTap :sums="sum" @checkfull="iffull" :full="checkfull">
    </ShopBottomTap>
  </div>
</template>

<script>
import ShopBottomTap from "./shopBottomTap";
import ShopItems from "./shopItems";

export default {
  components: {
    ShopBottomTap,
    ShopItems,
  },
  methods: {
    iffull(val) {
      val = !val;
      this.checkfull = val;
      this.allcontrol = val;
      console.log(this.allcontrol);
      if(this.allcontrol){
       for(let i=0;i<this.arr.length;i++){
         this.arr[i].ifshow=true
       }
      }else{
         for(let i=0;i<this.arr.length;i++){
         this.arr[i].ifshow=false
       }
      }
    },
    getactive(val, val2) {
      this.arr[val2].ifshow = !val;
      // console.log(this.arr[val2].ifshow);
    },

    willremove(val, val2) {
      this.arr.splice(val2, 1);
    },
    willreduce(val, val2) {
      if (val == 1) {
        val = 1;
      } else {
        val--;
        this.arr[val2].num = val;
      }
    },
    willplus(val, val2) {
      if (val == 10) {
        val = 10;
      } else {
        val++;
        this.arr[val2].num = val;
      }
    },
  },

  computed: {
    sum() {
      var sum = 0;
      for (let i = 0; i < this.arr.length; i++) {
        sum += this.arr[i].num * this.arr[i].price;
      }
      return sum;
    },
  },

  data() {
    return {
      allcontrol: "",
      checkfull: false,
      singlePriceTotal: "",
      getreducenum: "",
      arr: [
        {
          imgsrc: require("../../../assets/images/shopcarsImg/detail01.jpg"),
          title: "[豪华套装版]一加手机st 6GB+64GB 星辰黑 高性能全...",
          price: 3000,
          num: 1,
          ifshow: false,
        },
        {
          imgsrc: require("../../../assets/images/shopcarsImg/detail02.jpg"),
          title: "清风(App)卷纸原木纯品全装系列4层169克24卷（整箱销售）",
          price: 100,
          num: 1,
          ifshow: false,
        },
        {
          imgsrc: require("../../../assets/images/shopcarsImg/detail03.jpg"),
          title: "广西 青芒 芒果 2.5 kg 单果重约250g以上 新鲜水果",
          price: 29.9,
          num: 1,
          ifshow: false,
        },
        {
          imgsrc: require("../../../assets/images/shopcarsImg/detail04.jpg"),
          title: "包邮 Vue.js实战",
          price: 49,
          num: 1,
          ifshow: false,
        },
      ],
    };
  },
};
</script>

<style lang='less'>
.iconfonforDef {
  color: #7cdfc6;
  margin-right: 10/100rem;
}
.shopCarTitle {
  color: gray;
  font-size: 26/100rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  height: 66/100rem;
  background: linear-gradient(#fcfcfc, #f8f8f8, #f2f2f2);
}

.shopCarTitle-R {
  margin-right: 8/100rem;
}
.shopCarTitle-L {
  margin-left: 8/100rem;
}

.safeToshoping {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 66/100rem;
  height: 55/100rem;
  // border: 1px solid black;
}

.leaveBottom {
  height: 120/100rem;
}
</style>