<template>
  <div class="home">
    <h2>Latest News</h2>
    <div class="articles">
      <div class="article-preview" v-for="article in articles" :key="article.id">
        <img :src="article.image" :alt="article.alt" class="article-img" />
        <h3>{{ article.title }}</h3>
        <p>{{ article.summary }}</p>
        <router-link :to="article.link" class="read-more" @click="announce(`Navigating to ${article.title}`)">
          Read More
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Breaking News: Tech Innovation',
          summary: 'New advancements in AI are changing the landscape of technology.',
          image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Technology concept image with circuits',
          link: '/article1'
        },
        {
          id: 2,
          title: 'Global Climate Summit Results',
          summary: 'World leaders agree on new environmental policies for the next decade.',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
          alt: 'Green forest representing environmental focus',
          link: '/article2'
        },
        {
          id: 3,
          title: 'Sports Update: Championship Finals',
          summary: 'An unexpected turn of events in the finals shocks fans worldwide.',
          image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
          alt: 'Sports stadium during a game',
          link: '/article3'
        }
      ]
    }
  },
  methods: {
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
</style>
