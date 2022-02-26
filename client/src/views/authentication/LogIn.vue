<template>
     <div>
        
         <div class = 'my-48 p-5 bg-gray-300'>  
              <h1 class = 'text-4xl font-bold mb-5'> Log In to <span class = 'font-bold bg-gray-500 text-white p-1 rounded'> 📚UnStuck  </span> </h1>
         <form>
              <label class = 'font-bold text-2xl'>E-Mail</label><br>
              <input
                type = 'email'
                placeholder = 'Email'
                class = 'm-2 p-2 w-1/2'
                >
              <br>
              <label class = 'font-bold text-2xl'>Password</label><br>
              <input
                type = 'password'
                placeholder = 'password'
                class = 'm-2 p-2 w-1/2'
              >
              <br>
              <button type = 'submit' class = 'p-2 m-2 bg-green-500 rounded text-white'>Log In</button>
         </form>
         </div>
     </div>
</template>

<script>
export default {
    name: 'LogIn', 
    components: { 

    }
}
</script>

<style>

</style>