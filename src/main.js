import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/main.css";
import feather from "vue-icon";
createApp(App).use(router).use(feather, "v-icon").mount("#app");
