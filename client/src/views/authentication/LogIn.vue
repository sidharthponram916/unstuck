<template>
     <div>
        
         <div class = 'my-48 p-5 bg-gray-300'>  
              <h1 class = 'text-4xl font-bold mb-5'> Log In to <span class = 'font-bold bg-gray-500 text-white p-1 rounded'> 📚UnStuck  </span> </h1>
         <form @submit.prevent = "logIn()">
              <label class = 'font-bold text-2xl'>E-Mail</label><br>
              <input
                type = 'email'
                placeholder = 'Email'
                class = 'm-2 p-2 w-1/2'
                v-model = 'user.email'
                >
              <br>
              <label class = 'font-bold text-2xl'>Password</label><br>
              <input
                type = 'password'
                placeholder = 'password'
                class = 'm-2 p-2 w-1/2'
                v-model = 'user.password'
              >
              <br>
              <button type = 'submit' class = 'p-2 m-2 bg-green-500 rounded text-white'>Log In</button>
              <p v-if = "errors" class = 'text-red-500'> {{ this.errors }}</p>
         </form>
         </div>
     </div>
</template>

<script>
export default {
    name: 'LogIn', 
    data() { 
        return { 
            user: {}, 
            errors: null
        }
    },
    async mounted() { 
          if (this.$store.state.loggedIn === true) return location.replace('/')
    },
    methods: { 
        async logIn() { 
              try {
                  let { data } = await this.$http.post('/auth/authorize', this.user);
                  
                        this.$http.defaults.headers.common['Authorization'] = data.token; 

                        localStorage.setItem("token", data.token); 
                        localStorage.setItem("id", data.user._id)

                        this.$store.commit("logIn"); 

                        location.replace('/'); 
                  
              }
              catch(e) { 
                  console.log(e.message);
                  
                  this.errors = "There was an error when logging in! Please check your email and password!"
              }
        }
    }
}
</script>

<style>

</style>