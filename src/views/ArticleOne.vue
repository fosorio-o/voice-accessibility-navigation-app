<template>
  <div class="article">
    <h2>Breaking News: Tech Innovation</h2>
    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" alt="Green forest representing environmental focus" class="article-img" />
    <div class="content">
      <p>Published: October 10, 2023</p>
      <p>New advancements in AI are changing the landscape of technology. Experts predict that by 2025, AI will be integrated into nearly every consumer product, from smart homes to personal assistants.</p>
      <p>This shift is driven by breakthroughs in machine learning algorithms and increased computational power. Companies worldwide are investing billions into research and development.</p>
      <router-link to="/" class="back-link" @click="announce('Navigating back to Home')">Back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleOne',
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
