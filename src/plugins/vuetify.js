import Vue from "vue";
import Vuetify from "vuetify/lib";
import "../stylus/main.styl";
import en from "@/i18n/english.ts";
import fr from "@/i18n/french.ts";

Vue.use(
  Vuetify,
  {
    iconfont: "md",
    lang: {
      locales: {
        en,
        fr
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
