<template>
  <main>
    <article>
      <header>
        <h1>Survivor</h1>
        <h2>
          {{ $vuetify.t("$vuetify.home.pres") }}
        </h2>
      </header>
      
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
    header {
      h1 {
        font-size: 50px;
      }
      h2 {
        font-size: 30px;
      }
    }
  }
}
</style>
