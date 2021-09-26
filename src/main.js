import { createApp } from 'vue'
import App from './App.vue'
import Model from './components/Model.vue'
import Room from './components/Room.vue'
import Segment from './components/Segment.vue'

const app = createApp(App)

app.component('model', Model)
app.component('room', Room)
app.component('segment', Segment)

app.mount('#app')
