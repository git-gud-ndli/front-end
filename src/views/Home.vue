<template>
  <main>
    <article>
      <header>
        <h1>Survivor</h1>
        <h2>
          {{ $vuetify.t("$vuetify.home.first.pres") }}
        </h2>
      </header>

    </article>
    <article>
      <header>
        <h1>
          {{ $vuetify.t("$vuetify.home.second.pres") }}
        </h1>
      </header>
      <section>
        <ul>
          <li>whatever</li>
          <li>whatever</li>
          <li>whatever</li>
        </ul>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    };
  }
};
</script>

<style lang="less" scoped>
main {
  article {
    height: calc(~"100vh - 48px");
    text-align: center;

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
