import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import Boards from '../views/Boards.vue'
import Board from '../views/Board.vue'
// import Test from '../views/Test.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registration',
    name: 'registration',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/board-list',
    name:'board-list',
    component: Boards
  },
  {
    path: '/board/:id',
    component: Board,
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
