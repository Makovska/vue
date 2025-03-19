import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MainLayout from './layouts/MainLayout.vue'
import InfoLayout from './layouts/InfoLayout.vue'

const app = createApp(App)

app.use(store)
app.use(router)

app.component('MainLayout', MainLayout)
app.component('InfoLayout', InfoLayout)

app.mount('#app')
