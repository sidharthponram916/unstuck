import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex); 

const store = new Vuex.Store({ 
    state: { 
        loggedIn: false, 
        userData: { }
    }, 
    mutations: { 
        logIn(state) { 
            state.loggedIn = true; 
        }, 
        logOut(state) { 
            state.loggedIn = false; 
        }, 
        pushData(state, data) { 
            state.userData = data
        }
    }
})

export default store; 