import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product:[]
  },
  getters:{
    getproduct(state){
        return state.product
    }
  },
  actions: {
    allproduct(context){
      console.log(process.env.VUE_APP_baseURL);
      Axios.get(process.env.VUE_APP_baseURL+'productlist')
      .then((response)=>{
        console.log(response);
        context.commit('products',response.data.products)

      });

    }
  },
  mutations: {
    products(state,data){
      return state.product = data
    }
  },
  //modules: {}
});
