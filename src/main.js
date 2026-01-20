import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCode,
  faCube,
  faCamera,
  faMobileScreen,
  faThumbsUp,
  faLifeRing,
} from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(faCode, faCube, faCamera, faMobileScreen, faThumbsUp, faLifeRing)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
