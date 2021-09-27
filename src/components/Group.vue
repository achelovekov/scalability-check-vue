<template>
<div class='container-vertical'>
    <button v-for="host in group.groupInventory" :key="host.hostname" @click="setVisibleHost(host)">{{ host.hostname }} </button>
</div>
<host v-if="visibleHost" :host="visibleHost" @toggle-hidden="visibleHostOff()"></host>
</template>

<script>
export default {
    props: ['group'],
    data() {
        return {
            visibleHost: null
        }
    },
    methods: {
        setVisibleHost(item) {
            if ( !this.visibleHost ) {
                this.visibleHost = item
                console.log(this.visibleHost)
            } else {
                if ( this.visibleHost.hostname === item.hostname) {
                    this.visibleHost = null
                    console.log(this.visibleHost)
                } else {
                    this.visibleHost = item
                    console.log(this.visibleHost)
                }
            }
        },
        visibleHostOff() {
            this.visibleHost = null
        }
    }
}
</script>

<style>
.container-vertical {
    display: flex;
    flex-direction: column;
}
</style>