<template>
    <div>
        <div class="mt-4 ">
             <div class="min-h-full flex">
                
                    <div class="hidden lg:block relative w-0 flex-1 items-center justify-center flex">
                         <img src="../assets/img/logo.png" class="logo   outline-none focus:outline-none"  /> 
                    <!-- <img class="absolute inset-0 h-full w-full   " src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="" /> -->
                    </div>
                    <div class="flex-1 flex flex-col justify-center p-4 py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 p-4 border shadow">
                    <div class="mx-auto w-full max-w-sm lg:w-96 ">
                        <div class="items-center">
                       
                        <h2 class="mt-6 text-3xl font-extrabold text-blue-800 justify-center">Sign in to your account</h2>
                        
                        </div>

                        <div class="mt-8">
                         

                        <div class="mt-6">
                            <form   @submit.prevent="loginForm" class="space-y-6">
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
                                <div class="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" v-model="email"   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>

                            <div class="space-y-1">
                                <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
                                <div class="mt-1 relative">
                                <input id="password" name="password"   :type="show ? 'password' : 'text'"    v-model="password"  autocomplete="current-password"  
                                 class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 ">
                                    <font-awesome-icon icon="fa-solid fa-eye" class="h-5 text-gray-700" fill="none" @click="show = !show"
                                    :class="{'hidden': !show, 'block':show }"/>
                                    <font-awesome-icon icon="fa-solid fa-eye-slash" class="h-5 text-gray-700" fill="none" @click="show = !show"
                                    :class="{'block': !show, 'hidden':show }"/>
                                </div>
                                </div>
                                  <transition name="hint" appear v-if="this.password != ''"    > 
                                    <div v-if='passwordValidation.errorsList.length > 0 && !submitted' class='hints '>
                                    <div   :key="item"  class="  italic" style="color:red;font-size:12px; ">
                                        <p>Must contain an uppercase, lowercase, alphanumeric and special characters and must be 8 characters or higher </p>
                                    </div>
                                    </div>
                                </transition>
                            </div>
                            <!---Password validation-->
                              
                            <!---End of password validation-->

                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
                                </div>

                                <div class="text-sm">
                                <a href="#" class="font-medium text-blue-800 hover:text-blue-700"> Forgot your password? </a>
                                </div>
                            </div>

                            <div>
                                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
                                shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-900 focus:outline-none 
                                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
                            </div>
                            <div class="flex items-center justify-center mb-2">
                                <div class="flex items-center"> 
                                     <router-link class="duration-200 "     to="/Register"  > 
                                <label   class="ml-2 block text-sm text-gray-900 cursor-pointer" > 
                                 

                                    Sign Up
                                   
                                    </label>
                                     </router-link> 
                                </div> 
                                
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'; 
  import axios from 'axios';
  export default defineComponent({ 
    data: () => ({  
    submitted:false,
    show:true,
    rules: [
          { message:'One lowercase letter required.', error: "1", regex:/[a-z]+/ },
          { message:"One uppercase letter required.",  error: "2",  regex:/[A-Z]+/ },
          { message:"8 characters minimum.",  error: "3",  regex:/.{8,}/ },
          { message:"One number required.",  error:"4", regex:/[0-9]+/ },
          { message:"One special character required (ex: @#$%^&).",  error:"5", regex:/[*@!#%&()^~{}]+/ }
    ], 
    info: [],
    errors: '',
    password:'',
    email:'',
    item: '',
    
               
    }),
    created(){
        console.log(this.$store.getters.getUser)
    },
    methods:{
        async loginForm(){ 
        const data = {
          email : this.email,
          password:this.password
        }
         console.log(data); 
          await axios.post('http://localhost:3333/auth/login', data)
         .then(res=>{
            console.log(res);

            if(res.data.status == 404){
               alert("Wrong password")
            
            }else{
                 localStorage.setItem('access_token', res.data.access_token);
                 this.$store.commit("LoginData", res.data.userInfo)
                 alert("Login Succesfully")
                 this.$router.push({path:'/admin'}); 
                
            }
          }
        ); 
        
      },
         
    },
        computed:{ 
            passwordValidation () {
                let errorsList = []
                let errorNumber ;
                for (let condition of this.rules) {
                  errorNumber = condition.error;
                     if (!condition.regex.test(this.password)) {
                        errorsList.push(condition.message)
                     
                    }
                                
                } 
                console.log(errorNumber , "asa");
              
                if (errorsList.length === 0) {
                    return { valid:true, errorsList }
                } else {
                    return { valid:false, errorsList }
                }
            }
           
        }

  })
    
</script>