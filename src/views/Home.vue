<template>
  <main>
    <article id="desert">
      <header>
        <h1>Survivor</h1>
        <h2>{{ $vuetify.t("$vuetify.home.first.pres") }}</h2>
      </header>
    </article>
    <article>
      <header>
        <h1>{{ $vuetify.t("$vuetify.home.second.pres") }}</h1>
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
  components: {}
};
</script>

<style lang="less" scoped>
main {
  #desert {
    background: url("../assets/desert.jpg");
  }

  article {
    height: calc(~"100vh - 48px");
    text-align: center;

    header {
      h1 {
        font-size: 70px;
        margin-bottom: 100px;
        color: #d29060;
        letter-spacing: 2px;
      }
      h2 {
        font-size: 50px;
        color: #d29060;
      }
    }
  }
}
</style>
