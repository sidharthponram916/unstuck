<template>
  <div class="my-32">

     <div v-for = 'question of questions' :key = "question._id">
            <div class = 'm-auto bg-white p-4 m-2 w-11/12'> 
                  <h1 class = 'text-left font-bold text-2xl mb-3 underline'><a :href = "'/questions/' + question._id"> {{ question.question }} </a></h1>
                  <span class = 'mt-2 float-left text-sm' v-for = "subject of question.subjects" :key = 'subject'> <span class = 'bg-blue-700 mr-2 p-1 rounded text-white'> {{ subject }} </span> </span>
                  <br>
                  <p class = 'mt-5 text-left mb-3 text-sm'>Posed by <u> {{ question.username }}</u> on {{ question.createdAt }}</p> 
                  <p class = 'text-left text-sm w-auto bg-gray-100 p-2'>{{ question.description }}</p>

            </div>
     </div>

     <a href = '/ask' class = 'p-2 m-2 bg-blue-700 text-white rounded fixed bottom-10 right-10'>Ask A Question</a>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() { 
    return { 
      user: "", 
      questions: []
    }
  },
  async mounted() { 
     if (this.$store.state.loggedIn === false) return location.replace('/login');
     
       let questions = await this.$http.get('/questions/all'); 
       this.questions = questions.data.reverse(); 
  }
}
</script>
