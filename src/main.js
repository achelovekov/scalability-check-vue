import { createApp } from 'vue'
import App from './App.vue'
import Model from './components/Model.vue'
import Room from './components/Room.vue'
import Segment from './components/Segment.vue'
import Group from './components/Group.vue'
import Host from './components/Host.vue'
import Metric from './components/Metric.vue'

const app = createApp(App)

app.component('model', Model)
app.component('room', Room)
app.component('segment', Segment)
app.component('group', Group)
app.component('host', Host)
app.component('metric', Metric)

app.mount('#app')
