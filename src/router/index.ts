import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router' 
import MainLayout from '../components/Layouts/MainLayout.vue'
import LoginLayout from '../components/Layouts/LoginLayout.vue'
import RegisterLayout from '../components/Layouts/RegisterLayout.vue'
import Dashboard from '../views/DashboardView.vue'
import Employee from '../views/EmployeeView.vue'
import Index from '../views/IndexView.vue'
import Register from '../views/RegisterView.vue'
import Department from '../views/DepartmentView.vue'
import Login from '../views/LoginView.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: {  parent: true },
    component: LoginLayout,
    children:[
      {
      path: '/',
      alias: '/index', 
      component: Index,
      meta: { title: 'Index', ParentName:'Index' }
      },
      
      {
        path: '/login',
        name: 'login',
        meta: { title: 'Login' , ParentName:'Index'  },
        component: Login,
      },
    ]

  },
  {   path: '/',
  meta: {  parent: true },
  component: RegisterLayout,
  children:[{
    path: '/register',
    alias: '/register',
    component: Register,
    meta: { title: 'Register' , ParentName:''  }
  }]
  
  }, 
 
  {
    path: '/admin',
    meta: { RouteForAdmin: true, parentRoute: 'Admin' },
    component: MainLayout,
    children:[
      {
      path: '/admin',
      alias: '/admin',
      
      component: Dashboard,
      meta: { title: 'Dashboard', ParentName:'Admin' }
      },
      {
        path: '/Student',
        alias: '/Student',
        component: Employee,
        meta: { title: 'Student' , ParentName:'Admin'  }
      }, 
      {
        path: '/profile',
        alias: '/profile',
        component: Dashboard,
        meta: { title: 'Profile', ParentName:'Admin'  }
      },
      {
        path: '/department',
        alias: '/department',
        component: Department,
        meta: { title: 'Department' , ParentName:'Admin'   }
      }, 
    ]
  },
 
  
 
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
