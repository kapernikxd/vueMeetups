<template>
    <v-container>
        <v-layout row v-if="error">
            <v-flex xs12 sm6 offset-sm3>
                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="onSignup">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                            name="email"
                                            label="Mail"
                                            id="email"
                                            v-model="email"
                                            type="email"
                                            required>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>

                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                name="password"
                                                label="Password"
                                                id="password"
                                                v-model="password"
                                                type="password"
                                                required>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>

                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                name="confirmPassword"
                                                label="confirmPassword"
                                                id="confirmPassword"
                                                v-model="confirmPassword"
                                                type="password"
                                                :rules="[comparePassword]"
                                                >
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>



                                <v-layout row>
                                    <v-flex xs12>

                                        <v-btn
                                                class="ma-2"
                                                :loading="loading"
                                                :disabled="loading"

                                                type="submit"
                                        >
                                            Sign Up
                                            <template v-slot:loader>
                                        <span class="custom-loader">
                                          <v-icon light>cached</v-icon>
                                        </span>
                                            </template>
                                        </v-btn>

                                    </v-flex>
                                </v-layout>

                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Signup",
        data () {
            return {
                email: '',
                password: '',
                confirmPassword: '',
                loader: null,
                loading5: false,
            }
        },
        computed: {
            comparePassword () {
                return this.password !== this.confirmPassword ? 'Passwords do no match' : ''
            },
            user () {
                return this.$store.getters.user
            },
            error () {
                return this.$store.getters.error
            },
            loading () {
                return this.$store.getters.loading
            }
        },
        watch: {
            user (value) {
                if (value !== null && value !== undefined) {
                    this.$router.push('/')
                }
            },
        },
        methods: {
            onSignup () {
                this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
            },
            onDismissed () {
                this.$store.dispatch('clearError')
            }
        }
    }
</script>

