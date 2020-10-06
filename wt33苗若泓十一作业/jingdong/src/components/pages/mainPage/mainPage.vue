<template>
  <div class="mainPageMain">
    <div class="mainPageTop">
      <div class="lefttop">
        <span class="turningRed">JD</span>
        <i class="iconfont">&#xe601;</i>
        <span><input type="text" placeholder="请输入你要查找的内容" /></span>
      </div>
      <div class="righttop">登录</div>
    </div>
    <Banners></Banners>
    <ul class="EightThingsUl">
      <EightThings
        v-for="(item, index) in datalist"
        :key="index"
        :namec="item.names"
        :srcc="item.src"
      >
      </EightThings>
    </ul>
    <div class="unknowBg">
      <img src="../../../assets/images/mainPageImg/fuli.jpg" alt="" />
    </div>

    <div class="handKill">
      <div class="handKilltop">
        <span
          ><img
            src="../../../assets/images/mainPageImg/seckill-icon.png"
            id="clock1"
        /></span>
        <span class="turningRed">掌上秒杀</span>
        <span class="clockWillreduce">{{ time }}</span>
        <span class="rightssss">精选轮番秒</span>
      </div>
      <ul class="killUl">
        <Handkillchild
          v-for="(item, index) in arrs"
          :key="index"
          :sc="item.src"
          :np="item.nowPrice"
          :pre="item.pathPrice"
        >
        </Handkillchild>
      </ul>
    </div>
    <div class="lovelife"></div>
    <div class="threepagewired">
      <div class="threepagewired-l">
        <img src="../../../assets/images/mainPageImg/cp1.jpg" />
      </div>

      <div class="threepagewired-r">
        <div class="threepageImg1">
          <img src="../../../assets/images/mainPageImg/cp2.jpg" />
        </div>
        <div class="threepageImg2">
          <img src="../../../assets/images/mainPageImg/cp3.jpg" />
        </div>
      </div>
    </div>
    <div class="recommend">
      <span class="recommend-f"><i class="iconfont">&#xe602;</i>为您推荐</span>
    </div>

    <!-- ulshoplist -->
    <ul class="shoplist">
      <Shoplistchild
        v-for="(item, i) in arr2"
        :key="i"
        :imgsrc="item.imgsrc"
        :goodName="item.name"
        :price="item.price"
        :rate="item.rate"
      >
      </Shoplistchild>
    </ul>
    <ul class="logandbackTop">
      <LogandbackTopchild>
        <template #name1> 登录 </template>
      </LogandbackTopchild>
      <LogandbackTopchild>
        <template #name1> 注册 </template>
      </LogandbackTopchild>
      <LogandbackTopchild>
        <template #name1> 反馈 </template>
      </LogandbackTopchild>
      <LogandbackTopchild>
        <template #name1> 返回顶部 </template>
      </LogandbackTopchild>
    </ul>

    <ul class="threeIcon">
      <ThreeIconchild
        v-for="(item, indexs) in list3"
        :key="indexs"
        :icon="item.iconf"
        :title="item.name"
      >
      </ThreeIconchild>
    </ul>
    <div class="copyright">Copyright @ 2004-2018 京东JD.com版权所有</div>

    <div class="btt">
      <nut-backtop :distance="400"> </nut-backtop>
    </div>
   
  </div>
</template>

<script>
//  src:'../../../assets/images/mainPageImg/nav0.png',
// names:'分类查询'
import "@/assets/font/iconfont.css";
import Banners from "./banners";
import EightThings from "./eightThings";
import Handkillchild from "./handkillchild";
import Shoplistchild from "./shoplistchild";
import LogandbackTopchild from "./logandbackTopchild";
import ThreeIconchild from "./threeIconchild";
EightThings;
export default {
  components: {
    Banners,
    EightThings,
    Handkillchild,
    Shoplistchild,
    LogandbackTopchild,
    ThreeIconchild,
  },
  mounted() {
    this.$axios.get("../../../static/data/salefast.json").then((res) => {
      this.arrs = res.data.sales;
    }),
      this.$axios.get("../../../static/data/shoplist.json").then((res) => {
        this.arr2 = res.data.shoplist;
        // console.log(res.data.shoplist);
      }),
      this.timer=setInterval(() => {
        console.log(this.counted())
        this.time =  this.counted()
      }, 1000);
  },
  methods: {
    counted() {
      const c = +new Date()
      let times = (this.wirteDate - c) / 1000;
      let h = parseInt((times / 60 / 60) % 24);
      h = h < 10 ? "0" + h : h;
      let m = parseInt((times / 60) % 60);
      m = m < 10 ? "0" + m : m;
      let s = parseInt(times % 60);
      s = s < 10 ? "0" + s : s;
      return h + ":" + m + ":" + s;
    },
  },
  data() {
    return {
      time: '',
      clocks:'',
      list3: [
        {
          iconf: "\ue6cb",
          name: "客户端",
        },
        {
          iconf: "\ue625",
          name: "触控板",
        },
        {
          iconf: "\ue617",
          name: "电脑屏",
        },
      ],
      arrs: [],
      arr2: [],
      nowdate: +new Date(),
      wirteDate: +new Date(2020, 11, 2, 0, 0, 0),
      datalist: [
        {
          // src:'../../../assets/images/mainPageImg/nav0.png',
          src: require("../../../assets/images/mainPageImg/nav0.png"),
          names: "分类查询",
        },
        {
          src: require("../../../assets/images/mainPageImg/nav1.png"),
          names: "物流查询",
        },
        {
          src: require("../../../assets/images/mainPageImg/nav2.png"),
          names: "购物车",
        },
        {
          src: require("../../../assets/images/mainPageImg/nav3.png"),
          names: "我的京东",
        },
        {
          src: require("../../../assets/images/mainPageImg/nav4.png"),
          names: "京东生鲜",
        },
        {
          src: require("../../../assets/images/mainPageImg/nav5.png"),
          names: "领劵中心",
        },
        {
          src: require("../../../assets/images/mainPageImg/nav6.png"),
          names: "京东超市",
        },
        {
          src: require("../../../assets/images/mainPageImg/nav7.png"),
          names: "我的关注",
        },
      ],
    };
  },
};
</script>

<style lang='less'>
.turningRed {
  font-size: 30/100rem;
  color: #dd646d;
}
.mainPageTop {
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  top: 0;
  height: 66/100rem;
  margin: 0 auto;
  // border: 1px solid red;
  .lefttop {
    margin-left: 20/100rem;
    text-indent: 20/100rem;
    line-height: 50/100rem;
    height: 50/100rem;
    width: 80%;
    background-color: white;
    border-radius: 30/100rem;
    // border:1px solid blue;
    input {
      border: none;
      outline: none;
    }
  }

  .righttop {
    height: 40/100rem;
    text-align: center;
    line-height: 40/100rem;
    width: 20%;
    // background-color: black;
    color: white;
    // border:1px solid green;
  }
}

.EightThingsUl {
  display: flex;
  flex-wrap: wrap;
  // align-items: center;
  width: 100%;
  height: 310/100rem;
  // background-color: gainsboro;
  padding: 10/100rem;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
}

.unknowBg {
  width: 100%;
  height: 250/100rem;
  img {
    width: 100%;
    height: 100%;
  }
}

.handKill {
  width: 100%;
  box-sizing: border-box;
  // height: 400/100rem;
  margin: 0 auto;
  // border: 1px solid red;
  margin-bottom: 30/100rem;
  .handKilltop {
    position: relative;
    text-indent: 10/100rem;
    // border: 1px solid red;
    display: flex;
    align-items: center;
  }
  #clock1 {
    width: 45/100rem;
    height: 55/100rem;
  }
  .rightssss {
    color: #f2373a;
    position: absolute;
    right: 10/100rem;
  }
  .clockWillreduce {
    font-size: 40/100rem;
    margin-left: 10/100rem;
  }
}

.killUl {
  display: flex;
  justify-content: space-around;
}
.lovelife {
  width: 100%;
  height: 180/100rem;

  // border: 1px solid black;
  box-sizing: border-box;
  background: url("../../../assets/images/mainPageImg/aishenghuo.jpg") center
    no-repeat;
  background-size: 1200/100rem;
  // background-color: #f6f6f6;
  // background-size: cover;
}
.threepagewired {
  box-sizing: border-box;
  overflow: hidden;
  // border: 1px solid black;
  display: flex;
}
.threepagewired-l {
  width: 50%;
  height: 400/100rem;
  img {
    width: 90%;
    top: 80%;
  }
}
.threepagewired-r {
  width: 50%;
  height: 300/100rem;
  img {
    width: 100%;
  }
}

.recommend {
  width: 100%;
  height: 120/100rem;
  line-height: 120/100rem;
  margin: 0 auto;
  // border: 1px solid red;
  text-align: center;
  // background-color: #f0f2f5;
  .recommend-f {
    color: gray;
    font-size: 30/100rem;
  }
}

.shoplist {
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.copyright {
  color: gray;
  text-align: center;
  box-sizing: border-box;
  padding-bottom: 130/100rem;
}
</style>