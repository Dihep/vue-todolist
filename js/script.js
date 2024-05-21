const { createApp } = Vue

createApp({
    data() {
        return {
            placeholderData: `Placeholder`
        }
    },
    methods: {
        placeholderMethod() {
            console.log(this.placeholderData);
        }
    }
}).mount('#vueApp');