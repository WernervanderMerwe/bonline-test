import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHouse, faBell);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
