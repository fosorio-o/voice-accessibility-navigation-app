<template>
  <footer 
    tabindex="0" 
    @keydown.tab.exact="handleFooterTab"
    @keydown.shift.tab.exact="focusLastRelatedArticle"
  >
    <p>&copy; 2023 The Daily Vue News</p>
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
</style>
