<template>
  <div class="flex h-screen bg-gray-200 font-roboto " >
    <Sidebar/>

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
         
        <div class="container mx-auto px-6 py-8  " > 
         <div class="   w-full p-2 tracking-wide   ">
            <v-row>
              <v-col cols="12" class="">
                <div class="display:inline flex font-Liberation Mono mb-3">
                <h3 class="text-3xl  leading-6 text-gray-600 font-bold">{{$route.meta.ParentName}} /</h3> 
                <h3 class="text-3xl leading-6 text-dark font-bold ml-2">   {{$route.meta.title}}</h3>
                </div>
                <!-- <span class="">{{getCurrentDate()}}</span> -->
              </v-col>
            </v-row>  
          </div>
             
          <div class="p-2   mt-12   ">
          <RouterView></RouterView>
          </div>
          
          
          <slot />
        </div>
        <!-- <div class="h-full w-full bg-green-700 p-2">
        </div> -->
      </main>
  
    </div>
  </div> 
</template>

<script setup lang="ts">
import Sidebar from '../Navbar/SideBar.vue'
import Header from '../Navbar/NavBar.vue'
import DashboardCard from '../DashboardCards.vue'



</script>
<script lang="ts">
export default {
  name: 'App',
  
  data: () => ({
    //
  }),
  methods: {
    getCurrentDate(){
      const cur_date = new Date();
      const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      return day[cur_date.getDay()] + ', ' + month[cur_date.getMonth()] + ' ' + cur_date.getDate() + '; ' + this.formatAMPM(cur_date);
    },
    formatAMPM(date:any) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }

  }
};


</script>