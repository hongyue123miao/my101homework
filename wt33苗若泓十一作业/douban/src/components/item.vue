<template>
  <li class="itemTotal" @click="fn()">
    <span v-show="!isshow"><slot name="normalImg"></slot><br /></span>
    <span v-show="isshow"><slot name="activeImg"></slot><br /></span>
    <span :class="{active:isshow}">{{ title }}</span>
  </li>
</template>

<script>
export default {
  props: ["title", "index", "hasselected"],
  data() {
    return {};
  },
  computed: {
    isshow() {
      if (this.index == this.hasselected) {
        return true;
      }
    },
  },
  methods: {
    fn() {
      this.$emit("change", this.index);
    },
  },
};
</script>

<style lang='less'>
.bottomUl > li {
  height: 86/100rem;
  text-align: center;
  // outline: 1px solid black;
  list-style: none;
  width: 20%;
  img {
    // outline: 1px solid black;
    width: 35/75rem;
    height: 35/75rem;
  }
}
.active{
  color: #41bd55;
}
</style>