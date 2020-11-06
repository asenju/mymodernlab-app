import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#214252',
        secondary: '#bbbfca',
        accent: '#3797a4',
        error: '#af2d2d',
      },
    },
  },
});
