import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Contacts from './views/Contacts.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/projects', component: Projects},
    {path: '/contacts', component: Contacts},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
