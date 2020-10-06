<template>
  <div>
    <div class="musictitle">音乐</div>

    <div class="musicBox">
      <Musicchild v-for="(item, index) in arr" :key="index">
        <template #hole1>
          <div class="musicchildLi">
            <div class="musicchildLi-img1"><img :src="item.cover_url" /></div>
            <div class="musicchildLi-title">{{item.title}}</div>
            <div class="musicchildLi-aut">{{item.author}}</div>
          </div>
         
        </template>
      </Musicchild>


       <Musicchild v-for="(item2) in arr2" :key="item2.title">
        <template #hole2>
          <div class="musicchildLi">
            <div class="musicchildLi-img1"><img :src="item2.cover_url" /></div>
            <div class="musicchildLi-title">{{item2.title}}</div>
            <div class="musicchildLi-aut">{{item2.author}}</div>
          </div>
         
        </template>
      </Musicchild>


        <Musicchild v-for="(item3) in arr3" :key="item3.author">
        <template #hole3>
          <div class="musicchildLi">
            <div class="musicchildLi-img1"><img :src="item3.cover_url" /></div>
            <div class="musicchildLi-title">{{item3.title}}</div>
            <div class="musicchildLi-aut">{{item3.author}}</div>
          </div>
         
        </template>
      </Musicchild>
    </div>
  </div>
</template>

<script>
import Musicchild from "./music.child";
export default {
  components: {
    Musicchild,
  },
  mounted() {
    this.$axios.get("../../../static/data/music.json").then((res) => {
      this.arr = res.data.group[0].group_list;
      this.arr2 = res.data.group[1].group_list;
       this.arr3 = res.data.group[2].group_list;
    });
  },
  data() {
    return {
      arr: [],
      arr2: [],
      arr3: [],
    };
  },
};
</script>

<style lang='less'>
.musictitle {
  height: 80/100rem;
  line-height: 80/100rem;
  // border: 1px solid black;
  text-indent: 20/100rem;
}
.musicBox {
  padding-bottom: 80/100rem;
  // border: 1px solid blue;
}
</style>