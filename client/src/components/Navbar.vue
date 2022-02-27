<template>
    <ul class="fixed top-0 bg-blue-600 right-0 left-0 flex flex-auto text-white items-center p-3 shadow-lg ">
        <li class = 'mx-3'>
            <a href = '/home' class = 'text-2xl  font-bold'> 📚 UnStuck  </a>
        </li> 
        <li class = 'mx-3'>
            <a href = '/ask' class = 'text-sm font-bold  p-1 rounded'> Ask Question</a>
        </li> 
        <li class = 'ml-auto'>
            <a v-if = "$store.state.loggedIn == false" href = '/login' class = 'text-sm '>Log In</a>
        </li> 
         <li class = 'ml-5'>
            <a v-if = "$store.state.loggedIn == false" href = '/register' class = 'text-sm '> Sign Up </a>
        </li> 
        <li class = 'ml-5'>
            <a v-if = "$store.state.loggedIn == true" href = '' @click = 'logOut()' class = 'text-md font-bold'>Log Out ({{ this.$store.state.userData.displayName }})</a>
        </li> 
    </ul>
  
</template>

<script>
export default {
    methods: { 
        async logOut() { 
            this.$store.commit('logOut'); 
               localStorage.removeItem("id"); 
               localStorage.removeItem("token"); 

            delete this.$http.defaults.headers.common.Authorization; 
        }
    }
}
</script>

<style>

</style>