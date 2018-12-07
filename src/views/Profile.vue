<template>
  <section id="profile">
    <h1>
      <u>{{ $vuetify.t("$vuetify.pages.profile.title") }}</u>
    </h1>
    <v-container>
      <h2>My UUID: {{ me.id }}</h2>
      <br />
      <h2>Registration email: {{ me.username }}</h2>
    </v-container>
  </section>
</template>

<script>
import GETME from "@/graphql/me.gql";
export default {
  name: "Profile",
  data() {
    return {
      me: { id: "none", username: "Yves" }
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
