import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { requiresAuth: false },
    },
    {
        path: '/lessons',
        name: 'lessons',
        redirect: { name: 'selectLessons' },
        meta: { requiresAuth: false },
        children: [
            {
                path: 'select',
                name: 'selectLessons',
                component: () =>
                    import(/* webpackChunkName: "lessonsSelect" */ '../views/Lessons/LessonsSelectView.vue'),
                meta: { requiresAuth: true },
            },
            {
                path: ':idLessons(\\d+)+',
                name: 'teachersSelect',
                component: () =>
                    import(/* webpackChunkName: "teachersSelect" */ '../views/Teachers/TeachersSelectView.vue'),
                meta: { requiresAuth: true },
                props: true,
                beforeEnter: (to, from) => {
                    const isLogin = localStorage.getItem('userName')
                    if (from.name !== 'selectLessons') {
                        if (isLogin) return { name: 'selectLessons' }
                        else return { name: 'home' }
                    }

                    const isDataValid = to.params.idLessons.every((id) =>
                        store.state.lessons.lessons.find((lesson) => lesson.id == id)
                    )
                    if (!isDataValid) {
                        return { name: 'NotFoundPage' }
                    }
                },
            },
            {
                path: ':scheduleData(\\d+-\\d+)+',
                name: 'schedule',
                component: () => import(/* webpackChunkName: "schedule" */ '../views/Lessons/ScheduleView.vue'),
                meta: { requiresAuth: false },
                props: true,
                beforeEnter: (to, from) => {
                    if (from.name !== 'teachersSelect') return { name: 'selectLessons' }
                },
            },
        ],
    },
    {
        path: '/teachers',
        name: 'teachers',
        component: () => import(/* webpackChunkName: "teachers" */ '../views/Teachers/TeachersView.vue'),
        meta: { requiresAuth: false },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginPageView.vue'),
        meta: { requiresAuth: false },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFoundPage',
        component: () => import(/* webpackChunkName: "NotFoundPage" */ '../views/NotFoundPage.vue'),
        meta: { requiresAuth: false },
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to) => {
    const isLogin = localStorage.getItem('userName')
    if (to.meta.requiresAuth && !isLogin) {
        return {
            name: 'login',
            query: { redirect: to.fullPath },
        }
    }
})

export default router
