<template>
  <header>
    <h1>The Daily Vue News</h1>
    <nav role="navigation" aria-label="Main navigation">
      <router-link to="/" @click="announce('Navigating to Home')">Home</router-link>
      <router-link to="/article1" @click="announce('Navigating to Article 1')">Article 1</router-link>
      <router-link to="/article2" @click="announce('Navigating to Article 2')">Article 2</router-link>
      <router-link to="/article3" @click="announce('Navigating to Article 3')">Article 3</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
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
</style>
