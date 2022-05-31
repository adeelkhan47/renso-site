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
        path: "cart/edit/:cartId/:transactionId",
        name: "Edit",
        component: () => import("../pages/CartEditPage.vue")
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => import("../pages/BookingsPage.vue")
      },
      {
        path: "/checkout",
        name: "Checkout",
        component: () => import("../pages/Checkout.vue")
      },
      {
        path: "/success",
        name: "Success",
        component: () => import("../pages/PaymentSuccess.vue")
      },
      {
        path: "/failure",
        name: "Failure",
        component: () => import("../pages/PaymentFailure.vue")
      }
    ]
  }
];

export default routes;
