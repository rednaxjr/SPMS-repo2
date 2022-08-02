<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="  fixed    inset-0  z-20  transition-opacity  bg-black   opacity-50 lg:hidden   "
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="  fixed  inset-y-0  left-0  z-30  w-64 p-2 overflow-y-auto transition  duration-300   transform   bg-blue-700 
        lg:translate-x-0 lg:static lg:inset-0  border-r-l border-right lg:hidden"
    >
      

      <nav class="mt-10">
        
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 "
          :class="[$route.meta.title === 'Index' ? activeClass : inactiveClass]"
          to="/Index"
        > 
          <span class="mx-4">Home</span>
        </router-link> 
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200"
          :class="[$route.meta.title === 'Login' ? activeClass : inactiveClass]"
          to="/login"
        >
         

          <span class="mx-4">Login</span>
        </router-link>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 "
        :class="[$route.meta.title === 'Location' ? activeClass : inactiveClass]"
          to="/Location"
        > 

          <span class="mx-4"><font-awesome-icon icon="fa-solid fa-globe" /></span>
        </router-link>

 

       
 
       
       
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"> 
import { ref } from "vue";
import { useSidebar } from "../useSidebar";


const { isOpen } = useSidebar();
const activeClass = ref(
  "bg-white  text-blue-800 font-bold  rounded  "
);
const inactiveClass = ref(
  " text-white font-bold hover:bg-white   hover:text-blue-800 rounded-xl"
);
</script>
