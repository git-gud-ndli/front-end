<template>
  <section id="profile">
    <h1>{{ $vuetify.t("$vuetify.pages.profile.title") }}</h1>
    <v-container>
      <p>Uuid: {{ me.id }}</p>
      <br />
      <p>Username: {{ me.username }}</p>
    </v-container>
  </section>
</template>

<script>
import GETME from "@/graphql/me.gql";
export default {
  name: "Profile",
  data() {
    return {
      me: { id: "none", username: "Yve" }
    };
  },
  apollo: {
    me: GETME
  }
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
