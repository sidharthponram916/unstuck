<template>
  <div class="my-20">
     <div class = 'text-left m-2 p-2 text-3xl'><b>Welcome, {{ this.$store.state.userData.displayName }}! </b><br> <p class = 'text-sm'> Click on the title of the question to view the full page!</p></div>
     <div v-for = 'question of questions' :key = "question._id">
            <div class = 'm-auto bg-white p-4 m-2 w-11/12'> 
                  <h1 class = 'text-left font-bold text-2xl mb-3 underline'><a :href = "'/questions/' + question._id"> {{ question.question }} </a></h1>
                  <span class = 'mt-2 float-left text-sm' v-for = "subject of question.subjects" :key = 'subject'> <span class = 'bg-blue-700 mr-2 p-1 rounded text-white'> {{ subject }} </span> </span>
                  <br>
                  <p class = 'mt-5 text-left mb-3 text-sm'>Posed by <u><a :href = "'/profile/' + question.user_id"> {{ question.username }}</a></u> on {{ question.createdAt }}</p> 
                  <p class = 'text-left text-sm w-auto bg-gray-100 p-2'> {{ question.description }} </p>
            </div>
     </div>
  </div>
</template>

<script>
import moment from 'moment'; 

export default {
  name: 'Home',
  data() { 
    return { 
      user: "", 
      questions: [], 
      comments: []
    }
  },
  async mounted() { 
     if (this.$store.state.loggedIn === false) return location.replace('/login');
     
       let { data } = await this.$http.get('/questions/all'); 

       for (let question of data) { 
           question.createdAt = moment(question.createdAt).format('MM/DD/YY [at] hh:mm a')
       }

       this.questions = data.reverse(); 

  }, 
  methods: { 

  }
}
</script>
