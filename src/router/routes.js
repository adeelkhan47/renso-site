import MainLayout from "../layouts/MainLayout.vue";
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "MainLayout",
    component: MainLayout,
    children: [
      {
        path: "",
        component: HomePage
      },
      {
        path: "/home",
        name: "Home",
        component: HomePage
      },
      {
        path: "/bookings",
        name: "Bookings",
        component: () => import("../pages/BookingsPage.vue")
      },
      {
        path: "/checkout",
        name: "Checkout",
        component: () => import("../pages/Checkout.vue")
      }
    ]
  }
];

export default routes;
