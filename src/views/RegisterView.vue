<template>
     
            <v-cloak   class="show" id="show">
                <div class="container bg-gray mx-auto px-4 py-10 h-full   ">
                      <div class="flex content-center items-center justify-center h-full">
                        <div class="w-full lg:w-5/12">
                        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0 ">
                            <div class="rounded-t mb-0 px-6 py-6">
                                <div class="justify-center  flex"> 
                                    <h2 class="mt-6   font-extrabold text-blue-800 ">Sign Up</h2> 
                                </div> 
                            </div>
                             <div class="mt-6 relative">
                            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                <div class="w-full border-t border-gray-300" />
                            </div>
                            
                            </div>
                            <form  @submit.prevent="registerform()" class="p-5" enctype="multipart/form-data">
                                <div class=" justify-center items-center">
                                    <div id="show" v-cloak>
                                        <div class="flex flex-row p-4 w-full"> 
                                            <div class=" w-full ">
                                                <label for="fname" class="block text-sm font-medium text-gray-700"> Profile Picture </label>
                                                <div class="mt-1">
                                                    <div class="w-full h-56 bg-gray-700 flex">
                                                    <img :src=" url" ref="imgChangable" class="w-full " @click="$refs.file.click()"/>
                                                    </div>
                                                <input   type="file"     ref="file" style="display: none" @change="onSelect"   />
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <div class="flex flex-row p-4 w-full"> 
                                            <div class=" w-1/2 mr-2">
                                                <label for="fname" class="block text-sm font-medium text-gray-700"> First Name </label>
                                                <div class="mt-1">
                                                <input id="fname" name="fname" type="text"  v-model="fname"   :class="inputt"  />
                                                </div>
                                            </div>
                                             <div class=" w-1/2 ml-2">
                                                <label for="lname" class="block text-sm font-medium text-gray-700"> Last Name </label>
                                                <div class="mt-1">
                                                <input id="lname" name="lname" type="text"  v-model="lname"    :class="inputt"  />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-row pl-4 pr-4 w-full"> 
                                            <div class=" w-full">
                                                <label for="email" class="block text-sm font-medium text-gray-700">  Email</label>
                                                <div class="mt-1">
                                                <input id="email" name="email" type="email" placeholder="email@example.com"   v-model="email"    :class="inputt" />
                                                </div>
                                            </div> 
                                        </div>
                                        <div class="flex flex-row pl-4 pr-4 w-full mt-4"> 
                                            <div class=" w-full" >
                                                <div class="flex justify-between">
                                                <label for="password" class="block text-sm font-medium text-gray-700">  Password</label>
                                                 <transition name="hint" appear v-if="this.password != ''"    > 
                                            <div v-if='passwordValidation.errorsList.length > 0 && !submitted' class='hints pl-4 pr-4'>
                                                
                                                <div   :key="item"  class="inline-block justify-end " style="color:red;font-size:12px; ">
                                                
                                               <p>*{{messssageeee}} </p>
                                                    
                                                    </div>
                                            </div>
                                        </transition>
                                                </div>
                                                <div class="mt-1 relative">
                                                <input  id="password" name="password" 
                                              :type="show ? 'password' : 'text'"
                                                 @keyup="checkPassword(); matched()"  v-model="password"  :class="inputt" />
                                                 <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 ">
                                                    <font-awesome-icon icon="fa-solid fa-eye" class="h-5 text-gray-700" fill="none" @click="show = !show"
                                                     :class="{'hidden': !show, 'block':show }"/>
                                                      <font-awesome-icon icon="fa-solid fa-eye-slash" class="h-5 text-gray-700" fill="none" @click="show = !show"
                                                  :class="{'block': !show, 'hidden':show }"/>
                                                 </div>
                                                </div>
                                            </div> 
                                        </div> 
                                        
                                       

                                        <!---Password validation-->
                                        <transition name="hint" appear v-if="this.password != ''"    > 
                                            <div v-if='passwordValidation.errorsList.length > 0 && !submitted' class='hints pl-4 pr-4'>
                                                
                                            <div   :key="item"  class="  italic" style="color:red;font-size:12px; ">
                                                <p>Must contain an uppercase, lowercase, alphanumeric and special characters and must be 8 characters or higher </p>
                                             </div>
                                            </div>
                                        </transition>
                                         <!---End of password validation-->
                                         <div class="flex flex-row pl-4 pr-4 w-full mt-4"> 
                                            <div class=" w-full relative" >
                                                <label for="password" class="block text-sm font-medium text-gray-700">  Re type password</label>
                                                <div class="mt-1 relative">
                                                <input id="repassword"
                                                         :type="retypeshow ? 'password' : 'text'"
                                                     name="repassword"   v-model="repass" @keyup="matched()"  :class="inputt" />
                                                   <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 ">
                                                    <font-awesome-icon icon="fa-solid fa-eye" class="h-5 text-gray-700" fill="none" @click="retypeshow = !retypeshow"
                                                     :class="{'hidden': !retypeshow, 'block':retypeshow }"/>
                                                      <font-awesome-icon icon="fa-solid fa-eye-slash" class="h-5 text-gray-700" fill="none" @click="retypeshow = !retypeshow"
                                                  :class="{'block': !retypeshow, 'hidden':retypeshow }"/>
                                                 </div>
                                                </div>
                                            </div> 
                                        </div>
                            
                                         <transition name="hint" appear v-if="this.password != ''"    > 
                                            <div v-if='notSamePasswords' class='hints pl-4 pr-4'>
                                                
                                                <div   :key="item"  class="inline-block" style="color:red;font-size:12px;">
                                                
                                               {{notSame}} 
                                                    
                                                    </div>
                                            </div>
                                        </transition>
                                        <div class="flex flex-row pl-4 pr-4 w-full mt-4"> 
                                            <div class=" w-full">
                                                <button    :disabled="isDisabledba "
                                                    class="bg-blue-700 text-white w-full  hover:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded hover:shadow-lg outline-none  disabled:bg-gray-700 "
                                                    type="submit" 


                                                    style="transition: all 0.15s ease 0s;"
                                                     >
                                                    Sign Up
                                                </button>
                                            </div> 
                                        </div>
                                        

                                    </div>
                                </div>
                            </form>
                            
                        </div>
                        </div>
                      </div>
                </div>
            </v-cloak> 
</template>

<script setup lang="ts">
import { ref } from "vue";
const inputt = ref(
  "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
);


 
 
</script>

<script lang="ts">
  import { defineComponent } from 'vue'; 
  import axios from 'axios'; 
  export default defineComponent({ 
    el:'#show',
    
    data: () => ({
            
           
                rules: [ 
                { message:" One uppercase letter required. ",  regex:/[A-Z]+/ },
                { message:" 8 characters minimum. ",    regex:/[a-z]+.{8,}/ },
                { message:" One number required. ",    regex:/[0-9]+/ },
                { message:" One special character required (ex: @#$%^&). ",   regex:/[*@!#%&()^~{}]+/ }
                ], 
                fname: "", profilePicture:'',
                lname:"",
                username: "",
                password: "",
                info: [],
                errors: '',
                item: '',
                errorsList:[], 
                userData:'',
                isDisabledba:true,
                uname: '',
                uusername: '', 
                ulastname: '',
                repass:'',
                passwordVisible:false,
                submitted:false,
                show:true,
                retypeshow:true,
                messssageeee:'',
                notSame:'',
                selectedFile:'',
                email:'',
                file:"",
                //  newUrl:[{
                //     urls:require('@/assets/img/camera.jpg')
                // }],
                url: require('@/assets/img/camera.jpg')
           }),
        
        props: {
            msg: String,
        },
        methods: {
        onSelect(event:any){
            const file =  event.target.files[0];
             this.selectedFile = event.target.files[0];
             this.url =  URL.createObjectURL(file)
             console.log(event)
        }, 
        registerform(){ 


          const data = {
            fname:this.fname,
            lname:this.lname, 
            username : this.username,
            password:this.password, 
            email:this.email, 
          }
          
          console.log( this.selectedFile);
          
          const fd = new FormData();
          fd.append("file",  this.selectedFile);
          fd.append("body",  JSON.stringify(data));

          console.log(JSON.stringify(data));
          if(this.fname ==""||this.fname==null){
              console.log("Username is required");
          }else if(this.lname ==""||this.lname==null){
              console.log("Last name is Required")
          } else if(this.password ==""||this.password==null){
                  console.log("Password is Required");
          }else if(this.password != this.repass){
                  console.log("Password dont match");
          }else{
              axios.post('http://localhost:3333/user/upload', fd) .then(res=>{
                if(res.data.status == 400){
                    alert("User unsuccesfully not created");
                }else{
                     alert("User has been succesfully created");
                        this.$router.push({path:'/'});
                }
              console.log(res);
                console.log("Account Created");
                    
                   }); 
          } 
      },

            // async checkPassword(){

            //     console.log("aaa")
            //     let upCaseReq =new RegExp('(?=.*[A-Z])')
            //     let numOfTextReq = new RegExp('(?=.*[a-z]+.{8,})')
            //     let numericReq = new RegExp('(?=.*[0-9])')
            //     let oneSpecialChar = new RegExp('(?=.*[@$!%*?&])')
               
            //     if(!upCaseReq.test(this.password)){
            //         this.messssageeee = "1 Upper Case is Required";
            //         console.log(this.messssageeee)
            //         console.log("sulod sa if")
            //     }else if(!numOfTextReq.test(this.password)){
            //         this.messssageeee = "8 characters minimum";
                      
            //     } else if(!numericReq.test(this.password)){
            //         this.messssageeee = "One number required.";
                      
            //     } else if(!oneSpecialChar.test(this.password)){
            //         this.messssageeee = "One special character required (ex: @#$%^&).";
                      
            //     }else if(this.password !=this.repass){
            //             this.notSame = "Passwords don't match."
            //     }else{
            //         this.messssageeee =""
            //     }
                
            // },


            checkPassword(){

                console.log("aaa")
                let upCaseReq =new RegExp('(?=.*[A-Z])')
                let numOfTextReq = new RegExp('(?=.*[a-z]+.{8,})')
                let numericReq = new RegExp('(?=.*[0-9])')
                let oneSpecialChar = new RegExp('(?=.*[@$!%*?&])')
               
                if(!upCaseReq.test(this.password)){
                   this.messssageeee = "1 Upper Case is Required";
                   
                }else if(!numOfTextReq.test(this.password)){
                   this.messssageeee = "8 characters minimum";
                      
                } else if(!numericReq.test(this.password)){
                   this.messssageeee = "One number required.";
                      
                } else if(!oneSpecialChar.test(this.password)){
                   this.messssageeee = "One special character required (ex: @#$%^&).";
                      
                }else if(this.password !=this.repass){
                    this.notSame = "Passwords don't match."
                }else{
                  this.messssageeee =""
                }
                
            },
             matched(){
                if(this.password == "" || this.repass==""){
                 this.isDisabledba = true
                }else if(this.password == this.repass){
                 this.isDisabledba = false
                }else{
                   this.isDisabledba = true
                }
            },

            async logout(){
            this.$router.replace({path:'/'});
            },
           
               
            togglePasswordVisibility () {
                this.passwordVisible = !this.passwordVisible
            },
            resetPasswords () {
                this.password = ''
                this.repass = ''
                this.submitted = true
                setTimeout(() => {
                    this.submitted = false
                }, 2000)
            },
        },
        computed:{
           
            notSamePasswords () {
                if (this.passwordsFilled) {
                    this.notSame = "Passwords don't match."
                    return (this.password !== this.repass)
                    
                } else {
                    return false
                }
            },
            passwordsFilled () {
                return (this.password !== '' && this.repass !== '')
            },

           
            passwordValidation () {
                let errorsList = [] 
                for (let condition of this.rules) { 
                     if (!condition.regex.test(this.password)) {
                        errorsList.push(condition.message)
                     
                    }
                                
                } 
              
              
                if (errorsList.length === 0) {
                    return { valid:true, errorsList }
                } else {
                    return { valid:false, errorsList }
                }
            }
           
        }
    })
</script>