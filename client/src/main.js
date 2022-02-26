import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import http from './http'

Vue.config.productionTip = false

Vue.prototype.$http = http; 

if (localStorage.getItem("token")) {

  http.defaults.headers.common['Authorization'] = localStorage.getItem("token"); 

  store.commit("logIn"); 

  http.get(`/auth/find/${localStorage.getItem('id')}`)
  .then( res  => { 
    store.commit("pushData", res.data); 
  })
  .catch(err => { 
      console.log(err.message);

     /*  delete http.defaults.headers.common.Authorization; 

       localStorage.removeItem("id"); 
       localStorage.removeItem("token"); 

       store.commit("logOut"); 

       location.replace('/login'); */
  }) 
   
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
