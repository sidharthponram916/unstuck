<!-- <template>
   <div class = 'my-32'>

       <div class = 'bg-white m-2 p-10 w-3/4 m-auto'>
       <h1 class = 'text-4xl font-bold mb-4'>Challenge a Question</h1>
       <div class = ''>
            <input
                type = 'text'
                :class = 'styles.input'
                placeholder = 'Make the question...'
                v-model = 'challenge.question'
            >

             <input
                type = 'text'
                :class = 'styles.input'
                placeholder = 'Enter subjects... separate with comma.'
                v-model = 'challenge.subjects'
            > 
            <input
                type = 'text'
                :class = 'styles.input'
                v-model = 'challenge.description'
                placeholder = 'Challenge answer!'
            >
            <br>
            <button class = 'p-2 mx-3 bg-blue-700 text-white rounded mb-4'>Ask Question</button>
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
            challenge: {},
            styles: { 
                input: 'border-2 p-2 rounded border-black w-3/4 mb-2 mt-4'
             }
       }
   }
}
</script>

<style>

</style> -->