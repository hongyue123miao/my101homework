<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../assets/images/bannersImg/1.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/bannersImg/2.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/bannersImg/3.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/bannersImg/4.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/bannersImg/5.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/bannersImg/6.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/bannersImg/7.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/bannersImg/8.jpg" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";

export default {
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
       autoplay:true,
        speed:500,

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};
</script>

<style lang='less'>
.swiper-container {
  width: 100%;
  height: 300/100rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>