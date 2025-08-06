import { createApp } from "vue";
import VueKonva from 'vue-konva'
import { createPinia } from 'pinia'
import App from "./App.vue";
import './css/style-global.css'

const app = createApp(App);
app.use(createPinia());
app.use(VueKonva);
app.mount("#app");
