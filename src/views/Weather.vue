<template>
  <section id="weather">
    <h1>{{ $vuetify.t("$vuetify.pages.weather.title") }}</h1>
  </section>
</template>

<script>
import WEATHER from "@/graphql/Weather.gql";

export default {
  name: "Weather",
  apollo: {
    query: WEATHER,
    variables: {
      lat: 7.0,
      long: 5.4
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
#weather {
  text-align: center;

  h1 {
    font-size: 50px;
  }
}
</style>
