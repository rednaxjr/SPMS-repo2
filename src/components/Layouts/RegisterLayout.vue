<template>
  <div class="flex h-screen   font-roboto " >
    
    <div class="  flex-1 flex flex-col overflow-hidden" >
         <main class="flex-1 overflow-x-hidden overflow-y-auto ">
         
        <div class="container mx-auto px-6 py-8">  
          <RouterView></RouterView>
          <slot />
        </div>
      </main> 
    </div>
  </div>

</template>
<script setup lang="ts">

</script>
