import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'tailwindcss/tailwind.css'; // Add this line if you're using Tailwind CSS or update it based on your CSS framework

const app = createApp(App);
app.use(VueAxios, axios);
app.use(store)
app.use(router)

app.mount('#app');