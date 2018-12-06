<template>
  <main>
    <article>
      <h1>Survivor</h1>
      <h2>
        {{ $vuetify.t("$vuetify.home.pres") }}
      </h2>
    </article>
  </main>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="less" scoped>
main {
  article {
    h1 {
      font-size: 30px;
    }
  }
}
</style>
