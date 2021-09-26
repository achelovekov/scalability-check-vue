<template>
<div class='container-vertical'>
    <button v-for="roomInventory in room.roomInventory" :key="roomInventory.segmentName" @click="setVisibleSegment(roomInventory)">{{ roomInventory.segmentName }} </button>
</div>
<segment v-if="visibleSegment" :segment="visibleSegment"></segment>
</template>

<script>
export default {
    props: ['room'],
    data() {
        return {
            visibleSegment: null
        }
    },
    methods: {
        setVisibleSegment(item) {
            if ( !this.visibleSegment ) {
                this.visibleSegment = item
            } else {
                if ( this.visibleSegment.room === item.room ) {
                    this.visibleSegment = null
                } else {
                    this.visibleSegment = item
                }
            }
        }
    },
    watch: {
        room: function() {
            this.visibleSegment = null
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