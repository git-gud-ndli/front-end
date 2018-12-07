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
      <section id="adv">
        <p>{{ $vuetify.t("$vuetify.home.second.c1") }}</p>
        <p>{{ $vuetify.t("$vuetify.home.second.c2") }}</p>
        <p>{{ $vuetify.t("$vuetify.home.second.c3") }}</p>
        <p>{{ $vuetify.t("$vuetify.home.second.c4") }}</p>
      </section>
    </article>
    <article id="about">
      <header>
        <h1>{{ $vuetify.t("$vuetify.home.third.title") }}</h1>
      </header>
      <section>
        <h2>git link <a href="https://github.com/git-gud-ndli">github</a></h2>
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

  #adv {
    max-width: 900px;
    margin: 0 auto;
    p {
      font-size: 20px;
    }
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
