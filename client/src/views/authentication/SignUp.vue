<template>
     <div>  
         <div class = 'my-20 p-5 bg-gray-100'>  
              <h1 class = 'text-4xl font-bold mb-5'> Sign Up to <span class = 'font-bold bg-gray-500 text-white p-1 rounded'>📚UnStuck</span> </h1>
              <form @submit.prevent = "signUp()">
 
              <label class = 'font-bold text-2xl'>Display Name</label><br>

              <input
                type = 'text'
                placeholder = 'Enter a Display Name'
                class = 'm-2 p-2 w-1/2 border-2 border-black rounded'
                v-model = 'user.display_name'
              >
              <br>
            <label class = 'text-2xl mb-4'><b>Subjects</b> (separate with a comma) </label>
            <div v-if = "user.subjects">
                 <div class = 'inline-block p-1' v-for = "subject in user.subjects.split(',')" :key = "subject"> 
                      <span class = 'p-1 bg-blue-600 text-white rounded mx-1 text-sm'> {{ subject }} </span>
                 </div>
            </div>
             <br>
              <input
                type = 'text'
                placeholder = 'Enter your subjects here.'
                class = 'm-2 p-2 w-1/2 border-2 border-black'
                v-model = 'user.subjects'
              >
              <br>
             <label class = 'font-bold text-2xl'>Email</label><br>
              <input
                type = 'email'
                placeholder = 'Enter your Email'
                class = 'm-2 p-2 w-1/2 border-2 border-black'
                v-model = 'user.email'
                >
              <br>
              <label class = 'font-bold text-2xl'>Password</label><br>
              <input
                type = 'password'
                placeholder = 'password'
                class = 'm-2 p-2 w-1/2 border-2 border-black'
                v-model = 'user.password'
              >
              <br>
              <button type = 'submit' class = 'p-2 m-2 bg-green-500 rounded text-white'>Sign Up</button>
         </form>
         </div>
     </div>
</template>

<script>
export default {
     data() { 
         return { 
              user: { 
                  email: "", 
                  password: "", 
                  subjects: null, 
                  display_name: "",
              }
         }
     },
     async mounted() { 
        if (this.$store.state.loggedIn === true) return location.replace('/home');
     },
     methods: { 
         async signUp() { 
              try { 
                 let { data } =  await this.$http.post(`/auth/create`, { 
                       email: this.user.email, 
                       password: this.user.password, 
                       displayName: this.user.display_name, 
                       subjects: this.user.subjects.toLowerCase().split(', ')
                  })

                  this.$http.defaults.headers.common['Authorization'] = data.token; 

                      localStorage.setItem("token", data.token); 
                      localStorage.setItem("id", data.user._id);
                
                  this.$store.commit("logIn");                  
                  location.replace('/home')
              }
              catch (e) { 
                  alert("There was an error. Please fill out all fields!");
                  console.log(e)
              }
         }
     }
}
</script>

<style>

</style>