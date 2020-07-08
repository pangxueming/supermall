<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">
        <h3>购物街</h3>
      </div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childrenComps/HomeSwiper";
import HomeRecommendView from "./childrenComps/HomeRecommendView";
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style>
.home-nav {
  background: var(--color-tint);
  color: #fff;
}
</style>