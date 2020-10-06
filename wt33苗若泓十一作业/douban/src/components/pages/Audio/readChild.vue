<template>
  <div class="readChildLi">
    <div class="readChildImg"><img :src=src></div>
    <div class="justhide">{{ title }}</div>
    <div>{{ aut }}</div>
  </div>
</template>

<script>
export default {
  props: ["src", "title", "aut"],
};
</script>

<style lang='less'>
.readChildLi {
  display: inline-block;
  box-sizing: border-box;
  padding: 10/100rem;
//   border: 1px solid blue;
  width: 33.333333%;
  height: 400/100rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.justhide{
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
}
</style>