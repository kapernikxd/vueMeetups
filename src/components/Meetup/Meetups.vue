<template>
    <v-container>
        <v-layout row wrap >
            <v-flex xs12>
                <v-card
                        max-width="400"
                        v-for="meetup in meetups"
                        :key="meetup.id"
                >
                    <v-container fluid>
                        <v-layout row wrap>
                            <v-flex>
                                <v-img
                                        class="white--text align-end"
                                        height="200px"
                                        :src="meetup.imageUrl"

                                >
                                    <v-card-title>{{ meetup.title }}</v-card-title>
                                </v-img>

                                <v-card-subtitle class="pb-0">ergergerg</v-card-subtitle>

                                <v-card-text class="text--primary">
                                    <div>Whitehaven Beach</div>

                                    <div>Whitsunday Island, Whitsunday Islands</div>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn
                                            color="orange"
                                            text
                                            :to="'/meetups/' + meetup.id"
                                    >
                                        View Meetup
                                    </v-btn>

                                    <v-btn
                                            color="orange"
                                            text
                                    >
                                        Change
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>

            </v-flex>



        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Meetups",
        computed: {
            meetups () {
                return this.$store.getters.loadedMeetups
            }
        },
    }
</script>

<style scoped>

</style>