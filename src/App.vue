<template>
<div class="container-horizontal">
  <div class="container-vertical">
    <div v-for="room in complianceData" :key="room.room">
        <button @click="toggleRoomDevicesIsVisible(room)">{{ room.room }}</button>
    </div>
  </div>
  <div class="container-vertical">
    <div v-for="room in complianceData" :key="room.room">
      <div v-for="device in room.devices" :key="device.hostname">
        <button @click="toggleItemIsVisible(device)" v-if="room.isVisible">{{ device.hostname }}</button>
      </div>
    </div>
  </div> 
</div>
<div>
  <div v-for="room in complianceData" :key="room.room">
    <div v-for="device in room.devices" :key="device.hostname">
      <div :class="{ 'overlay-visible': device.isVisible, 'overlay-hidden': !device.isVisible}" @click="toggleItemIsVisible(device)">
        <pre style="margin-left: 10rem;">{{ device.metricsValues }}</pre>
      </div>
    </div>
  </div>
</div> 
</template>

<script>
export default {
      data: function() {
        return { 
          complianceData: [{room:"1.2",isVisible:false,devices:[{hostname:"S1-AG-01",isVisible:false,role:"AG",featureset:"BGP-EVPN",chassis:"N9K-C9504",linecards:["N9K-X9732C-EX","N9K-X9732C-EX","N9K-X9732C-EX","N9K-X9732C-EX"],metricsValues:[{metric:"svi",originalValue:"0",referenceValue:"1000",loadValue:"0.0",loadLevel:"Ok"},{metric:"mac",originalValue:"15474",referenceValue:"64000",loadValue:"0.24",loadLevel:"Ok"}]},{hostname:"S1-Leaf-04",isVisible:false,role:"AC",featureset:"BGP-EVPN",chassis:"N9K-C93180YC-FX",linecards:["N9K-C93180YC-FX"],metricsValues:[{metric:"svi",originalValue:"27",referenceValue:"2000",loadValue:"0.01",loadLevel:"Ok"},{metric:"mac",originalValue:"95000",referenceValue:"90000",loadValue:"1.06",loadLevel:"Critical"}]}]},{room:"1.4",isVisible:false,devices:[{hostname:"S1-AG-02",isVisible:false,role:"AG",featureset:"BGP-EVPN",chassis:"N9K-C9504",linecards:["N9K-X9732C-EX","N9K-X9732C-EX","N9K-X9732C-EX","N9K-X9732C-EX"],metricsValues:[{metric:"svi",originalValue:"0",referenceValue:"1000",loadValue:"0.0",loadLevel:"Ok"},{metric:"mac",originalValue:"15474",referenceValue:"64000",loadValue:"0.24",loadLevel:"Ok"}]},{hostname:"S2-Leaf-04",isVisible:false,role:"AC",featureset:"BGP-EVPN",chassis:"N9K-C93180YC-FX",linecards:["N9K-C93180YC-FX"],metricsValues:[{metric:"svi",originalValue:"27",referenceValue:"2000",loadValue:"0.01",loadLevel:"Ok"},{metric:"mac",originalValue:"95000",referenceValue:"90000",loadValue:"1.06",loadLevel:"Critical"}]}]}]
        }
      },
    methods: {
      toggleRoomDevicesIsVisible(item) {
        this.complianceData.forEach(item => item.isVisible = false)
        item.isVisible = true
      },
      toggleItemIsVisible(item) {
        item.isVisible = !item.isVisible
      }
    }
}
</script>

<style>

button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0.5rem
}

.container-horizontal {
  display: flex;
  flex-direction: row;
}

.container-vertical {
  display: flex;
  flex-direction: column;
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
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
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
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
</style>