import { createApp } from 'vue'
import App from './App.vue'
import '@fect-ui/themes/main.css'
import Fect from './plugins/fect'
/**
 * yarn add @fect-ui/vue-icons -S
 * or
 * npm install @fect-ui/vue-icons -S
 */
import Icon from '@fect-ui/vue-icons'


createApp(App)
  .use(Fect)
  .use(Icon)
  .mount('#app')
