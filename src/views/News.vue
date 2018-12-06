<template>
  <section id="news">
    <h1>{{ $vuetify.t("$vuetify.pages.news.title") }}</h1>
  </section>
</template>

<script>
export default {
  name: "News"
};
</script>

<style lang="less" scoped>
#news {
  text-align: center;

  h1 {
    font-size: 40px;
  }
}
</style>
