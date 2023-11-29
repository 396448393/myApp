const staticRouters = [
  { path: '/',
    name: 'index',
    component: () => import('../components/AppIndex.vue') 
	},
  { path: '/openPage',
    name: 'openPage',
    component: () => import('../components/feature/OpenPage.vue') 
  	},
	{ path: '/aiPainting',
	  name: 'aiPainting',
	  component: () => import('../components/feature/AIPainting.vue') 
		},
];
export default staticRouters;