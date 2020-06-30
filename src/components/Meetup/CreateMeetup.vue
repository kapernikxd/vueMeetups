<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h4>Create a new Meetup</h4>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="onCreateMeetup">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    name="title"
                                    label="Title"
                                    id="title"
                                    v-model="title"
                                    required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    name="location"
                                    label="Location"
                                    id="location"
                                    v-model="location"
                                    required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    name="imageUrl"
                                    label="Image URL"
                                    id="image-url"
                                    v-model="imageUrl"
                                    required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imageUrl" height="150">
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    name="description"
                                    label="Description"
                                    id="description"
                                    multi-line
                                    v-model="description"
                                    required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <h4>Choose a Data & Time</h4>
                        </v-flex>
                    </v-layout>

                    <v-row justify="space-around">
                        <v-date-picker
                                name="date"
                                v-model="date"
                                :show-current="false">

                        </v-date-picker>
<!--                        <p>{{date}}</p>-->
                    </v-row>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-time-picker
                                    name="time"
                                    v-model="time"
                                    format="24hr"

                            ></v-time-picker>
<!--                            <p>{{ time }}</p>-->
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn
                                    class="primary"
                                    :disabled="!formIsValid"
                                    type="submit">Create Meetup</v-btn>

                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                title: '',
                location: '',
                imageUrl: '',
                description: '',
                time: new Date().toLocaleTimeString().slice(0,-3),
                date: new Date().toISOString().substr(0, 10),
            }
        },
        computed: {
            formIsValid () {
                return this.title !== '' &&
                    this.location !== '' &&
                    this.imageUrl !== '' &&
                    this.description !== ''
            },


        },
        methods: {
            onCreateMeetup () {
                if (!this.formIsValid) {
                    return
                }
                const meetupData = {
                    title: this.title,
                    location: this.location,
                    imageUrl: this.imageUrl,
                    description: this.description,
                    time: this.time,
                    date: this.date
                }
                this.$store.dispatch('createMeetup', meetupData)
                this.$router.push('/meetups')
            }
        }
    }
</script>

