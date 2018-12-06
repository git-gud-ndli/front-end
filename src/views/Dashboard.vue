<template>
  <section class="dashboard text-xs-center">
    <h1 class="display-4">Welcome to your dashboard</h1>
    <v-container grid-list-lg text-xs-center>
      <v-layout row wrap>
        <v-flex v-for="(tile, key) in tiles" :key="key" xs4>
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="text-xs-center"
              :class="`elevation-${hover ? 12 : 2}`"
            >
              <v-card-title primary-title class="display-3 justify-center">{{ tile.title }}</v-card-title>
              <v-card-text>
                <v-icon size="128">{{ tile.icon }}</v-icon>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn color="success">go</v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'dashboard',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {
      tiles() {
        return [
          { title: 'My Profile', icon: 'person', desc: 'Update your personnal informations here' },
          { title: 'News', icon: 'person', desc: 'Check the news near you' },
          { title: 'Settings', icon: 'person', desc: 'Change your app settings here' },
          { title: 'Foo', icon: 'person', desc: 'Ting Tang Walla Walla Bing Bang' },
          { title: 'Foo', icon: 'person', desc: 'Ting Tang Walla Walla Bing Bang' },
          { title: 'Foo', icon: 'person', desc: 'Ting Tang Walla Walla Bing Bang' }
        ]
      }
    }
}
</script>

<style scoped lang="less">
.dashboard {
}
</style>
