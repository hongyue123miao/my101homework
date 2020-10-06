<template>
  <li class="logandbackTopchildLi">
    <slot name="name1"></slot>
  </li>
</template>

<script>
export default {
  props: ["titles"],
};
</script>

<style lang='less'>
.logandbackTop {
    margin-top: 30/100rem;
  align-items: center;
  height: 80/100rem;
  display: flex;
  justify-content: space-around;
  border: 1px solid gainsboro;
}
.logandbackTopchildLi {
  height: 20/100rem;
  width: 25%;
  text-align: center;
  height: 40/100rem;
  line-height: 40/100rem;
  list-style: none;
  border-left: 1px solid gainsboro;
}
</style>