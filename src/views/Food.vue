<template>
  <section id="food">
    <h1>{{ $vuetify.t("$vuetify.pages.food.title") }}</h1>
  </section>
</template>

<script>
export default {
  name: "Food"
};
</script>

<style lang="less" scoped>
#food {
  text-align: center;

  h1 {
    font-size: 40px;
  }
}
</style>
