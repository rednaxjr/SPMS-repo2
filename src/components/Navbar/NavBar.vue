<template>
  <header
    class="  flex  items-center justify-between px-6  py-2  bg-white  border-b-4 border-blue-800   "
  >
    <div class="flex items-center">
      <button   @click="isOpen = true"  class="text-gray-500 focus:outline-none lg:hidden"  >
         <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
    </div>

    <div class="flex items-center">
      <div class="flex items-center">
        <div class="relative">
          <button
            @click="notificationOpen = !notificationOpen"
            class="flex mx-4 text-gray-600 focus:outline-none"
          >
            <font-awesome-icon icon="fa-solid fa-bell" class="h-6 w-6" />
            
          </button>

          <div
            v-show="notificationOpen"
            @click="notificationOpen = false"
            class="fixed inset-0 h-full w-full z-10"
          ></div>

          <div
            v-show="notificationOpen"
            class="absolute  right-0  mt-2    w-80 bg-white rounded-lg  shadow-xl overflow-hidden   z-10  "
            style="width: 20rem"
          >
            <a  href="#"  class="    flex     items-center      px-4   py-3
                text-gray-600
                hover:text-white hover:bg-indigo-600
                -mx-2
              "
            >
              <img
                class="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1552774021-9ebbb764f03e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                alt="avatar"
              />
              <p class="text-sm mx-2">
                <span class="font-bold" href="#">Evan Josh</span> replied on the
                <span class="font-bold text-indigo-400" href="#"
                  >Upload Image</span
                >
                artical . 2m
              </p>
            </a>
            <a
              href="#"
              class="
                flex
                items-center
                px-4
                py-3
                text-gray-600
                hover:text-white hover:bg-indigo-600
                -mx-2
              "
            >
              <img
                class="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt="avatar"
              />
              <p class="text-sm mx-2">
                <span class="font-bold" href="#">Slick Net</span> start
                following you . 45m
              </p>
            </a>
            <a
              href="#"
              class="
                flex
                items-center
                px-4
                py-3
                text-gray-600
                hover:text-white hover:bg-indigo-600
                -mx-2
              "
            >
              <img
                class="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />
              <p class="text-sm mx-2">
                <span class="font-bold" href="#">Jane Doe</span> Like Your reply
                on
                <span class="font-bold text-indigo-400" href="#"
                  >Test with TDD</span
                >
                artical . 1h
              </p>
            </a>
            <a
              href="#"
              class="
                flex
                items-center
                px-4
                py-3
                text-gray-600
                hover:text-white hover:bg-indigo-600
                -mx-2
              "
            >
              <img
                class="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                alt="avatar"
              />
              <p class="text-sm mx-2">
                <span class="font-bold" href="#">Abigail Bennett</span>
                start following you . 3h
              </p>
            </a>
          </div>
        </div>
      </div>
      <div class="relative">
        <button
          @click="dropdownOpen = !dropdownOpen"
          class="
            relative
            z-10
            block
            w-8
            h-8
            overflow-hidden
            rounded-full
            shadow
            focus:outline-none
          "
        >
          <img
            class="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
            alt="Your avatar"
          />
        </button>

        <div
          v-show="dropdownOpen"
          @click="dropdownOpen = false"
          class="fixed inset-0 z-10 w-full h-full"
        ></div>

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-show="dropdownOpen"  class="  absolute right-0  z-20  w-48  py-1 mt-2 bg-white rounded-lg shadow-xl "
          >
            <a href="#"  class="   px-4   py-2
                flex
                rounded-md
                text-sm text-gray-700
                hover:bg-indigo-600 hover:text-white
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Profile</a
            >
            <a
              href="#"
              class="
                flex
                rounded-md
                px-4
                py-2
                text-sm text-gray-700
                hover:bg-indigo-600 hover:text-white
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings</a
            >
            <div 
             
              class="
                flex
                px-4
                py-2
                rounded-md
                text-sm text-gray-700
                hover:bg-indigo-600 hover:text-white
                cursor-pointer
              "
              @click="logout"
            >
                <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" class="h-4 w-4 mr-1" />
              
              Log out</div>
            
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script setup  >
import { ref } from "vue";
import { useSidebar } from "../useSidebar";

const dropdownOpen = ref(false);
const { isOpen } = useSidebar();
const notificationOpen = ref(false);
</script>
<script> 
export default { 

  data: () => ({  
    fname:null,
    token:localStorage.getItem("access_token"), 
  }),
  created(){
    console.log(this.$store.getters.getUser)
    this.fname = this.$store.getters.getUser.fname;
  }

  ,
  methods:{
    logout(){
      this.$store.commit("LoginData", null)
      this.$router.replace({ path: '/' })
    }
  } 

}

</script>
