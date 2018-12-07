<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link :to="{ name: 'home' }" id="tn" tag="button"
          >GIT-GUD(1) - Nuit de L'Info</router-link
        >
        <select v-on:change="changeLang" v-model="language" class="sel">
          <option value="en">🇬🇧</option>
          <option value="fr">🇫🇷</option>
        </select>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-if="isLogged">
        <v-btn flat @click="dashboard">
          {{ $vuetify.t("$vuetify.home.dashboard") }}
        </v-btn>
        <v-btn flat @click="logout">{{ $vuetify.t("$vuetify.signout") }}</v-btn>
      </span>
      <span v-else> <NavLinks /> </span>
    </v-toolbar>

    <v-content>
      <back-button v-if="currentPath" />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavLinks from "@/components/NavLinks";
import BackButton from "@/components/BackButton";
import { mapGetters } from "vuex";

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
      },
      language: "en"
    };
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
    },
    changeLang() {
      localStorage.setItem("lang", this.language);
      this.$vuetify.lang.current = this.language;
    }
  },
  mounted() {
    if (localStorage.getItem("lang") === null) {
      this.language = "en";
      localStorage.setItem("lang", this.language);
    }
    this.language = localStorage.getItem("lang");
    this.$vuetify.lang.current = this.language;
  }
};
</script>

<style>
@import "./assets/css/style.less";

html,
body {
  font-family: "coolvetica";
}
#tn {
  color: #616183;
}
.sel {
  margin-left: 10px;
  cursor: pointer;
}
</style>
