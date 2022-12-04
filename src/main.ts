import { createApp } from 'vue';
import App from "./App.vue";

import "./assets/css/main.css";
import VueLodash from "vue-lodash";
import router from "./router";
import { createPinia } from "pinia";
import axios from "axios";
// import lodash from "lodash";
import VueAxios from "vue-axios";

import "bootstrap/dist/js/bootstrap.js"

import VueCookies from 'vue3-cookies'


const app = createApp(App);

// globalCookiesConfig({
//     expireTimes: "7d",
//     path: "/",
//     domain: "",
//     secure: true,
//     sameSite: "None",
// });


app.use(VueCookies);

app.use(VueCookies, {
    expireTimes: "7d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None"
});


app.use(VueLodash);

app.use(VueAxios, axios);

app.use(createPinia());

app.use(router);

app.mount("#app");