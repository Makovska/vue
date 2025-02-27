import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DriversView from '../views/drivers/DriversView.vue'
import BusesView from '../views/buses/BusesView.vue'
import AssignmentView from '../views/AssignmentView.vue'
import ContactsView from '../views/ContactsView.vue'
import DriverAddNew from '../views/drivers/DriverAddNew.vue'
import BusAddNew from '../views/buses/BusAddNew.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/drivers',
        name: 'drivers',
        component: DriversView,
    },
    {
        path: '/drivers/add-new/:driverId?',
        name: 'driverAddNew',
        component: DriverAddNew,
    },
    {
        path: '/buses',
        name: 'buses',
        component: BusesView,
    },
    {
        path: '/buses/add-new/:busId?',
        name: 'busAddNew',
        component: BusAddNew,
    },
    {
        path: '/assignment',
        name: 'assignment',
        component: AssignmentView,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsView,
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
