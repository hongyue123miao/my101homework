<template>
  <div class="gropchild1">
    <div class="gropchild1Top">
      <div class="gropchild1Top-L">
        <span class="gropchild1TopImg"><img :src="imgone" /></span>
        <span>{{title1}}</span>
      </div>

      <div class="gropchild1Top-R">
        <span class="gropchild1Bottom">{{num1}}</span>
      </div>
    </div>

    <div class="gropchild1Bottom">
      {{main1}}
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgone", "title1", "main1","num1"],
};
</script>

<style lang='less'>
.gropchild1 {
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid gainsboro;
  padding: 20/100rem;
  padding-top: 40/100rem;
   padding-bottom: 40/100rem;
  box-sizing: border-box;
}
.gropchild1Top {
    margin-bottom: 20/100rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .gropchild1TopImg {
    display: inline-block;
    // border: 1px solid blue;
    width: 45/100rem;
    height: 45/100rem;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
}
.gropchild1Bottom {
  color: #c8c8c8;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>