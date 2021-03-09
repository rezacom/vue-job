import { createApp } from 'vue'
import JobApp from './JobApp.vue'
import PlanerApp from './PlanerApp.vue'
import router from './router'

createApp(PlanerApp).use(router).mount('#app')
