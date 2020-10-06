<template>
  <li class="iconli">
    <div class="left">
      <span class="iconliIcons iconfont">{{iconc}}</span>
      <span>{{ fonts }}</span>
    </div>
    <div class="right">
      <span class="iconfont rarrow">&#xe604;</span>
    </div>
  </li>
</template>

<script>
export default {
  props: ["iconc", "fonts", "icontext"],
};
</script>

<style lang='less'>
.iconli {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid gainsboro;
  padding-top: 25/100rem;
  padding-bottom: 25/100rem;
  .left {
    width: 85%;
    margin-left: 3%;
  }
  .right {
     width: 14%;
  }
  .rarrow {
    font-size: 60/100rem;
    color: #90d89c;
  }
  .iconliIcons {
    margin-left: 10/100rem;
    margin-right: 10/100rem;
    text-align: center;
    line-height: 40/100rem;
    vertical-align: middle;
    display: inline-block;
    width: 40/100rem;
    height: 40/100rem;
    color: #80d28e;
    font-size: 30/75rem;
    //   border: 1px solid red;
  }
}
</style>