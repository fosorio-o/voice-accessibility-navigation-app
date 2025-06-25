<template>
  <div class="article">
    
    <!-- Existing article content... -->
    <section class="article">
        <h2>Breaking News: Tech Innovation</h2>
        <img src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Technology concept image with circuits" class="article-img" />
        <div class="content">
        <p>Published: October 10, 2023</p>
        <p>New advancements in AI are changing the landscape of technology. Experts predict that by 2025, AI will be integrated into nearly every consumer product, from smart homes to personal assistants.</p>
        <p>This shift is driven by breakthroughs in machine learning algorithms and increased computational power. Companies worldwide are investing billions into research and development.</p>
        <router-link to="/" class="back-link" @click="announce('Navigating back to Home')">Back to Home</router-link>
        </div>
    </section>

    <!-- Comments Section -->
    <section class="comments-section">
      <h3>Comments ({{ comments.length }})</h3>
      <div class="comment" v-for="(comment, index) in comments" :key="index">
        <div class="comment-author">{{ comment.author }}:</div>
        <p class="comment-text">{{ comment.text }}</p>
        <div class="comment-date">{{ comment.date }}</div>
      </div>
      
      <!-- Add Comment Form -->
      <form @submit.prevent="addComment" class="comment-form">
        <input type="text" v-model="newComment.author" placeholder="Your name" required>
        <textarea v-model="newComment.text" placeholder="Write your comment..." required></textarea>
        <button type="submit">Post Comment</button>
      </form>
    </section>

    <!-- Related Articles -->
    <section class="related-articles">
      <h3>Related Articles</h3>
      <div class="related-article" v-for="article in relatedArticles" :key="article.id">
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
      comments: [
        {
          author: 'TechEnthusiast22',
          text: 'Fascinating developments! Can\'t wait to see how this impacts everyday tech.',
          date: 'Oct 11, 2023'
        },
        {
          author: 'FutureAI',
          text: 'The ethical implications need more discussion though.',
          date: 'Oct 10, 2023'
        }
      ],
      newComment: {
        author: '',
        text: ''
      },
      allArticles: [
        {
          id: 1,
          title: 'Breaking News: Tech Innovation',
          image: 'https://images.unsplash.com/photo-1518770660439-c5e553278990',
          alt: 'Technology concept',
          link: '/article1'
        },
        {
          id: 2,
          title: 'Global Climate Summit',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
          alt: 'Climate summit',
          link: '/article2'
        },
        {
          id: 3,
          title: 'Sports Championship',
          image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b',
          alt: 'Sports event',
          link: '/article3'
        }
      ]
    }
  },
  computed: {
    relatedArticles() {
      // Define related articles for this article (ID 1)
      const relatedIds = [2, 3] // Related to Climate and Sports articles
      return this.allArticles.filter(article => 
        relatedIds.includes(article.id) && article.id !== this.articleId
      )
    }
  },
  methods: {
    announce(message) {
      this.$emit('announce', message)
    },
    addComment() {
      this.comments.unshift({
        author: this.newComment.author,
        text: this.newComment.text,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', month: 'short', day: 'numeric' 
        })
      })
      this.newComment = { author: '', text: '' }
      this.announce('Comment posted successfully')
    }
  }
}
</script>

<style scoped>
/* Existing styles... */
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

/* Comments Section */
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

/* Related Articles */
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