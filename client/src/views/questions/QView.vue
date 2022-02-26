<template>
    <div class = 'my-20'>
         <div class = 'bg-white p-2 m-2 w-11/12 m-auto'> 
             <h1 class = 'text-left text-3xl font-bold'>{{ question.question }}</h1> 
             <span class = 'mt-2 float-left text-sm' v-for = "subject of question.subjects" :key = 'subject'> <span class = 'bg-gray-700 mr-2 p-1 rounded text-white'> {{ subject }} </span> </span>
             <br> 
             <p class = 'mt-3 text-left mb-3 text-sm'>Posed by <u> {{ question.username }}</u> on {{ question.createdAt }}</p>  
         </div>
         <br> 
         <div class = 'text-left bg-white p-2 m-2 w-11/12 m-auto'> 
             <h1 class = 'font-bold text-3xl mb-3'>Responses</h1>
             <div class = 'bg-gray-100 p-2 w-auto mb-5'>
                  <b> SidharthPonram916 </b>
                  <br> 
                  <p>I'll send you the work via DMs on HangOuts</p>
             </div>
             <div class = 'bg-gray-100 p-2 w-auto mb-5'>
                  <b> SidharthPonram916 </b>
                  <br> 
                  <p>You would want to always keep the Oxygens and Hydrogens last, and then work from there. You should get the right answer.</p>
             </div>
             <div class = 'bg-gray-100 p-2 w-auto mb-5'>
                  <b>Vivaan Sawant</b>
                  <br> 
                  <p>Golf.</p>
             </div>
             <div class = 'bg-gray-100 p-2 w-auto mb-5'>
                  <b>Vivaan Sawant</b>
                  <br> 
                  <p>I have Liotti so don't ask me!</p>
             </div>
             <div class = 'bg-gray-100 p-2 w-auto mb-5'>
                  <b> Sibi Srinivasan</b>
                  <br> 
                  <p>I'm stupid and I don't know chemistry so please don't ask me lol.</p>
             </div>
             <div class = 'bg-gray-100 p-2 w-auto mb-5'>
                  <b> SidharthPonram916 </b>
                  <br> 
                  <p>Did that help?</p>
             </div>
         </div> 
         
    </div>
</template>

<script>
export default {
     data() { 
         return { 
              question: {}
         }
     }, 
     async mounted() { 
         if (this.$store.state.loggedIn == false) return location.replace('/login'); 

          try { 
            let { data } = await this.$http.get(`/questions/find/${this.$route.params.id}`); 
                 this.question = data; 
          }
          catch (e) { 
              console.log(e.message);
              location.replace('/')
          }
     }
}
</script>

<style>

</style>