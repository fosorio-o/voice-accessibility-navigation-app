<template>
  <div class="article">
    <h2 tabindex="0" ref="articleTitle">Resultados da Cúpula Global do Clima</h2>
    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" alt="Floresta verde representando foco ambiental" class="article-img" />
    <div class="content">
      <p>Publicado: 9 de Outubro de 2023</p>
      <p>Líderes mundiais concordam com novas políticas ambientais para a próxima década. A cúpula concluiu com um pacto histórico para reduzir as emissões de carbono em 50% até 2035.</p>
      <p>Acordos-chave incluem financiamento para projetos de energia renovável e regulamentações mais rigorosas sobre poluição industrial. Ambientalistas consideram isso um passo na direção certa, embora desafios permaneçam.</p>
      <router-link to="/" class="back-link" @click="announce('Navigating back to Home')">Back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleTwo',
  methods: {
    announce(message) {
      this.$emit('announce', message)
    }
  }
}
</script>

<style scoped>
.article {
  max-width: 800px;
  margin: 0 auto;
}
h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}
.article-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.content {
  line-height: 1.6;
}
.back-link {
  display: inline-block;
  margin-top: 2rem;
  color: #007BFF;
  text-decoration: none;
  font-weight: bold;
}
.back-link:hover {
  text-decoration: underline;
}
</style>
