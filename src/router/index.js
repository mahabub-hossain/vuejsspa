import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Userlist from "../views/Userlist.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Admindashboard from "../views/Admindashboard.vue";
import Createproduct from "../views/Createproduct.vue";
import Productlist from "../views/Productlist.vue";
import Editproduct from "../views/Editproduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/user",
    name: "user",
    component: Userlist
  },
  {
    path: "/register",
    name: "register",
    component:Register
  },
  {
    path: "/login",
    name: "login",
    component:Login
  },
  {
    path: "/admin-dashboard",
    name: "admindashboard",
    component:Admindashboard
  },
  {
    path: "/add-product",
    name: "Createproduct",
    component:Createproduct
  },
  {
    path: "/product-list",
    name: "Productlist",
    component:Productlist
  },
  {
    path: "/edit-product/:productid",
    name: "Editproduct",
    component:Editproduct
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
