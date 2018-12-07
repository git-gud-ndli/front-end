<template>
  <section id="weather">
    <h1>{{ $vuetify.t("$vuetify.pages.weather.title") }}</h1>
    <v-layout v-if="weather">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-icon size="256" color="cyan" class="icon_padding">{{
            weather.icon
          }}</v-icon>

          <v-card-title primary-title>
            <div class="infos">
              <h2>{{ $vuetify.t("$vuetify.pages.weather.forecast") }}</h2>
              <h4>
                {{ Math.floor(weather.temperature) }} °F -
                {{ Math.floor((weather.temperature - 32) / 1.8) }} °C
              </h4>
              <h4>
                {{ $vuetify.t("$vuetify.pages.weather.wind") }}
                {{ weather.windSpeed }}
              </h4>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">{{
              $vuetify.t("$vuetify.pages.weather.more")
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import WEATHER from "@/graphql/Weather.gql";

export default {
  name: "Weather",
  apollo: {
    weather: {
      query: WEATHER,
      variables() {
        return {
          lat: this.gps.lat,
          long: this.gps.long
        };
      }
    }
  },
  data() {
    return {
      weather: [],
      gps: {
        lat: 0.0,
        long: 0.0
      }
    };
  },
  mounted() {
    navigator.geolocation.getCurrentPosition(location => {
      this.gps.long = location.coords.longitude;
      this.gps.lat = location.coords.latitude;
    });
  }
};
</script>

<style lang="less" scoped>
#weather {
  text-align: center;

  h1 {
    font-size: 50px;
  }
  .icon_padding {
    padding-left: 110px;
  }
  .infos {
    margin: 0 auto;
    h2 {
      font-size: 40px;
    }
    h4 {
      font-size: 23px;
    }
  }
}
</style>
