<template>
  <div>
    <PublicHead fontTitle="我的">
      <template #imgright2>
        <img src="../../../assets/publicHeadImg/ic_settings.png" />
      </template>
    </PublicHead>
    <Management></Management>
    <!-- ManageStuff结束 -->
    <ul class="minePageUl">
      <MinePage
        v-for="(item, index) in icondata" :key="index" :fonts='item.fonts' :iconc='item.icontext'></MinePage>
    </ul>
  </div>
</template>

<script>
import PublicHead from "../../publicHead.vue";
import MinePage from "../../minepage.vue";
import Management from '@/components/management'
export default {
  components: {
    PublicHead,
    MinePage,
    Management,
  },
  data() {
    return {
      icondata: [
        {
          icons: "iconfont",
          fonts: "风险承受能力评估",
          icontext: "\ue602",
        },
        {
         icons: "iconfont",
          fonts: "安全保障",
          icontext: "\ue625",
        },
        {
          icons: "iconfont",
          fonts: "我的关注",
          icontext: "\ue688",
        },
        {
         icons: "iconfont",
          fonts: "帮助中心",
          icontext: "\ue635",
        },
        {
         icons: " iconfont",
          fonts: "关于我们",
          icontext: "\ue688",
        },
        {
        icons: " iconfont",
          fonts: "检查更新",
          icontext: "\ue603",
        },
        {
          icons: " iconfont",
          fonts: "联系客服",
          icontext: "\ue601",
        },
      ],
    };
  },
};
</script>

<style lang='less'>

.ManageStuff{
  padding: 15/100rem;
  align-items: center;
  margin-top: 66/100rem;
  display: flex;
  border: 1px solid gainsboro;
  height: 200/199rem;
  .ManageStuffLeft,.ManageStuffRight{
    width: 50%;
    text-align: center;
    .iconfont{
      padding-bottom: 15/100rem;
      font-size: 40/100rem;
      color: #90d89c;
    }
   
  }

   
}
</style>