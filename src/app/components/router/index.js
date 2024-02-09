import { createRouter, createWebHistory } from 'vue-router'

import Entry from '@/views/Entry'

const Notifications = () => import('@/views/Notifications')
const Tag = () => import('@/views/Tag')
const Menu = () => import('@/views/Menu')
const About = () => import('@/views/About')

import FeedRoutes from '@/app/components/router/modules/feed'
import UserRoutes from '@/app/components/router/modules/user'
import SearchRoutes from '@/app/components/router/modules/search'
import BookmarksRoutes from '@/app/components/router/modules/bookmarks'
import SettingsRoutes from '@/app/components/router/modules/settings'
import HelpRoutes from '@/app/components/router/modules/help'
import AuthRoutes from '@/app/components/router/modules/auth'


const routes = [
	...FeedRoutes,
	...UserRoutes,
	...SettingsRoutes,
	...BookmarksRoutes,
	...SearchRoutes,
	...HelpRoutes,
	...AuthRoutes,
	
	{ path: '/', name: 'home', redirect: { name: 'feed' } },
	
	{ path: '/e/:uuid', name: 'entry', component: Entry, props: true },
	{ path: '/t/:slug', name: 'tag', component: Tag, props: true  },

	{ path: '/notifications', name: 'notifications', component: Notifications },
	
	{ path: '/menu', name: 'menu', component: Menu },
	{ path: '/donate', name: 'donate', component: About },
	{ path: '/about', name: 'about', component: About },

	{ path: '/:pathMatch(.*)*', redirect: { name: 'feed' } }
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	pathToRegexOptions: { strict: true },
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition)
			return savedPosition
		else if (to.hash)
			return { selector: to.hash }
		else
			return { x: 0, y: 0 }
	}
})

export default router
