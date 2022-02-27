<template>
    <div class = 'my-20'>


         <div class = 'bg-white p-2 w-11/12 m-auto'> 
             <h1 class = 'text-left text-3xl font-bold'>{{ question.question }}</h1> 
             <span class = 'mt-4 float-left text-sm' v-for = "subject of question.subjects" :key = 'subject'> <span class = 'bg-gray-700 mr-2 p-1 rounded text-white'> {{ subject }} </span> </span>
             <br> 
             <p class = 'mt-6 text-left text-sm'>Posed by <u> {{ question.username }}</u> on {{ question.createdAt }}</p> 
         </div> 
         <div class = 'text-left bg-white p-2 m-2 w-11/12 m-auto h-84 overflow-y-auto'> 
              <h1 class = 'font-bold text-3xl mb-3'>Responses</h1>
            <div> 
                 <div class = 'bg-gray-100 p-2 w-auto mb-5'>
                     <b> {{ question.username }}</b> at {{ question.createdAt }}
                     <br> 
                     <p>{{ question.description }}</p>
                </div>
                <div v-for = 'comment of comments' :key = 'comment._id'>
                     <div v-if = 'comment.priority === true'>
                           <div class = 'bg-yellow-100 p-2 w-auto mb-5'>
                                 <b>BEST ANSWER: {{ comment.username }}</b> at {{ comment.createdAt }}
                                 <br> 
                                 <pre>{{ comment.comment }}</pre>
                                 <button v-if = 'question.username === $store.state.userData.displayName && comment.priority === true' @click = 'removePriority(comment._id)' class = 'bg-blue-700 p-1 m-1 rounded text-white'>Remove Priority ❌</button>
                                 <button v-if = 'comment.username === $store.state.userData.displayName' @click = 'deleteComment(comment._id)' class = 'bg-red-500 text-white p-1 m-1 rounded'>🗑️</button>
                           </div>
                  </div>
                </div>
                <div v-for = 'comment of comments' :key = 'comment._id'>
                  <div v-if = 'comment.priority === false'>
                     <div class = 'bg-gray-100 p-2 w-auto mb-5'>
                          <b> {{ comment.username }}</b> at {{ comment.createdAt }}
                          <br> 
                         <pre>{{ comment.comment }}</pre>
                     
                         <button v-if = 'question.username === $store.state.userData.displayName && comment.priority === false' @click = 'makePriority(comment._id)' class = 'bg-blue-700 p-1 m-1 rounded text-white '>Add Priority ⭐</button>
                         <button v-if = 'comment.username === $store.state.userData.displayName' @click = 'deleteComment(comment._id)' class = 'bg-red-500 text-sm text-white p-1 m-1 rounded'>🗑️</button>
                  </div>
                  </div>
                </div>
            </div>   
        </div> 

         <div class = 'flex mt-4 text-left bg-white p-3 m-2 w-11/12 m-auto'>
            <textarea
             type = 'text'
             class = 'w-full border-2 border-black p-2 h-11'
             placeholder = 'Answer the question, or make a related comment...'
             v-model = 'comment'
             ></textarea>
           <button @click = 'createComment()' class = 'ml-2 bg-blue-600 text-white p-2'>Send</button>
           </div> 
    </div>
</template>

<script>
export default {
     data() { 
         return { 
              question: {},
              comments: [],
              comment: null
         }
     }, 
     async mounted() { 
         if (this.$store.state.loggedIn == false) return location.replace('/login'); 

          try { 
            let question = await this.$http.get(`/questions/find/${this.$route.params.id}`); 
                 this.question = question.data; 

            let comments= await this.$http.get(`/comments/all`); 
                 comments = comments.data.filter(comment => { 
                       return comment.post_id === this.$route.params.id
                 });
              this.comments = comments.reverse(); 
          }
          catch (e) { 
              console.log(e.message);
          }
     }, 
     methods: { 
         async createComment() { 
              try { 
                 if (this.comment.trim()) {
                    await this.$http.post('/comments/create', { 
                          username: this.$store.state.userData.displayName, 
                          post_id: this.$route.params.id, 
                          comment: this.comment
                    })

                    this.comment = ''

                    location.reload()
                 }
                 else { 
                     alert('Please enter something before submitting');
                 }
              }
              catch (e) { 
                   console.log(e.message);
              }
         }, 
        async deleteComment(id) { 
             try { 
                   await this.$http.delete(`/comments/delete/${id}`);

                   location.reload();
             }
             catch (e) { 
                 console.log(e.message); 
             }
        }, 
        async makePriority(id) { 
            try { 
                await this.$http.put(`/comments/update/${id}`, { 
                     priority: true
                })

                location.reload(); 
            }
            catch (e) { 
                console.log(e.message); 
            }
        }, 
        async removePriority(id) { 
            try { 
                await this.$http.put(`/comments/update/${id}`, { 
                     priority: false
                })

                location.reload(); 
            }
            catch (e) { 
                console.log(e.message); 
            }
        }
    }
}
</script>

<style>

</style>