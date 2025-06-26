<template>
  <header>
    <h1 tabindex="0" @keydown.enter="focusNav">Notícias Diárias Vue</h1>
    <nav role="navigation" aria-label="Navegação principal">
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
        { label: 'Início', path: '/', announcement: 'Navegando para Início' },
        { label: 'Artigo 1', path: '/article1', announcement: 'Navegando para Artigo 1' },
        { label: 'Artigo 2', path: '/article2', announcement: 'Navegando para Artigo 2' },
        { label: 'Artigo 3', path: '/article3', announcement: 'Navegando para Artigo 3' }
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