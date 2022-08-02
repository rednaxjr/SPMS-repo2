import { createApp } from 'vue'
import DashboardLayout from "@/components/Layouts/MainLayout.vue"; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'  
import { faBars,faGlobe, faXmark, faEye, faEyeSlash, faBell, faArrowRightFromBracket , faUsers, faBuilding} from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'
import store from './store'  
import './index.css'

library.add(faUserSecret,faBars,faGlobe,faXmark,faEye, faEyeSlash,faBell ,faArrowRightFromBracket, faUsers, faBuilding)
const app  =  createApp(App); 
app.component("default-layout", DashboardLayout); 

app.use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
    
 
