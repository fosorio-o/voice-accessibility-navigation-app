<template>
  <div class="article">
    <h2>Atualização Esportiva: Finais do Campeonato</h2>
    <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" alt="Sports stadium during a game" class="article-img" />
    <div class="content">
      <p>Publicado: 8 de outubro de 2023</p>
      <p>Uma reviravolta inesperada na final chocou os fãs do mundo todo. O time azarão conquistou a vitória nos últimos segundos do jogo, marcando uma das maiores surpresas da história do esporte.</p>
      <p>Analistas elogiam a estratégia e a resiliência da equipe. Os fãs já estão ansiosos pela revanche da próxima temporada.
</p>      <router-link to="/" class="back-link" @click="announce('Navigating back to Home')">Back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleThree',
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
