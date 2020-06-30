<template>
  <v-container>
    <v-layout row wrap class="mt-5">
      <v-flex xs12 sm6 class="text-sm-right">
        <v-btn large router to="/meetups" class="mr-2">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left">
        <v-btn large router to="/meetup/new" class="ml-2">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
                indeterminate
                class="primary--text"
                :width="7"
                :size="70"
                v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-5" v-if="!loading">
      <v-flex xs12>
        <v-carousel hide-delimiters>
          <v-carousel-item
                  v-for="meetup in meetups"
                  :key="meetup.id"
                  :src="meetup.imageUrl"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                  @click="onLoadMeetup(meetup.id)"
          >
            <div class="carousel-title">
              {{meetup.title}}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-5">
      <v-flex xs12 class="text-center">
        <p>Welcome to our meetups!</p>
      </v-flex>
    </v-layout>

  </v-container>
</template>



<style>
  .carousel-title {
    position: absolute;
    bottom: 0px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
    width: 100%;
    text-align: center;
  }

</style>


<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {

    },
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onLoadMeetup(id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>


