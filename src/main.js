import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'

import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://mtspvvsrtynleyhcvdqq.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10c3B2dnNydHlubGV5aGN2ZHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDczMTUyNDYsImV4cCI6MTk2Mjg5MTI0Nn0.I0FK2xbNva0kV8e-ObHBUUJhefV8Xk6iOjd5ZNq1mtQ",
  supabaseOptions: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
