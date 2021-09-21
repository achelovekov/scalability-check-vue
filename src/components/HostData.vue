<template>
<button @click="toggleDetails">{{ hostData.hostname }}</button>
<pre v-if="hostDataVisible"> 
    <pre v-for="metric in hostData" :key="metric"> {{ metric}} </pre>
</pre>
</template>

<script>
export default {
    props: ['hostData'],
    data() {
        return {
            hostDataVisible: false
        }
    },
    methods: {
        toggleDetails() {
            this.hostDataVisible = !this.hostDataVisible
            console.log(this.hostDataVisible)
        }
    }
}
</script>