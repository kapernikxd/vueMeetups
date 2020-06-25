<template>
  <v-app>
    <v-toolbar class="brown lighten-5">
      <v-app-bar-nav-icon @click.stop ="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">MeetUp</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items  class="hidden-xs-only">
        <v-btn class="header__bnt" flat
               v-for="(menuItem, i) in menuItems"
               :key="i"
               :to="menuItem.link"
        >
          <v-icon left>{{menuItem.icon}}</v-icon>
          {{ menuItem.text}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="sideNav">
      <v-card>
        <v-list flat>
          <v-subheader>Menu</v-subheader>
          <v-list-item-group v-model="menuItem" color="primary">

            <v-list-item
                    v-for="(menuItem, i) in menuItems"
                    :key="i"
                    :to="menuItem.link"
            >
              <v-list-item-icon>
                <v-icon v-text="menuItem.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="menuItem.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <main>
      <router-view>

      </router-view>
    </main>
  </v-app>
</template>

<script>


  export default {
    name: 'App',

    components: {

    },

    data: () => ({
      sideNav: false,
      menuItems: [
        {icon: 'supervisor_account',  text: 'View Meetups', link: '/meetups'},
        {icon: 'room',  text: 'Organize Meetup', link: '/meetup/new'},
        {icon: 'person',  text: 'Profile', link: '/profile'},
        {icon: 'face',  text: 'Sign up', link: '/signin'},
        {icon: 'lock_open',  text: 'Sign in', link: '/signup'},
      ]

    }),
  };
</script>


<style lang="scss" scoped>
  .header__bnt {
    margin-left: 20px;
  }
</style>
