<template>
  <div class="log1Main">
    <div class="log1title"> <router-link to="/home">登录豆瓣</router-link></div>
    <div class="agreement">
      <span class="turningGrey"
        >登录注册表示同意<span class="turningGreen"
          >豆瓣使用协议，隐私政策</span
        ></span
      >
    </div>

    <div class="checkifRight">
      <slot name="hole1forinput" v-show="ifshows"></slot>
       <slot name="hole2forinput" v-show="!ifshows"></slot>
       <!-- <button class="loginbutton">登录</button> -->
        <slot name="hole1forcheck"></slot>
       <slot name="hole2forcheck"></slot>
      <button class="loginbutton">登录</button>
     
      
    </div>
    <div class="ThirdPartyLogin">
      <div class="ThirdPartyLoginFont turningGrey">第三方登录</div>
      <div class="ThirdPartyLoginIcon">
        <span class="iconfont iconfont1Forweibo">&#xe601;</span>
        <span class="iconfont iconfontForweixin">&#xe600;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.lines {
  display: inline-block;
  width: 1/100rem;
  height: 30/100rem;
  margin-left: 15/100rem;
  margin-right: 15/100rem;
  background-color: gainsboro;
}
.getnum{
  color:#43bd57;
}
.addtitlephone {
  text-indent: 10/100rem;
  font-weight: bold;
  // border: 1px solid red;
}

.inputslog {
  display: flex;
  align-items: center;
  height: 60/100rem;
  border: 1px solid gainsboro;
  input {
    border: none;
    outline: none;
    height: 100%;
  }
}

.inputslog2 {
  display: flex;

  align-items: center;
  height: 60/100rem;
  border: 1px solid gainsboro;
  .divs {
    width: 100%;
    // border: 1px solid black;
    display: flex;
    justify-content: space-between;
    span{
      padding-right: 10/100rem;
       padding-left:10/100rem;
       box-sizing: border-box;
    }
    input {
      border: none;
      outline: none;
      height: 100%;
    }
  }
}



.youchoose{
  // border: 1px solid black;
  display: flex;
  justify-content: space-between;
}
</style>