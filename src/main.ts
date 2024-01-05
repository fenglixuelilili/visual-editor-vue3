import { createApp } from 'vue'
import App from './App.vue'
import gridLayout  from 'vue-grid-layout'
let app = createApp(App)
app.use(gridLayout)
app.mount('#app')
