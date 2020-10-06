<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot name="swiper-slide"></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div :class="{'swiper-pagination':pshow}"></div>
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
    props:{
        sId:{},
        pshow:{default:true},
        pstyle:{default:'normal',rightside:true}
    },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      loop : true
    });
  },
};
</script>

<style>
</style>