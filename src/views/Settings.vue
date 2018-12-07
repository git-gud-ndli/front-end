<template>
  <section id="settings">
    <h1>{{ $vuetify.t("$vuetify.pages.settings.title") }}</h1>
  </section>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#settings {
  text-align: center;

  h1 {
    font-size: 40px;
  }
}
</style>
