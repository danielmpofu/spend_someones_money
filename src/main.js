import { createApp } from 'vue'
import './assets/app_style.css';
import './assets/bootstrap-grid_min.css'
import App from './App.vue'

import {store}  from '@/state/store';

// Vuetify

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(router).use(vuetify).use(store).mount('#app')
