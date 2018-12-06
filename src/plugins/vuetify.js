import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";
import en from "@/i18n/english.ts";

Vue.use(
  Vuetify,
  {
    iconfont: "md",
    lang: {
      locales: {
        en
      }
    }
  },

  {
    primary: "#79ADDC",
    secondary: "#FFC09F",
    accent: "#FCF5C7",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  }
);
