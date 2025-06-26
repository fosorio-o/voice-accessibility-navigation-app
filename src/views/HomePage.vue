<template>
  <div class="home">
    <h2 tabindex="0">Últimas Notícias</h2>
    <div class="articles">
      <article
        v-for="(article, index) in articles"
        :key="article.id"
        :ref="el => { if (el) articleRefs[index] = el }"
        tabindex="0"
        @keydown.enter="navigateToArticle(article.link)"
        @keydown.tab.exact="handleArticleTab($event, index)"
        class="article-preview"
      >
        <img :src="article.image" :alt="article.alt" class="article-img" />
        <h3>{{ article.title }}</h3>
        <p>{{ article.summary }}</p>
        <router-link :to="article.link" class="read-more" @click="announce(`Navegando para ${article.title}`)">
          Ler Mais
        </router-link>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      articleRefs: [],
      articles: [
        {
          id: 1,
          title: 'Notícia Urgente: Inovação Tecnológica',
          summary: 'Novos avanços em IA estão mudando o panorama da tecnologia.',
          image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800',          alt: 'Imagem de conceito de tecnologia com circuitos',
          link: '/article1'
        },
        {
          id: 2,
          title: 'Resultados da Cúpula Global do Clima',
          summary: 'Líderes mundiais concordam com novas políticas ambientais para a próxima década.',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
          alt: 'Floresta verde representando foco ambiental',
          link: '/article2'
        },
        {
          id: 3,
          title: 'Atualização Esportiva: Finais do Campeonato',
          summary: 'Um turno inesperado de eventos nas finais choca fãs em todo o mundo.',
          image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
          alt: 'Estádio esportivo durante um jogo',
          link: '/article3'
        }
      ]
    }
  },
  methods: {
    handleArticleTab(e, index) {
      if (index === this.articles.length - 1 && !e.shiftKey) {
        e.preventDefault()
        // Aqui você pode adicionar um foco para a próxima seção, se houver
      }
    },
    navigateToArticle(path) {
      this.$router.push(path)
      this.announce(`Navegando para artigo`)
    },
    announce(message) {
      this.$emit('announce', message)
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}
h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.articles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.article-preview {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  text-align: left;
}
.article-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
h3 {
  margin: 1rem 0 0.5rem;
}
.read-more {
  display: inline-block;
  margin-top: 1rem;
  color: #007BFF;
  text-decoration: none;
  font-weight: bold;
}
.read-more:hover {
  text-decoration: underline;
}
article:focus {
  box-shadow: 0 0 0 3px #007BFF;
  outline: none;
}
</style>