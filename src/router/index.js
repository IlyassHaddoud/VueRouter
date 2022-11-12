import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import ContactView from "../views/ContactView";
import ChampsView from "../views/Champs/ChampsView";
import ChampsDetailsView from "../views/Champs/ChampsDetailsView";
import NotFound from "../views/NotFound";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/champs",
    name: "champs",
    component: ChampsView,
  },
  {
    path: "/champs/:id",
    name: "champsDetails",
    component: ChampsDetailsView,
    props: true,
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
