<template>
   <div class = 'my-32'>

       <div class = 'bg-white m-2 p-10 w-3/4 m-auto'>
       <h1 class = 'text-4xl font-bold mb-4'> Ask a Question </h1>
       <div class = ''>
            <input
                type = 'text'
                v-model = 'post.question'
                :class = 'styles.input'
                placeholder = 'Ask the question. What is on your mind...'
            >
            <span v-if = 'post.subjects'>
               <br> 
                 <span class = 'inline-block' v-for = 'subject in post.subjects.split(", ")' :key = 'subject'> 
                      <span class = 'p-1 bg-gray-200 text-black rounded mx-1 text-sm'> {{ subject }} </span>
                 </span> 
               <br>
            </span>
             <input
                type = 'text'
                v-model = 'post.subjects'
                :class = 'styles.input'
                placeholder = 'Enter subjects... separate with comma.'
            > 
            <textarea
                type = 'text'
                v-model = 'post.description'
                :class = 'styles.input'
                placeholder = 'Give a description about your question...'
            ></textarea>
            <br>
            <button @click = 'makePost()' class = 'p-2 mx-3 bg-blue-700 text-white rounded mb-4'>Ask Question</button>
            <br>
            <p> This feature helps you collaborate with other students in solving this problem. When you post this question, eventually, a fellow student will answer your question. </p> 
            </div>
       </div>
   </div>
</template>

<script>
export default {
   data() { 
        return { 
             post: { }, 
             styles: { 
                input: 'border-2 p-2 rounded border-black w-3/4 mb-2 mt-4'
             }
        }
   },
  async mounted() { 
     if (this.$store.state.loggedIn === false) return location.replace('/login'); 
  }, 
  methods: { 
      makePost() { 
        console.log(this.$store.state.userData);
          this.$http.post('/questions/create', {
               username: this.$store.state.userData.displayName, 
               user_id: localStorage.getItem("id"),  
               question: this.post.question, 
               description: this.post.description, 
               subjects: this.post.subjects.toLowerCase().split(', ')
          })
          .then(() => { 
               location.replace('/');
          })
          .catch((err) => { 
              console.log(err.message); 
          })
      }
  }
}
</script>

<style>

</style>