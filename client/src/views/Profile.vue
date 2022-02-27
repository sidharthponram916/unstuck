<template>
     <div class = 'my-20'>
           <div class = 'bg-white text-left m-4 p-2'> 
                 <h1 class = 'text-left text-3xl font-bold m-2 p-2'>{{ this.user.displayName }}</h1>
                 <p class = 'm-2 p-2 text-2xl'><b>Joined:</b> {{ this.user.createdAt }}</p>
                 <p class = 'm-2 p-2 text-2xl '><b>Subjects: </b>  
                   <span v-for = 'subject of user.subjects' :key = 'subject'>
                      <span class = 'bg-blue-700 text-white p-1 mr-2 rounded'>  {{ subject }} </span>
                   </span>
                 </p>
           </div>
           <div class = 'bg-white text-left m-4 p-2'> 
                 <h1 class = 'text-left text-3xl font-bold m-2 p-2'>{{ this.user.displayName }}'s Activity</h1>
                 <p class = 'p-4'>Activity data coming soon....</p>
           </div>
     </div>
</template>

<script>
export default {
      data() { 
          return { 
              user: {}, 
              stats: {}
          }
      }, 
      async mounted() { 
       if (this.$store.state.loggedIn === false) return location.replace('/login');

          let user = await this.$http.get(`/auth/find/${this.$route.params.id}`); 

          if(!user) return location.replace('/home');

              this.user = user.data; 
              console.log(user)

      }
}
</script>

<style>

</style>