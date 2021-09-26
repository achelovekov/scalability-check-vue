<template>
<div class='container-vertical'>
    <button v-for="room in model" :key="room.room" @click="setVisibleRoom(room)">{{ room.room }}</button>
</div>
<room v-if="visibleRoom" :room="visibleRoom"></room>
</template>

<script>
export default {
    props: ['model'],
    data() {
        return {
            visibleRoom: null
        }
    },
    methods: {
        setVisibleRoom(item) {
            if ( !this.visibleRoom ) {
                this.visibleRoom = item
            } else {
                if ( this.visibleRoom.room === item.room) {
                    this.visibleRoom = null
                } else {
                    this.visibleRoom = item
                }
            }
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