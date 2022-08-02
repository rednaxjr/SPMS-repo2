<template>
  <div class="mt-1   h-full">  
    <DashboardCard/> 
  </div>  
  <h1>Something</h1>
</template>
 
<script> 
import DashboardCard from '../components/DashboardCards.vue'
export default { 
   components: {
    DashboardCard,
  },
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

  } 

}

</script>