import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from "firebase";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups:[
      {
        imageUrl:'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        title: 'Какое-то название',
        id: 'sfsdsgsdg',
        date: '2020-07-15',
        time: '14:00',
        location:'sdfsd',
        description:'sdfsdfsdfsdfsd'
      },

    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedMeetups (state, payload) {
        state.loadedMeetups = payload
    },
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload){
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload){
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
      loadMeetups ({commit}) {
          commit('setLoading', true)
          firebase.database().ref('meetups').once('value')
              .then((data) => {
                  const meetups = []
                  const obj = data.val()
                  for (let key in obj) {
                      meetups.push({
                          id: key,
                          title: obj[key].title,
                          description: obj[key].description,
                          imageUrl: obj[key].imageUrl,
                          date: obj[key].date,
                          creatorId: obj[key].creatorId
                      })
                  }
                  commit('setLoadedMeetups', meetups)
                  commit('setLoading', false)
              })
              .catch(
                  (error) => {
                      console.log(error)
                      commit('setLoading', false)
                  }
              )
      },
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        time: payload.time,
        date: payload.date,
      }
      firebase.database().ref('meetups').push(meetup)
          .then((data) => {
              const key = data.key
              commit('createMeetup', {
                 ...meetup,
                  id: key
              })
          })
          .catch((error)=>{
              console.log(error)
          })
      // Reach out to firebase and store it

    },
    signUserUp ({commit}, payload){
        commit('setLoading', true)
        commit('clearError')
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                  commit('setLoading', false)
                  const newUser = {
                    id: user.uid,
                    registeredMeetups: []
                  }
                  commit('setUser', newUser)
                }
            )
            .catch(
                error => {
                  commit('setLoading', false)
                  commit('setError', error)
                  console.log(error.message)
                }
            )
    },
    signUserIn({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
          .then(
              user => {
                commit('setLoading', false)
                const newUser = {
                  id: user.uid,
                  registeredMeetups: []
                }
                commit('setUser', newUser)
              }
          )
          .catch(
              error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error)
              }
          )
    }
  },
  getters:{
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 1);
    },
    loadedMeetup (state) {
      return (meetupId) =>  {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  },
  modules: {

  }
})
