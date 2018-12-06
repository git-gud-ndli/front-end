<template lang="html">

  <section class="login-form">
    <v-dialog
      v-model="dialog"  
      width="500px"
    >
      <v-btn
        slot="activator"
        flat
      >Sign In</v-btn>
        <v-card>
          <v-card-title class="headline light-blue lighten-3" primary-title>
            Sign In
          </v-card-title>
          <v-card-text>
            
            <form @submit.prevent="dialog = false">
              <v-layout column>
                <v-flex>
                  <v-text-field
                    prepend-icon="person"
                    name="email"
                    label="Email"
                    id="log_email"
                    type="email"
                    required></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    id="log_password"
                    type="password"
                    required></v-text-field>
                </v-flex>
              </v-layout>
            </form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" type="submit" @click="dialog = false">Cancel</v-btn>
            <v-btn color="primary" type="submit">Sign In</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'login-form',
    props: [],
    mounted() {

    },
    data() {
      return {
        dialog: false
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="less">
.login-form {
}
</style>
