<template>
  <div id="app">
    <AppAnnouncer :message="announcement" />
    <AppHeader @announce="setAnnouncement" />
    <main role="main">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppAnnouncer from './components/AppAnnouncer.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppAnnouncer,
    AppHeader,
    AppFooter
  },
  data() {
    return {
      announcement: ''
    }
  },
  methods: {
    setAnnouncement(message) {
      this.announcement = message
      setTimeout(() => {
        this.announcement = ''
      }, 5000)
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

main {
  padding: 1rem;
  min-height: 60vh;
}

/* Global comment styles */
.comment-form button:hover {
  background: #0056b3;
}

.comment-form button:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

.related-img {
  transition: transform 0.2s ease;
}

.related-img:hover {
  transform: scale(1.02);
}
</style>
