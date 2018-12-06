<template lang="html">

  <fragment>
    <v-dialog
      v-model="dialog"  
      width="500px"
    >
      <v-btn
        slot="activator"
        flat
      >Register</v-btn>
        <v-card>
          <v-card-title class="headline light-blue lighten-3" primary-title>
            Register
          </v-card-title>
          <v-card-text>
            
            <form @submit.prevent="dialog = false">
              <v-layout column>
                <v-flex>
                  <v-text-field
                    prepend-icon="person"
                    name="username"
                    label="Username"
                    id="username"
                    type="text"
                    required></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field
                    prepend-icon="email"
                    name="email"
                    label="Email"
                    id="reg_email"
                    type="email"
                    required></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    id="reg_password"
                    type="password"
                    required></v-text-field>
                </v-flex>
              </v-layout>
            </form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" type="submit" @click="dialog = false">Cancel</v-btn>
            <v-btn color="primary" type="submit">Register</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
  </fragment>

</template>

<script lang="js">
  export default  {
    name: 'register-form',
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
