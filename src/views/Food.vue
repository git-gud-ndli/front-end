<template>
  <section id="food">
    <h1>{{ $vuetify.t("$vuetify.pages.food.title") }}</h1>
    <h2>Add food to list</h2>
    <form @submit.prevent="sendFood">
      <v-card-text>
        <v-layout column>
          <v-flex>
            <v-text-field
              name="name"
              label="name"
              type="text"
              v-model="ing.name"
              required
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              name="amount"
              label="Amount"
              type="number"
              v-model="ing.amount"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="dialog = false">Cancel</v-btn>
        <v-btn color="primary" type="submit">Add food</v-btn>
      </v-card-actions>
    </form>
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
import POSTFOOD from "@/graphql/putFood.gql";

export default {
  name: "Food",
  apollo: {
    food: {
      query: GETFOOD
    }
  },
  data() {
    return {
      Food: [],
      ing: {
        name: "",
        amount: 0
      }
    };
  },
  methods: {
    sendFood(e) {
      let name = e.target.elements.name.value;
      let amount = e.target.elements.amount.value;
      this.$apollo.mutate({
        mutation: POSTFOOD,
        variables: {
          name: this.ing.name,
          amount: Number(this.ing.amount)
        }
      });
    }
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
