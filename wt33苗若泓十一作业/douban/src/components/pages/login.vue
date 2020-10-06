<template>
  <div>
    <Log1>
        <template #hole1forinput>
          <div v-show='show1==true'>
              <div class="inputslog">
                <span class="addtitlephone">+86 </span>
                <span class="lines"></span>
                  <span><input type="text" placeholder="手机号"></span>
              </div>

              <div class="inputslog2">
               
                  <div class="divs">
                    <span><input type="text" placeholder="手机号"></span>
                    <span class="getnum">获取验证码</span>
                  </div>
              </div>
          </div>
        </template>



           <template #hole2forinput>
          <div v-show='show1==false'>
             <div class="inputslog2">
               <div class="divs">
                    <span><input type="text" placeholder="手机号/邮箱"></span>
               </div>
              </div>
              <div class="inputslog2">
               
                  <div class="divs">
                    <span><input type="text" placeholder="密码"></span>
                  </div>
              </div>
          </div>
        </template>




        <template #hole1forcheck>
          <div class="youchoose"  v-show='show1==true'>
            <span class="turningGreen" @click='changestrue()'>账号密码登录</span>
            <span class="turningGrey" >验证码收不到？</span>
          </div>
        </template>


         <template #hole2forcheck>
          <div class="youchoose" v-show='show1==false'>
            <span class="turningGreen" @click='changesfalse()'>免密码登录</span> <span class="turningGreen2">海外手机登录</span>
            <span class="turningGrey">验证码收不到？</span>
          </div>
        </template>
    </Log1>
  </div>
</template>

<script>
import Log1 from "./log1";
export default {
  components: {
    Log1,
  },
  data(){
    return{
      show1:true
      //true显示1，false显示2
    }
  },
  methods: {
      changestrue(){
        console.log(1);
        this.show1=false
      },
       changesfalse(){
          console.log(2);
        this.show1=true
      }
  },
};
</script>

<style lang='less'>
  .turningGrey {
    color: #c1c1c1;
  }
    .turningGreen {
    color: #42bd56;
  }
    .turningGreen2 {
      margin-right: 160/100rem;
    color: #42bd56;
  }
.log1title {
  margin-top: 30/100rem;
  height: 80/100rem;
  line-height: 80/100rem;
  font-size: 40/100rem;
  text-align: center;
  a{
    text-decoration: none;
    color: black;
  }
}
.agreement {
  text-align: center;
  font-size: 22/100rem;


}

.checkifRight{
  margin: 0 auto;
  width: 90%;
  // border: 1px solid red;
   margin-top: 40/100rem;
  .loginbutton{
    // border: 1px solid black;
    border: none;
    outline: none;
      width: 100%;
      height: 60/100rem;
      background-color: #a0deaa;
      margin-top: 40/100rem;
      margin-bottom: 40/100rem;
      color: white;
    
}
}

.ThirdPartyLogin{
  // border: 1px solid red;
  margin-top: 400/100rem;
  text-align: center;
  .ThirdPartyLoginIcon{
    // border: 1px solid red;
    display: flex;
    width: 180/100rem;
    margin: 0 auto;
     margin-top: 30/100rem;
    justify-content: space-between;
  }
}
.iconfont1Forweibo{
  font-size: 55/100rem;
  color:#e84a4d ;
}
.iconfontForweixin{
  font-size: 55/100rem;
  color: #39bb4a;
}

</style>