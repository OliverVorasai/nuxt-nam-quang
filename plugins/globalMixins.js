import Vue from 'vue'

Vue.mixin({
  methods: {
    fadeOnIntersect(entries) {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.replace('fade-out', 'fade-in')
      }
    },
  },
})
