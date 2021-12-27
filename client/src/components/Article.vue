<template>
  <div>
    <div class="card">
      <div class="content">{{ article.content }}</div>
      <div class="createdAt">{{ article.createdAt }}</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      // article: null,
      article: {
        id: null,
        content: null,
        createdAt: null,
      },
    };
  },
  created() {
    this.articleDetail();
  },
  methods: {
    // app.get("/detail/:id", Article.articleDetail);
    async articleDetail() {
      // detail
      const { id } = this.$route.params;
      const { data } = await axios.get(`http://localhost:3000/detail/${id}`);
      console.log(data);
      this.article = { ...data };
    },
  },
};
</script>
<style></style>
