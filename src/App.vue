<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span id="tn">GIT-GUD(1)</span>
        <span class="font-weight-light" style="margin-left: 20px;">LA NUIT DE L'INFO</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-if="isLogged">
        <v-btn flat @click="dashboard">Dashboard</v-btn>
        <v-btn flat @click="logout">Sign Out</v-btn>
      </span>
      <span v-else>
        <NavLinks/>
      </span>
    </v-toolbar>

    <v-content>
      <back-button v-if="currentPath"/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavLinks from "@/components/NavLinks";
import BackButton from "@/components/BackButton";
import { mapGetters } from "vuex";
let Push = require("push.js");

export default {
  name: "App",
  components: {
    NavLinks,
    BackButton
  },
  data() {
    return {
      gps: {
        lat: 0,
        long: 0
      }
    };
  },
  created() {
    navigator.geolocation.getCurrentPosition(location => {
      this.gps.long = location.coords.longitude;
      this.gps.lat = location.coords.accuracy;
      // push au serv ses coordonnées
      Push.create("CA MARCHE", {
        body: "ça compile donc ça marche",
        icon: "/img/icons/favicon-32x32.png",
        timeout: 4000,
        onClick: function() {
          window.focus();
          this.close();
        }
      });
    });
  },
  computed: {
    ...mapGetters({
      isLogged: "auth/isLoggedIn",
      user: "auth/user"
    }),
    currentPath() {
      return this.$route.path.match(/\/dashboard\/.+/);
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
    dashboard() {
      this.$router.push("/dashboard");
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
