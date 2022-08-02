<template>
   <nav class="relative     fixed top-0    flex flex-wrap items-center justify-between px-2 py-3 bg-blue-700 mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4  lg:static lg:block lg:justify-start ">
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap   text-white hidden md:block" >
          
            <p class="text-sm font-bold text-white   outline-none focus:outline-none    "> Students Profile</p>
        </a>
        <button  @click="isOpen = true" class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" >
         
          <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
      </div>
       
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <router-link to="/index" class="ml-2 mr-2" :class="[$route.meta.title === 'Index' ? activeClass : inactiveClass]"> 
            <li class="nav-item cursor-pointer " > 
                <a class="px-3 py-2 flex items-center text-xs   font-bold leading-snug  hover:opacity-75">
                  <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span class=" ">Home</span>
                </a> 
            </li>
          </router-link> 
          <router-link to="/Login" class="ml-2 mr-2" :class="[$route.meta.title === 'Login' ? activeClass : inactiveClass]"> 
            <li class="nav-item cursor-pointer " > 
                <a class="px-3 py-2 flex items-center text-xs   font-bold leading-snug  hover:opacity-75">
                  <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span class=" ">Login</span>
                </a> 
            </li>
          </router-link> 
          <router-link to="/index" class="ml-2 mr-2" :class="[$route.meta.title === 'Location' ? activeClass : inactiveClass]"> 
            <li class="nav-item cursor-pointer " > 
                <a class="px-3 py-2 flex items-center text-xs   font-bold leading-snug  hover:opacity-75">
                  <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span class=" ">  <font-awesome-icon icon="fa-solid fa-globe" /></span>
                </a> 
            </li>
          </router-link> 
            
           
          
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scope>
 .header-logo{
   height:75px;
  
   width: 100px; 
    
 } 
</style>
<script setup lang="ts"> 
import { ref } from "vue";
import { useSidebar } from "../useSidebar";


const { isOpen } = useSidebar();
const activeClass = ref(
  "bg-white text-blue-700   rounded  "
);
const inactiveClass = ref(
  " text-white hover:bg-white bg-opacity:25 hover:text-blue-800  rounded "
);
</script>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:'HomeHeader', 
    data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    },
    logout(){
      console.log("logout")
    }

  }
})
</script>

