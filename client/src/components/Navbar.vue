<template>
    <ul class="fixed top-0 bg-blue-500 right-0 left-0 flex flex-auto items-center p-3 text-white shadow-lg ">
        <li class = 'mx-3'>
            <span class = 'text-2xl text-white font-bold'> 📚 UnStuck  </span>
        </li> 
        <li class = 'mx-3'>
            <a href = '/ask' class = 'text-xl bg-yellow-600 text-white p-1 rounded font-bold'> Ask Question</a>
        </li> 
        <li class = 'mx-3'>
            <a href = '/post' class = 'text-xl bg-blue-700 text-white p-1 rounded  font-bold'>Post Notes</a>
        </li>  
        <li class = 'ml-auto'>
            <a v-if = "$store.state.loggedIn == false" href = '/login' class = 'text-2xl text-white'>Log In</a>
        </li> 
         <li class = 'ml-5'>
            <a v-if = "$store.state.loggedIn == false" href = '/register' class = 'text-2xl text-white'> Sign Up </a>
        </li> 
        <li class = 'ml-5'>
            <a v-if = "$store.state.loggedIn == true" href = '' @click = 'logOut()' class = 'text-2xl text-white'> Log Out </a>
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