<template>
    <div>
        <div class="mt-4 ">
            <!-- <div class=" relative flex flex-row  px-1  h-full  mx-auto p-4 w-full items-center  justify-center  grid"> 
                <div class=" w-4/12  ">
                    <div class=" absolute  border-b-lg border bg-gray-600 h-2   w-full"></div>      
                </div>
                <div class=" w-4/12 ">
                     <p style="font-size:59px" class="  font-Liberation Mono mb-3 text-3xl ml-4 leading-6 text-gray-600 flex w-full italic items-center  justify-center  ">
                        News & Events
                    </p>                   
                </div>
                <div class=" w-4/12  ">
                    <div class="   absolute  ml-4 border-b-lg border bg-gray-600 h-2   w-full"></div>      
                </div>
            </div> -->
            <div class="flex flex-row mx-auto px-1  h-full flex justify-center items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                 <div class="ml-4 border-b-lg border bg-gray-600 h-2   w-full"></div>
                
                    <p style="font-size:59px" class="  font-Liberation Mono mb-3 text-3xl ml-4 leading-6 text-gray-600  w-full italic items-center flex   justify-center " >News & Events</p>
                 
                <div class="ml-4 border-b-lg border bg-gray-600 h-2   w-full"></div>
            </div>
            <div class=" mx-auto px-1  mt-10 "> 
                <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <!--Card 1-->
                    <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="../assets/img/camera.jpg" alt="Mountain">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Mountain</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    
                    </div>
                    <!--Card 2-->
                    <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="../assets/img/camera.jpg"  alt="River">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">River</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    
                    </div>

                    <!--Card 3-->
                    <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="../assets/img/camera.jpg"  alt="Forest">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Forest</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    
                    </div>
                </div> 
            </div>

            
        </div>
        
    </div>
</template>
<script  > 
export default { 

  data: () => ({   
    token:localStorage.getItem("access_token"), 
  }),
  created(){
    console.log(this.$store.getters.getUser)
    
  }

  ,
  methods:{

  } 

}

</script>