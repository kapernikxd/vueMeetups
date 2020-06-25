import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Meetups from "../components/Meetup/Meetups"
import CreateMeetup from "../components/Meetup/CreateMeetup"
import Profile from "../components/User/Profile"
import Signin from "../components/User/Signin"
import Signup from "../components/User/Signup"
import Meetup from "../components/Meetup/Meetup";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/meetups',
    name: 'Meetups',
    component: Meetups
  },
  {
    path: '/meetup/new',
    name: 'CreateMeetup',
    component: CreateMeetup
  },
  {
    path: '/meetups/:id',
    name: 'Meetup',
    props: true,
    component: Meetup
  },
  {
    path: '/Profile',
    name: ' Profile',
    component: Profile
  },
  {
    path: '/signup',
    name: ' Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: ' Signin',
    component: Signin
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
