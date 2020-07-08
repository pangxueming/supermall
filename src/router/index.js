import Vue from "vue";
import VueRouter from "vue-router";

//路由懒加载
const Home = () => import("views/home/Home");
const Category = () => import("views/category/Category");
const Cart = () => import("views/cart/Cart");
const Profile = () => import("views/profile/Profile");

//安装插件
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/category",
    component: Category
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
