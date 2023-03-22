import my from './my'
import '../stylesheets/main.scss'
import './reactApp.jsx'
import Vue from 'vue'
import VueApp from './VueApp.vue'

new Vue({
  el: '#vue-root',
  render: (h) => h(VueApp)
})

console.log('this is index.js')
my()
