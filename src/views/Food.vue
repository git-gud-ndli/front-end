<template>
  <section id="food">
    <h1>{{ $vuetify.t("$vuetify.pages.food.title") }}</h1>
    <v-list>
      <v-list-tile @click="" v-for="(item, index) of food" :key="index">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ item.amount }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
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
