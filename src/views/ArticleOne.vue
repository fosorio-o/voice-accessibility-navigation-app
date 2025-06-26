<template>
  <div class="article">
    <h2 tabindex="0" ref="articleTitle">Notícia Urgente: Inovação Tecnológica</h2>
    <img src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Technology concept image with circuits" class="article-img" />
    <div class="content">
      <p>Publicado: 10 de Outubro de 2023</p>
      <p>Novos avanços em IA estão mudando o panorama da tecnologia. Especialistas preveem que até 2025, a IA estará integrada em quase todos os produtos de consumo, de casas inteligentes a assistentes pessoais.</p>
      <p>Essa mudança é impulsionada por avanços em algoritmos de aprendizado de máquina e aumento do poder computacional. Empresas em todo o mundo estão investindo bilhões em pesquisa e desenvolvimento.</p>
      <router-link to="/" class="back-link" @click="announce('Navegando de volta para Início')">Voltar ao Início</router-link>
    </div>

    <!-- Seção de Comentários -->
    <section class="comments-section" role="region" aria-labelledby="comments-heading">
      <h3 id="comments-heading" tabindex="-1">Comentários ({{ comments.length }})</h3>
      <div 
        v-for="(comment, index) in comments"
        :key="index"
        :ref="el => { if (el) commentRefs[index] = el }"
        tabindex="0"
        @keydown.tab.exact="handleCommentTab($event, index)"
        class="comment"
      >
        <div class="comment-author">{{ comment.author }}:</div>
        <p class="comment-text">{{ comment.text }}</p>
        <div class="comment-date">{{ comment.date }}</div>
      </div>
      
      <!-- Formulário de Adicionar Comentário -->
      <form @submit.prevent="addComment" class="comment-form" ref="commentForm">
        <input type="text" v-model="newComment.author" placeholder="Seu nome" required>
        <textarea v-model="newComment.text" placeholder="Escreva seu comentário..." required></textarea>
        <button type="submit">Publicar Comentário</button>
      </form>
    </section>

    <!-- Artigos Relacionados -->
    <section class="related-articles" role="region" aria-labelledby="related-heading">
      <h3 id="related-heading" tabindex="-1">Artigos Relacionados</h3>
      <div 
        v-for="(article, index) in relatedArticles"
        :key="article.id"
        :ref="el => { if (el) relatedRefs[index] = el }"
        tabindex="0"
        @keydown.enter="navigateToArticle(article.link)"
        @keydown.tab.exact="handleRelatedTab($event, index)"
        class="related-article"
      >
        <router-link :to="article.link" class="related-link">
          <img :src="article.image" :alt="article.alt" class="related-img" />
          <h4>{{ article.title }}</h4>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ArticleOne',
  data() {
    return {
      articleId: 1,
      commentRefs: [],
      relatedRefs: [],
      comments: [
        {
          author: 'EntusiastaTecnologia22',
          text: 'Desenvolvimentos fascinantes! Mal posso esperar para ver como isso impacta a tecnologia do dia a dia.',
          date: '11 de Out, 2023'
        },
        {
          author: 'FuturoIA',
          text: 'As implicações éticas precisam de mais discussão, no entanto.',
          date: '10 de Out, 2023'
        }
      ],
      newComment: {
        author: '',
        text: ''
      },
      allArticles: [
        {
          id: 1,
          title: 'Notícia Urgente: Inovação Tecnológica',
          image: 'https://images.unsplash.com/photo-1518770660439-c5e553278990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
          alt: 'Imagem de conceito de tecnologia',
          link: '/article1'
        },
        {
          id: 2,
          title: 'Cúpula Global do Clima',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
          alt: 'Cúpula do clima',
          link: '/article2'
        },
        {
          id: 3,
          title: 'Campeonato Esportivo',
          image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
          alt: 'Evento esportivo',
          link: '/article3'
        }
      ]
    }
  },
  computed: {
    relatedArticles() {
      const relatedIds = [2, 3] // Relacionado aos artigos de Clima e Esportes
      return this.allArticles.filter(article => 
        relatedIds.includes(article.id) && article.id !== this.articleId
      )
    }
  },
  mounted() {
    this.$refs.articleTitle.focus()
  },
  methods: {
    handleCommentTab(e, index) {
      if (index === this.comments.length - 1 && !e.shiftKey) {
        e.preventDefault()
        this.$refs.commentForm?.focus()
      }
    },
    handleRelatedTab(e, index) {
      if (index === this.relatedArticles.length - 1 && !e.shiftKey) {
        e.preventDefault()
        document.querySelector('footer')?.focus()
      }
    },
    navigateToArticle(path) {
      this.$router.push(path)
    },
    addComment() {
      this.comments.unshift({
        author: this.newComment.author,
        text: this.newComment.text,
        date: new Date().toLocaleDateString('pt-BR', { 
          year: 'numeric', month: 'short', day: 'numeric' 
        })
      })
      this.newComment = { author: '', text: '' }
      this.announce('Comentário publicado com sucesso')
    },
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

/* Seção de Comentários */
.comments-section {
  margin-top: 3rem;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
}
.comment {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.comment-author {
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}
.comment-date {
  font-size: 0.8rem;
  color: #666;
  margin-top: 0.5rem;
}
.comment-form {
  margin-top: 2rem;
}
.comment-form input,
.comment-form textarea {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.comment-form button {
  background: #007BFF;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Artigos Relacionados */
.related-articles {
  margin-top: 3rem;
  border-top: 2px solid #eee;
  padding-top: 2rem;
}
.related-article {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}
.related-link {
  text-decoration: none;
  color: inherit;
}
.related-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
}
.related-link h4 {
  margin-top: 0.5rem;
  font-size: 1.1rem;
  color: #333;
}
.related-link:hover h4 {
  color: #007BFF;
}
</style>