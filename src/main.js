import Vue, {createApp} from 'vue'
import './assets/app_style.css';
import './assets/bootstrap-grid_min.css'
import './assets/mansonry-grid.css';
import App from './App.vue'

import {store}  from '@/state/store';
import Vuex from 'vuex';
// Vuetify

import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import MasonryWall from '@yeger/vue-masonry-wall'




const vuetify = createVuetify({
    components,
    directives,
})
let app = createApp(App);

app.use(store);
app.use(Vuex);
app.use(vuetify);
app.use(MasonryWall);

app.mount('#app')
