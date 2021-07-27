import { RouterMount,createRouter } from 'uni-simple-router';

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,  
	routes: [...ROUTES]
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	next();
});

// 全局路由后置守卫
router.afterEach((to, from) => {
  const data = JSON.stringify({ ...to, typeID: 'uni-app'})
	// debugger
	window.parent.postMessage(data, '*')
})

export {
	router,
	RouterMount
}