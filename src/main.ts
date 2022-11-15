import { createApp } from 'vue';
import App from "./App.vue";
import "./assets/css/main.css";
import VueLodash from "vue-lodash";
import router from "./router";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
// import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

const app = createApp(App);

app.use(VueLodash);

app.use(VueAxios, axios);

app.use(createPinia());

app.use(router);

app.mount("#app");