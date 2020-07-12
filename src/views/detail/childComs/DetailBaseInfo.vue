<template>
  <div v-if="Object.keys(goods).length!==0" class="base-info">
    <div></div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style>
</style>