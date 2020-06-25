<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                           <p> {{ meetup.title }}</p>
                    </v-card-title>
                    <v-img
                            class="white--text align-end"
                            height="400px"
                            :src="meetup.imageUrl"
                    ></v-img>
                    <v-card-text class="info--text">{{ meetup.date }} - Place</v-card-text>
                    <v-card-text>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текс</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn>Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Meetup",
        props: ['id'],
        computed: {
            meetup () {
                return this.$store.getters.loadedMeetup(this.id)
            }
        }
    }
</script>

<style scoped>

</style>