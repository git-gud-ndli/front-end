<template>
  <section id="news">
    <v-container>
      <h1>{{ $vuetify.t("$vuetify.pages.news.title") }}</h1>
      <v-timeline>
        <v-timeline-item v-for="(article, index) in news" :key="index" color="red lighten-2" large>
          <span slot="opposite">{{ article.publishedAt}}</span>
          <a :href="article.url" target="_blank" rel="noopener noreferrer">
            <v-hover>
              <v-card
                class="elevation-2 article"
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
              >
                <v-card-title class="headline">{{ article.title }}</v-card-title>
                <v-card-text>{{ article.content | hideCompact }}</v-card-text>
              </v-card>
            </v-hover>
          </a>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
</template>

<script>
import GETNEWS from "@/graphql/GetNews.gql";
export default {
  name: "News",
  data() {
    return {
      news: []
    };
  },
  apollo: {
    news: GETNEWS
  },
  methods: {}
};
</script>

<style scoped lang="less">
#news {
  text-align: center;

  h1 {
    font-size: 40px;
  }
  a {
    text-decoration: none;
  }
  .article {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
