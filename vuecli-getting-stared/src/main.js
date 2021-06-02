import { createApp } from 'vue'
import App from './App.vue'
import '@fect-ui/themes/main.css'
import Fect from './plugins/fect'

createApp(App)
  .use(Fect)
  .mount('#app')
