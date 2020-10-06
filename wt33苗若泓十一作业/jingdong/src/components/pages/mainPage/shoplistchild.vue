<template>
  <li class="shoplistchildLi">
    <div class="img"><img :src="imgsrc" /></div>
    <br />
    <span class="uselessgoodName">{{ goodName }}</span
    ><br />
    <span class="uselessPrice">{{ price }}</span
    ><br />
    <div class="bottomshopchildli">
      <div class="bottomshopchildli-l">{{ rate }}</div>
      <div class="bottomshopchildli-r">看相似</div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["imgsrc", "goodName", "price", "rate"],
};
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}

.shoplistchildLi {
  padding: 5/100rem;
  list-style: none;
  margin-top: 10/100rem;
  width: 49%;
//   height: 500/100rem;
  box-sizing: border-box;
  border: 1px solid gainsboro;
  margin-left: 1/100rem;
  .img {
    margin: 0 auto;
    height: 360/100rem;
    width: 300/100rem;
    // border: 1px solid blue;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.uselessPrice {
  font-size: 30/100rem;
  color: #f24045;
  font-weight: bold;
}

.bottomshopchildli {
  display: flex;
  justify-content: space-between;
  .bottomshopchildli-l {
    color: gainsboro;
  }

  .bottomshopchildli-r {
      border-radius: 8/100rem;
      height: 30/100rem;
      line-height: 30/100rem;
    margin-right: 6/100rem;
    color: #696969;
    // box-sizing: border-box;
    padding: 3/100rem;
    border: 1px solid #696969;
  }
}
</style>