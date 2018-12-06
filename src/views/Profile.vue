<template>
  <section id="profile">
    <h1>{{ $vuetify.t("$vuetify.pages.profile.title") }}</h1>
  </section>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style lang="less" scoped>
#profile {
  text-align: center;

  h1 {
    font-size: 40px;
  }
}
</style>
