<template>
  <div class="groupchild2box">
    <div class="groupchild2box-L">
      <span class="groupchild2box-LImg"><img :src=imgtwo></span>
      <span>{{title2}}</span>
    </div>

    <div class="groupchild2box-R">
      <span class="turningGrey">{{num2}}</span>
    </div>
  </div>
</template>

<script>
export default {
 props: ["imgtwo", "title2", "main2","num2"],
};
</script>

<style lang='less'>
.groupchild2box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20/100rem;
  box-sizing: border-box;
  .groupchild2box-LImg{
      display: inline-block;
      width: 45/100rem;
      height: 45/100rem;
    //   border: 1px solid blue;
      img{
           width: 100%;
      height: 100%;
          vertical-align: middle;

      }
  }
}

.turningGrey{
    color: gainsboro;
}
</style>