import { createApp } from "vue";

import App from "../src/App.vue";
import router from "./router";

import "./assets/main.css";

//Vue object that creates a application it is passed the application from App.vue
const app = createApp(App);

//This uses the .use() method to include/run the code in router.
app.use(router);

//mounts the app to the appropriate div
app.mount("#app");
