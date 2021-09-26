<template>
<div class='container-vertical'>
    <button v-for="group in segment.segmentInventory" :key="group.groupName">{{ group.groupName }} </button>
</div>
</template>

<script>
export default {
    props: ['segment'],
    data() {
        return {
            visibleGroup: null
        }
    },
    methods: {
        setVisibleGroup(item) {
            if ( !this.visibleGroup ) {
                this.visibleGroup = item
                console.log(this.visibleGroup)
            } else {
                if ( this.visibleGroup.room === item.room) {
                    this.visibleGroup = null
                    console.log(this.visibleGroup)
                } else {
                    this.visibleRoom = item
                    console.log(this.visibleGroup)
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