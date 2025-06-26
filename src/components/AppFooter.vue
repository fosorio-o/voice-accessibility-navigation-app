<template>
  <footer 
    tabindex="0" 
    @keydown.tab.exact="handleFooterTab"
    @keydown.shift.tab.exact="focusLastRelatedArticle"
  >
    <p>&copy; 2023 Notícias Diárias Vue. Todos os direitos reservados.</p>
  </footer>
</template>

<script>
export default {
  methods: {
    handleFooterTab() {
      // Cycle back to header
      document.querySelector('header h1').focus()
    },
    focusLastRelatedArticle() {
      const relatedArticles = document.querySelectorAll('.related-article')
      if (relatedArticles.length > 0) {
        relatedArticles[relatedArticles.length - 1].focus()
      }
    }
  }
}
</script>

<style scoped>
footer {
  background-color: #f8f8f8;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
}
footer:focus {
  outline: 3px solid #007BFF;
  outline-offset: 2px;
}
</style>