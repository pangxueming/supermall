<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
  padding: 12px 0 24px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>