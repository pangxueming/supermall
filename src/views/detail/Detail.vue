<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goods" />
  </div>
</template>

<script>
import DetailNavBar from "./childComs/DetailNavBar";
import DetailSwiper from "./childComs/DetailSwiper";
import DetailBaseInfo from "./childComs/DetailBaseInfo";

import { getDetail, Goods } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {}
    };
  },
  created() {
    //1.保存传入iid
    this.iid = this.$route.params.iid;

    //2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      //1.获取顶部的图片轮播图
      console.log(res);
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;
      // console.log(this.topImages);

      //2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      console.log(this.goods);
    });
  }
};
</script>

<style scoped>
</style>