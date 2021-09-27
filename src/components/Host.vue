<template>
<div class="container-vertical overlay-visible" @click="toggleHidden" :class="{ 'overlay-hidden': isHidden}">
    <div class="container-horizontal">
        <button v-for="metric in host.metricsValues" :key="metric.metric" @click.stop="setVisibleMetric(metric)"> {{ metric.metric }}</button>
    </div>
    <metric v-if="visibleMetric" :metric="visibleMetric"></metric>
</div>
</template>

<script>
export default {
    props: ['host'],
    data() {
        return {
            isHidden: false,
            visibleMetric: null
        }
    },
    methods: {
        toggleHidden() {
            this.isHidden = !this.isHidden
            this.$emit('toggle-hidden')
        },
        setVisibleMetric(item) {
            if ( !this.visibleMetric ) {
                this.visibleMetric = item
                console.log(this.visibleMetric)
            } else {
                if ( this.visibleMetric.metric === item.metric) {
                    this.visibleMetric = null
                    console.log(this.visibleMetric)
                } else {
                    this.visibleMetric = item
                    console.log(this.visibleMetric)
                }
            }
        }
    },

}
</script>

<style>
.container-vertical {
    display: flex;
    flex-direction: column;
}
.container-horizontal {
  display: flex;
  flex-direction: row;
}
.overlay-visible {
  position: fixed; /* Sit on top of the page content */
  display: block;
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.96); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}

.overlay-hidden {
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.9); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
</style>