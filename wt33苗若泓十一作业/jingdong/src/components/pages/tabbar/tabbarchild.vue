<template>
  <div class="tabbarchildmain" @click="showindex()">
    <span v-show="showornot"><slot name="normalImg"></slot></span>
    <span v-show="!showornot"> <slot name="activeImg"></slot></span>
  </div>
</template>

<script>
export default {
  props: ["getindex", "resindex"],
  computed: {
    showornot() {
      if (this.resindex == this.getindex) {
        return false;
      }
      return true;
    },
  },
  methods: {
    showindex() {
      console.log(this.getindex);
      this.$emit("change", this.getindex);
    },
  },
};
</script>

<style lang='less'>
.tabbarchildmain {
  // border: 1px solid blue;
  box-sizing: border-box;
  width: 20%;
  img {
    width: 100%;
    height: 100/100rem;
  }
}
</style>