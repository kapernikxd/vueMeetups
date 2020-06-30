<template>
    <v-alert
            @input="onClose"
            error
            type="error"
            dismissible
            :value="true"
    >
        ошибка: {{text}}
    </v-alert>
</template>

<script>
    export default {
        props: ['text'],
        methods: {
            onClose () {
                this.$emit('dismissed')
            }
        }
    }
</script>