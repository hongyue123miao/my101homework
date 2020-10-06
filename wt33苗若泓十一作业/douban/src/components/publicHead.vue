<template>
  <div class="pHeader">
    <slot name="greenHead"></slot>
    <span v-if="fontTitle">{{ fontTitle }}</span>
    <div class="rightbox">
      <span class="imgright1"> <slot name="imgright1"></slot></span>
      <span class="imgright2"> <slot name="imgright2"></slot></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["fontTitle"],
};
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
.pHeader {
  position: fixed;
  top: 0%;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 65/100rem;
  line-height: 65/100rem;
  background-color: #f7f7f7;
  .rightbox {
    // border: 1px solid black;
    position: absolute;
    right: 10/100rem;
    top: 10/100rem;
    float: right;
    img {
      width: 35/100rem;
      height: 35/100rem;
    }
  }
  .imgright2 {
    margin-right: 15/100rem;
  }
}
</style>