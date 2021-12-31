<template>
  <div>
    <div class="card">
      <Card :article="article" @update="updateCard" @delete="moveToHome" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      // article: null,
      article: {
        _id: null,
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
      // console.log(data);
      this.article = { ...data };
    },

    /**
     * content 로 내려줄 경우: 모든 내용을 받게 되고
     *
     * { content } 로 내려줄 경우: content 만 받는다!
     */
    updateCard({ content }) {
      this.article.content = content;
    },
    moveToHome() {
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>
<style></style>
