import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../layouts/HomeLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeLayout,
      children: [
        {
          path: "",
          name: "home",
          component: ()=> import("@/views/HomeView.vue")
        },
        {
          path: "contact",
          name: "contact",
          component: ()=> import("@/views/ContactView.vue")
        },
        {
          path: "services",
          name: "services",
          component: ()=> import("@/views/ServicesView.vue")
        },
        {
          path: "pricing",
          name: "pricing",
          component: ()=> import("@/views/PricingView.vue")
        }
      ],
    },
    {
      path:"/auth",
      name:"auth",
      component: AuthLayout,
      children:[
        {
          path: "signin",
          name: "signin",
          component: ()=> import("@/views/SigninView.vue")
        },
        {
          path: "signup",
          name: "signup",
          component: ()=> import("@/views/SignupView.vue")
        }
      ]
    }
  ],
});

export default router;
