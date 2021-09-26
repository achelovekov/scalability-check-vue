<template>
<div class='container-vertical'>
    <button v-for="hostname in group.groupInventory" :key="hostname.hostname">{{ hostname.hostname }} </button>
</div>
</template>

<script>
export default {
    props: ['group'],
    data() {
        return {
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