// Import stylesheets
import './style.css';
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11'

// Write Javascript code!
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});