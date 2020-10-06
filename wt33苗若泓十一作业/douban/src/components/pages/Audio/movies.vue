<template>
  <div class="moviesTotalBox">
    <div class="moviestitle">正在上映的电影-北京</div>
    <div class="moviesBox">
      <MoviesChild
        v-for="(item, index) in arr1"
        :key="index"
        :title1="item.title"
        :score1="item.score"
        :imgone="item.cover_url"
      >
      </MoviesChild>
    </div>


    <div class="moviestitle">即将上映的电影</div>
    <div class="moviesBox">
      <MoviesChild2
        v-for="(item, index) in arr2"
        :key="index"
        :title2="item.title"
        :score2="item.score"
        :imgtwo="item.cover_url"
      >
      </MoviesChild2>
    </div>



  
  </div>
</template>

<script>
import MoviesChild from "./moviesChild";
import MoviesChild2 from "./moviesChild2";
export default {
  components: {
    MoviesChild,
    MoviesChild2
  },
  data() {
    return {
      arr1: [],
      arr2: [],
    };
  },
  mounted() {
    this.$axios.get("../../../static/data/broadcast.json").then(
      (res) => {
        // console.log(res.data.recommend_one);
        this.arr1 = res.data.recommend_one;
      },
      (err) => {
        console.log(err);
      }
    );

     this.$axios.get("../../../static/data/broadcast.json").then(
      (res) => {
        // console.log(res.data.recommend_two);
        this.arr2 = res.data.recommend_two;
      },
      (err) => {
        console.log(err);
      }
    );
  },
};
</script>

<style lang='less'>
.moviestitle {
  height: 80/100rem;
  line-height: 80/100rem;
  text-indent: 20/100rem;
}
.moviesBox {
  overflow-x: scroll;
  width: 100%;
  white-space: nowrap;
}
.moviesBox::-webkit-scrollbar {
  display: none;
}
</style>