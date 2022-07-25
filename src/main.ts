import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEarthAmericas, faBars, faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faEarthAmericas, faBars, faStar)

createApp(App)
  .use(router)
  .mount('#app')
