<template>
  <header>
    <h1 tabindex="0" @keydown.enter="focusNav">The Daily Vue News</h1>
    <nav role="navigation" aria-label="Main navigation">
      <router-link
        v-for="(link, index) in navLinks"
        :key="index"
        :to="link.path"
        :ref="el => { if (el) navItems[index] = el }"
        @click="announce(link.announcement)"
        @keydown.tab.exact="handleNavTab($event, index)"
      >
        {{ link.label }}
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      navItems: [],
      navLinks: [
        { label: 'Home', path: '/', announcement: 'Navigating to Home' },
        { label: 'Article 1', path: '/article1', announcement: 'Navigating to Article 1' },
        { label: 'Article 2', path: '/article2', announcement: 'Navigating to Article 2' },
        { label: 'Article 3', path: '/article3', announcement: 'Navigating to Article 3' }
      ]
    }
  },
  methods: {
    focusNav() {
      this.navItems[0].focus()
    },
    handleNavTab(e, index) {
      if (index === this.navLinks.length - 1 && !e.shiftKey) {
        e.preventDefault()
        document.querySelector('main').setAttribute('tabindex', '-1')
        document.querySelector('main').focus()
      }
    },
    announce(message) {
      this.$emit('announce', message)
    }
  }
}
</script>

<style scoped>
header {
  background-color: #f8f8f8;
  padding: 1rem;
  text-align: center;
}
h1 {
  margin: 0;
  font-size: 2.5rem;
}
nav {
  margin-top: 1rem;
}
nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #007BFF;
  font-weight: bold;
}
nav a:hover {
  text-decoration: underline;
}
nav a:focus {
  outline: 3px solid #007BFF;
  outline-offset: 2px;
}
h1:focus {
  outline: 3px solid #007BFF;
  outline-offset: 5px;
}
</style>
