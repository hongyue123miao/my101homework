<template>
  <div class="homemain">
    <PublicHead>
      <template #greenHead>
        <div class="greenHead">
          <div class="greenHead-leftbox">
            <img
              src="../../../assets/publicHeadImg/ic_group_search_small.png"
              id="greenHead-leftbox-icon1"
            />
            <span>
              <input type="text" placeholder="影视 图片 唱片 小组等" />
            </span>
            <img
              src="../../../assets/publicHeadImg/ic_scan_gray.png"
              id="greenHead-leftbox-icon2"
            />
          </div>
          <div class="greenHead-rightbox">
            <img src="../../../assets/publicHeadImg/ic_chat_white.png" />
          </div>
        </div>
      </template>
    </PublicHead>
    <Banner :pshow="true">
      <template #swiper-slide>
        <div class="swiper-slide">
          <img src="../../../assets/banner/01.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/banner/02.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/banner/03.jpg" />
        </div>
      </template>
    </Banner>
    <ul class="NewlistUl">
      <Newlist v-for="(item,index) in arr" :key="index" :title=item.title :desc=item.target.desc :author=item.target.author.name :imgs=item.target.cover_url></Newlist>
    </ul>
  </div>
  <!-- homemain结束 -->
</template>

<script>
import PublicHead from "../../publicHead.vue";
import Banner from "../../banner.vue";
import Newlist from "../../newsllist.vue";
export default {
  components: {
    PublicHead,
    Banner,
    Newlist,
  },
  data(){
    return{
      arr:[]
    }
  },
  mounted() {
    this.$axios.get("../../../../static/data/homeData.json").then((res) => {
      // console.log(res.data.recommend_feeds);
      this.arr=res.data.recommend_feeds
      // console.log(res.data.recommend_feeds);
    });
  },
};
</script>

<style lang='less'>
.greenHead {
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #49be57;
  width: 100%;
  height: 65/100rem;
  .greenHead-rightbox {
    margin-bottom:10/100rem;
    margin-right: 30/100rem;
    width: 35/100rem;
    height: 35/100rem;
    // border: 1px solid black;
    img {
      width: 35/100rem;
      height: 35/100rem;
    }
  }
  .greenHead-leftbox {
    position: relative;
    display: flex;
    align-items: center;
    width: 85%;
    margin-right: 10/75rem;
    height: 45/100rem;
    // border: 1px solid black;
    background-color: white;
    border-radius: 8/100rem;
    input {
      // outline: 2px solid red;
      display: inline-block;
      margin-top: 23/100rem;
      box-sizing: border-box;
      width: 360/100rem;
      height: 45/100rem;
      line-height: 45/100rem;
      outline: none;
      border: none;
      height: 30/100rem;
    }
    img {
      // border: 1px solid blue;
      display: inline-block;
      width: 35/100rem;
      height: 35/100rem;
    }
    #greenHead-leftbox-icon1 {
      margin-left: 10/100rem;
      margin-right: 30/100rem;
    }

    #greenHead-leftbox-icon2 {
      position: absolute;
      right: 10/75rem;
    }
  }
}

.swiper-container {
  // position: relative;
  margin-top: 65/100rem;
  box-sizing: border-box;
  // border: 1px solid blue;
  width: 100%;
  height: 300/100rem;
  img {
    width: 100%;
    height: 300/100rem;
  }

  .swiper-pagination-bullet-active {
    background-color: gray;
    opacity: 0.7;
    width: 30/100rem;
    height: 30/100rem;
  }
}

.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  text-align: right;
}
.NewlistUl{
  padding-bottom: 90/100rem;
}


</style>