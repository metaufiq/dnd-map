import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import messages from './locales'

const i18n = createI18n({
  locale: 'id', // set current locale
  messages
})

const app = createApp(App)
app.use(i18n)
app.use(router)

app.mount('#app')
