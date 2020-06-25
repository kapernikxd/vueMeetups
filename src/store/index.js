import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups:[
      {
        imageUrl:'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        title: 'Какое-то название',
        id: 'sfsdsgsdg',
        date: '2020-07-15',
        time: '14:00'
      },
      {
        imageUrl:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        title: 'Какое-то название2',
        id: 'wefwefwef',
        date: '2020-07-10',
        time: '15:00'
      }
    ],
    user: {
      id: 'sdfsdsadf',
      registeredMeetups: ['sefwewefwefwef']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        time: payload.time,
        date: payload.date,
        id: 'kfdlsfjslakl12'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
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
    }
  },
  modules: {

  }
})
