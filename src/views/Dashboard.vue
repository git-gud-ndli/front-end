<template>
  <section class="dashboard text-xs-center">
    <router-view></router-view>
    <h1 class="display-4">{{ $vuetify.t("$vuetify.dashboard.welcome") }}</h1>
    <v-container grid-list-lg text-xs-center>
      <v-layout row wrap>
        <v-flex v-for="(tile, key) in tiles" :key="key" xs12 sm4>
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="text-xs-center tile"
              :class="`elevation-${hover ? 12 : 2}`"
              @click="rpush(tile.url)"
            >
              <v-card-title primary-title class="display-3 justify-center">
                {{
                $vuetify.t(tile.title)
                }}
              </v-card-title>
              <v-card-text>
                <v-icon size="128">{{ tile.icon }}</v-icon>
                <p class="subheading">{{ $vuetify.t(tile.desc) }}</p>
              </v-card-text>
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
      rpush(page) {
        this.$router.push(`/dashboard/${page}`);;
      }
    },
    computed: {
      tiles() {
        return [
          {
            title: "$vuetify.dashboard.profile.title",
            icon: 'person',
            desc: "$vuetify.dashboard.profile.desc",
            url: 'profile'
          },
          {
            title: '$vuetify.dashboard.news.title',
            icon: 'library_books',
            desc: '$vuetify.dashboard.news.desc',
            url: 'news'
          },
          {
            title: '$vuetify.dashboard.settings.title',
            icon: 'settings',
            desc: '$vuetify.dashboard.settings.desc',
            url: 'settings'
          },
          {
            title: '$vuetify.dashboard.food.title',
            icon: 'fastfood',
            desc: '$vuetify.dashboard.food.desc',
            url: 'food'
          },
          {
            title: '$vuetify.dashboard.todo.title',
            icon: 'list',
            desc: '$vuetify.dashboard.todo.desc',
            url: 'todo'
          },
          { title: '$vuetify.dashboard.weather.title',
            icon: 'wb_sunny',
            desc: '$vuetify.dashboard.weather.desc',
            url: 'weather'
          }
        ]
      }
    }
}
</script>

<style scoped lang="less">
.dashboard {
  .tile {
    min-height: 40vh;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
