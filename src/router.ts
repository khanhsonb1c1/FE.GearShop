import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";
import loginPageVue from "./components/loginPage.vue";
import homePageVue from "./view/homePage.vue";
import ProductDetailVue from "./view/ProductDetail.vue";
import AdminPageVue from "./view/AdminPage.vue";
import ProductManagerPageVue from "./view/ProductManagerPage.vue";
import CategoryManagerPageVue from "./view/CategoryManagerPage.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/home",
            redirect: "/",
        },

        {
            path: "/",
            name: "home",
            component: homePageVue,
            meta: { title: "Trang chủ" },
        },

        {
            path: "/product-detail/:id",
            name: "product-detail",
            component: ProductDetailVue,
            meta: { title: "Chi tiết sản phẩm" },
        },

        {
            path: "/admin",
            name: "admin",
            component: AdminPageVue,
            meta: { title: "Dashboard" },
        },

        {
            path: "/admin/product",
            name: "product-manager",
            component: ProductManagerPageVue,
            meta: { title: "Dashboard Product" },
        },

        {
            path: "/admin/category",
            name: "category-manager",
            component: CategoryManagerPageVue,
            meta: { title: "Dashboard Category" },
        },



        {
            path: "/login",
            name: "login",
            component: loginPageVue,
            meta: {
                title: "Đăng nhập",
                authRequired: true,
            },
        },

    ],
});

// router.beforeEach((routeTo, routeFrom, next) => {
//     const authRequired = routeTo.matched.some((route) => route.meta.authRequired);
//     if (!authRequired) {
//         return next();
//     }


// });

// router.afterEach((to) => {
//     nextTick(() => {
//         document.title =
//             (to.meta.title || to.name) + " | " + import.meta.env.VITE_APP_NAME;
//     });
// });

export default router;
