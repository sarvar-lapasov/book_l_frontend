import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/pages/HomePage.vue"),
        name: "home",
    },
    {
        path: "/posts",
        component: () => import("@/pages/BlogPage.vue"),
        name: "blog",
    },
    {
        path: "/about",
        component: () => import("@/pages/AboutPage.vue"),
        name: "about",
    },
    {
        path: "/services",
        component: () => import("@/pages/ServicePage.vue"),
        name: "services",
    },
    {
        path: "/contact",
        component: () => import("@/pages/ContactPage.vue"),
        name: "contact",
    },
    {
        path: "/categories/:id",
        component: () => import("@/pages/CategoryBookPage.vue"),
        name: "category",
    },
    {
        path: "/add-book",
        component: () => import("@/pages/AddBookPage.vue"),
        name: "create new book",
    },
    {
        path: "/add-post",
        component: () => import("@/pages/AddPostPage.vue"),
        name: "create new post",
    },
    {
        path: "/edit-book/:bookId",
        component: () => import("@/pages/EditBookPage.vue"),
        name: "edit book #",
    },
    {
        path: "/edit-post/:postId",
        component: () => import("@/pages/EditPostPage.vue"),
        name: "edit post #",
    },
    {
        path: "/book-info/:bookId",
        component: () => import("@/pages/BookInfoPage.vue"),
        name: "book-id: ",
    },
    {
        path: "/post-info/:postId",
        component: () => import("@/pages/PostInfoPage.vue"),
        name: "post-id: ",
    },
    {
        path: "/login",
        component: () => import("@/pages/LoginPage.vue"),
        name: "login",
    },
    {
        path: "/register",
        component: () => import("@/pages/RegisterPage.vue"),
        name: "register",
    },
    {
        path: "/notification",
        component: () => import("@/pages/NotificationPage.vue"),
        name: "notification",
    },

    {
        path: "/:pathMatch(.*)*",
        component: () => import("@/pages/ErrorPage.vue"),
        name: "error",
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
