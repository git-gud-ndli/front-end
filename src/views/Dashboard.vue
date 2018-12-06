<template>
  <section class="dashboard text-xs-center">
    <router-view></router-view>
    <h1 class="display-4" @click="test">
      {{ $vuetify.t("$vuetify.dashboard.welcome") }}
    </h1>
    <v-container grid-list-lg text-xs-center>
      <v-layout row wrap>
        <v-flex v-for="(tile, key) in tiles" :key="key" xs4>
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="text-xs-center"
              :class="`elevation-${hover ? 12 : 2}`"
            >
              <v-card-title primary-title class="display-3 justify-center">
                {{ $vuetify.t(tile.title) }}
              </v-card-title>
              <v-card-text>
                <v-icon size="128">{{ tile.icon }}</v-icon>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn color="success" @click="test(tile.url)">go</v-btn>
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
      test(page) {
        this.$router.push(`/dashboard/${page}`);;
      }
    },
    computed: {
      tiles() {
        return [
          {
            title: "$vuetify.dashboard.profile",
            icon: 'person',
            desc: 'Update your personnal informations here',
            url: 'profile'
          },
          {
            title: '$vuetify.dashboard.news',
            icon: 'library_books',
            desc: 'Check the news near you',
            url: 'news'
          },
          {
            title: '$vuetify.dashboard.settings',
            icon: 'settings',
            desc: 'Change your app settings here',
            url: 'food'
          },
          {
            title: '$vuetify.dashboard.food',
            icon: 'fastfood',
            desc: 'Ting Tang Walla Walla Bing Bang',
            url: 'food'
          },
          {
            title: 'Foo',
            icon: 'person',
            desc: 'Ting Tang Walla Walla Bing Bang',
            url: 'food'
          },
          { title: 'Foo',
            icon: 'person',
            desc: 'Ting Tang Walla Walla Bing Bang',
            url: 'food'
          }
        ]
      }
    }
}
</script>

<style scoped lang="less">
.dashboard {
}
</style>
