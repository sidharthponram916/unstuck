<template>
  <div class="my-36">
    Hello World
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }, 
  async mounted() { 
     if (this.$store.state.loggedIn === false) return location.replace('/login'); 
  }
}
</script>
