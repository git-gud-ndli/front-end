<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>GIT-GUD(1)</span>
        <span class="font-weight-light">LA NUIT DE L'INFO</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <LoginForm/>
      <RegisterForm/>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
export default {
  name: "App",
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      //
    };
  }
};
</script>
