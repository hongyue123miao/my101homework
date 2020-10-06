<template>
  <li class="broadLi">
    <div class="broadLiHead">
      <div class="iconfont iconMain">&#xe60a;</div>
      <div class="broadHeadRight">
        <p>豆瓣<span class="turningGrey">写了日记</span></p>
        <p class="turningGrey">2018-05-23 10:39:23</p>
      </div>
    </div>
    <div class="broadMain bgGrey broadMainex">
      <div class="broadMainTitle">
        {{ title }}
      </div>
      <div class="turningGrey">{{ main }}</div>
    </div>
    <div class="broadMainFooter">
      <div class="broadMainFooter-left">
        <span class="iconfont firstHand">&#xe628;</span>29
        <span class="iconfont">&#xe63b;</span>29
        <span class="iconfont">&#xe819;</span>29
      </div>
      <div class="broadMainFooter-right">
        <span class="iconfont">&#xe606;</span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["title", "main"],
};
</script>

<style lang='less'>
.bgGrey {
  background-color: #f9f9f9;
}
.broadLiHead {
  height: 100/100rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.iconMain {
  background-color: #05c212;
  width: 60/100rem;
  height: 60/100rem;
  margin-left: 15/100rem;
  text-align: center;
  font-size: 50/100rem;
  border-radius: 50%;
  color: white;
}
.broadHeadRight {
  margin-left: 10/100rem;
  p {
    margin-top: 5/100rem;
  }
}
.broadLi {
  border: 1px solid gainsboro;
  width: 100%;
  box-sizing: border-box;
  // border: 1px solid red;
}
.turningGrey {
  color: #d2d2d2;
}
.broadMain {
  // border: 1px solid red;
  box-sizing: border-box;
  padding: 5%;
  width: 450/100rem;
}
.broadMainex{
  margin: 0 auto;
}
.broadMainFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 60/100rem;
  width: 455/100rem;
}
.broadMainFooter-left{
  span{
    display: inline-block;
    margin-left: 5/100rem;
  }
}
</style>