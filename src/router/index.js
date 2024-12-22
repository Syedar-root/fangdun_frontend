import {
    createRouter,
    createWebHashHistory
} from "vue-router";
const routes = [
	{
        path: "/",
        component: () => import("../view/login.vue"),
    },
	{
		path: "/register",
		component: () => import("../view/register.vue"),
	},
	{
		path: "/resetPassword",
		component: () => import("../view/resetPassword.vue"),
	},
	{
		path: "/mindMap",
		component: () => import("../view/mindMap.vue"),
	},
	{
		path: "/indexPage",
		component: () => import("../view/indexPage.vue"),
	},
	{
		path: "/userCenter",
		component: () => import("../view/userCenter.vue"),
	}
   
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;