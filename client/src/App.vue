<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script> 
import Navbar from './components/Navbar.vue';

export default { 
     components: { 
        Navbar
     }, 
     mounted() { 
       console.log(this.$store.state.loggedIn);
     }
}
</script> 
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Poppins&display=swap');

body { 
    background: #cfd6f1;
}
pre { 
    font-family: Poppins, sans-serif
}
#app {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
