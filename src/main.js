import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/styles/tailwind.css'

import 'material-icons/iconfont/material-icons.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

AOS.init();

app.use(router).mount('#app')
