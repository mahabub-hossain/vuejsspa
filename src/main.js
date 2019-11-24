import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import jQuery from 'jquery'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Form, HasError, AlertError } from 'vform'
import Swal from 'sweetalert2'
import Vuetify from 'vuetify'
import { ClientTable } from 'vue-tables-2';
Vue.use(ClientTable);
//axios.default.baseURL = '';
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.use(Vuetify)
global.jQuery = jQuery
global .$ = jQuery
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)
Vue.prototype.$form = Form;
Vue.prototype.$swal=Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
Vue.prototype.$toast = Toast;
window.bootstrap=bootstrap
Vue.prototype.$axios = axios
Vue.config.productionTip = false;
Vue.prototype.$localStorage = new Vue({
  data: { 
     // token property returning the ls token value 
     token: window.localStorage.getItem('token'),
     type:window.localStorage.getItem('type')
  },
  watch:{ 
     // watcher listening for changes on the token property
     // to ensure the new value is written back to ls 
     token(value){ window.localStorage.setItem('token', value) } ,
     type(value){ window.localStorage.setItem('type', value) }
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
