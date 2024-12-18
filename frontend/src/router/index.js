import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import SignUp from '@/views/SignUp.vue'
import Login from '@/views/Login.vue'
import HelpRequest from '@/views/HelpRequest.vue'
import SendRequest from '@/views/SendRequest.vue'
import Helpers from "@/views/Helpers.vue"
import HelperSignup from '@/views/HelperSignup.vue'

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/signup", name: "Signup", component: SignUp },
    { path: "/login", name: "Login", component: Login },
    { path: "/helprequest", name: "HelpRequest", component: HelpRequest },
    { path: "/sendrequest", name: "SendRequest", component: SendRequest },
    { path: "/helpers", component: Helpers },
    { path: "/helpersignup", name: "helpersignup", component: HelperSignup }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router