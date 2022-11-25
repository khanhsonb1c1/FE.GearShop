import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";
import homePageVue from "./view/homePage.vue";
import ProductDetailVue from "./view/ProductDetail.vue";
import AdminPageVue from "./view/AdminPage.vue";
import ProductManagerPageVue from "./view/ProductManagerPage.vue";
import CategoryManagerPageVue from "./view/CategoryManagerPage.vue";
import CompanyManagerPageVue from "./view/CompanyManagerPage.vue";
import OrderManagerVue from "./view/OrderManager.vue";
import OrderDetailManagerVue from "./view/OrderDetailManager.vue";
import CartPageVue from "./view/CartPage.vue";
import BlogPageVue from "./view/BlogPage.vue";
import BlogDetailPageVue from "./view/BlogDetailPage.vue";
import BlogManagerVue from "./view/BlogManager.vue";
import loginPageVue from "./view/loginPage.vue";
import registerPageVue from "./view/registerPage.vue";
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
            path: "/cart",
            name: "cart",
            component: CartPageVue,
            meta: { title: "Giỏ hàng" },
        },

        {
            path: "/blog",
            name: "blog",
            component: BlogPageVue,
            meta: { title: "Blog" },
        },

        {
            path: "/blog/:id",
            name: "blog-detail",
            component: BlogDetailPageVue,
            meta: { title: "Blog detail" },
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
            path: "/admin/company",
            name: "company-manager",
            component: CompanyManagerPageVue,
            meta: { title: "Dashboard Company" },
        },

        {
            path: "/admin/blog",
            name: "blog-manager",
            component: BlogManagerVue,
            meta: { title: "Dashboard Blog" },
        },

        {
            path: "/admin/order",
            name: "order-manager",
            component: OrderManagerVue,
            meta: { title: "Dashboard Order" },
        },

        {
            path: "/admin/order/:id",
            name: "order-detail-manager",
            component: OrderDetailManagerVue,
            meta: { title: "Dashboard Order Detail" },
        },



        {
            path: "/login",
            name: "login",
            component: loginPageVue,
            meta: {
                title: "Đăng nhập",

            },
        },

        {
            path: "/register",
            name: "register",
            component: registerPageVue,
            meta: {
                title: "Đăng xuất",

            },
        },

    ],
});

router.beforeEach((routeTo, routeFrom, next) => {
    const authRequired = routeTo.matched.some((route) => route.meta.authRequired);
    if (!authRequired) {
        return next();
    }


});


export default router;
