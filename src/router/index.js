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
          component: () => import("@/views/Home/HomeView.vue"),
        },
        {
          path: "on-sale",
          name: "on-sale",
          component: () => import("@/views/OnSale/OnSaleView.vue"),
        },
        {
          path: "brands",
          name: "brands",
          component: () => import("@/views/Brands/BrandsView.vue"),
        },
        {
          path: "new-arrivals",
          name: "new-arrivals",
          component: () => import("@/views/NewArrivals/NewArrivalsView.vue"),
        },
      ],
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthLayout,
      children: [
        {
          path: "signin",
          name: "signin",
          component: () => import("@/views/Auth/SigninView.vue"),
        },
        {
          path: "signup",
          name: "signup",
          component: () => import("@/views/Auth/SignupView.vue"),
        },
        {
          path: "forgot-password",
          name: "forgot-password",
          component: () => import("@/views/Auth/ForgotPasswordView.vue"),
        },
      ],
    },
  ],
});

export default router;
