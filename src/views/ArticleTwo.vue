<template>
  <div class="article">
    <h2>Global Climate Summit Results</h2>
    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" alt="Green forest representing environmental focus" class="article-img" />
    <div class="content">
      <p>Published: October 9, 2023</p>
      <p>World leaders agree on new environmental policies for the next decade. The summit concluded with a historic pact to reduce carbon emissions by 50% by 2035.</p>
      <p>Key agreements include funding for renewable energy projects and stricter regulations on industrial pollution. Environmentalists call this a step in the right direction, though challenges remain.</p>
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
