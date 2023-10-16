import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/styles/tailwind.css'

import 'material-icons/iconfont/material-icons.css';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/api/'
axios.defaults.headers.common["Accept"] ="application/json";

import AOS from 'aos'
import 'aos/dist/aos.css'

import { createPinia } from 'pinia'

const app = createApp(App)

AOS.init();

app.use(router).use(createPinia()).mount('#app')
