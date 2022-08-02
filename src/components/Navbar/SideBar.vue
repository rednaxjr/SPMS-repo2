<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed    inset-0  z-20  transition-opacity  bg-black   opacity-50 lg:hidden   "
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="  fixed  inset-y-0  left-0  z-30  w-64 p-2 overflow-y-auto transition  duration-300   transform   bg-white 
        lg:translate-x-0 lg:static lg:inset-0  border-r-l border-right"
    >
      <div class="flex items-center   mt-8  w-full "> 
          <div class="mx-auto  content-center  items-center text-center"  >
            <div class="items-center w-full  "> 
              <!-- <font-awesome-icon icon="fa-solid fa-users"   class="h-12 w-12 mb-5 " /> -->
              <img src="@/assets/img/logo.png" class="h-32 w-32 ml-10  mb-4"/> 
            </div>
            <span class="  text-xl   font-bold   mt-4  text-gray-700">Student Profile System</span>
            </div> 
      </div>

      <nav class="mt-10">
        <p class="pl-4 text-xs font-semibold mb-4 text-gray-700">GENERAL</p>
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 "
          :class="[$route.meta.title === 'Dashboard' ? activeClass : inactiveClass]"
          to="/admin"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>

          <span class="mx-4">Dashboard</span>
        </router-link>
        <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-700">
          Employee
        </p>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200"
          :class="[$route.meta.title === 'Student' ? activeClass : inactiveClass]"
          to="/Student"
        >
          <svg
            class="w-5 h-5"
          viewBox="0 0 24 24" 
            fill="none"
           xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              fill="currentColor"
            />   
          </svg>

          <span class="mx-4">Student</span>
        </router-link>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 "
          :class="[$route.meta.title === 'Department' ? activeClass : inactiveClass]"
          to="/department"
        >
         
          <font-awesome-icon icon="fa-solid fa-building"  class="w-5 h-5"/>

          <span class="mx-4">Department</span>
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
  "bg-blue-700 text-white   rounded border-l-4"
);
const inactiveClass = ref(
  "border-gray-900 text-gray-500 hover:bg-blue-800  hover:text-gray-100 rounded-xl"
);
</script>
