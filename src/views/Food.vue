<template>
  <section id="food">
    <h1>{{ $vuetify.t("$vuetify.pages.food.title") }}</h1>
    {{ food }}
    <v-list-tile v-for="item in food" :key="item.name">
      <p>{{ item.name }}</p>
    </v-list-tile>
  </section>
</template>

<script>
import GETFOOD from "@/graphql/Food.gql";

export default {
  name: "Food",
  apollo: {
    food: {
      query: GETFOOD
    }
  },
  data() {
    return {
      Food: []
    };
  }
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
