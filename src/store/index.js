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
        date: '2020-07-15'
      },
      {
        imageUrl:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        title: 'Какое-то название2',
        id: 'wefwefwef',
        date: '2020-07-10'
      }
    ],
    user: {
      id: 'sdfsdsadf',
      registeredMeetups: ['sefwewefwefwef']
    }
  },
  mutations: {
  },
  actions: {
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
