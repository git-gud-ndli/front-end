<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span id="tn">GIT-GUD(1)</span>
        <span class="font-weight-light" style="margin-left: 20px;">LA NUIT DE L'INFO</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-if="isLogged">
        <v-btn flat @click="logout">Sign Out</v-btn>
      </span>
      <span v-else>
        <NavLinks/>
      </span>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavLinks from "@/components/NavLinks";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    NavLinks
  },
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapGetters({
      isLogged: "auth/isLoggedIn",
      user: "auth/user"
    })
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>

<style>
@import "./assets/css/style.less";

html,
body {
  font-family: "coolvetica";
}
</style>
