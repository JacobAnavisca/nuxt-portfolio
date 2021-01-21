import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#e26610',
        secondary: '#db9501',
        accent: '#6e6702',
        background: '#3e5258'
      }
    }
  }
})
