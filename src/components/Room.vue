<template>
<div class='container-vertical'>
    <button v-for="segment in room.roomInventory" :key="segment.segmentName" @click="setVisibleSegment(segment)">{{ segment.segmentName }} </button>
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
                if ( this.visibleSegment.segmentName === item.segmentName ) {
                    this.visibleSegment = null
                } else {
                    this.visibleSegment = item
                }
            }
        }
    },
    watch: {
        room: function() {
            console.log("watcher executed")
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