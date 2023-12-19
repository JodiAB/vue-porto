import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectView.vue'
import ServicesView from '../views/ServicesView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  
  {
    path: '/services',
    name: 'services',
    component: ServicesView
},

{
  path: '/Projects',
  name: 'projects',
  component: ProjectsView
},

{
  path: '/Contact',
  name: 'contact',
  component: ContactView
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
