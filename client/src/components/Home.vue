<template>
  <div>
    <h1>게시글 만들기</h1>
    <textarea v-model="content" cols="40" rows="3"></textarea>
    <div>
      <button @click="createArticle">생성하기</button>
    </div>
    <!-- <h2>등록한 게시글</h2>
    <div v-for="a in articles" :key="a._id">
      {{ a.content }}
    </div> -->
    <Card
      v-for="a in articles"
      :key="a._id"
      :article="a"
      @update="updateCard"
      @delete="deleteCard"
    />
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
      content: "",
      articles: [],
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      // 모든 게시글을 가져온다
      // GET, /read (전체)
      // const articles = await axios.get("http://localhost:3000/read");

      const { data } = await axios.get("http://localhost:3000/read");
      // console.log("data: ", data);
      this.articles = data;
    },
    async createArticle() {
      // 글 입력하지 않은 경우
      if (this.content.length === 0) {
        window.alert("Please input content!");
        return;
      }
      // 글 입력한 경우 입력한 글을 넘겨줘야 한다
      // POST, /create
      const { data } = await axios.patch("http://localhost:3000/create", {
        content: this.content,
      });
      // console.log("content: ", data);

      // 데이터가 없는 경우
      if (!data) {
        window.alert("create fail!");
      }
      // 데이터가 있는 경우
      // window.alert("create Success!");
      this.articles.push(data);
    },
    updateCard({ id, content }) {
      // Card 컴포넌트에서 update 클릭 시, 동봉한 내용을 찾아 업데이트 한다
      const idx = this.articles.findIndex((v) => v._id === id);
      if (idx > -1) {
        this.articles[idx].content = content;
      }
    },
    deleteCard(id) {
      // Card 컴포넌트에서 delete 클릭 시, 동봉한 내용을 찾아 제거한다
      const idx = this.articles.findIndex((v) => v._id === id);
      if (idx > -1) {
        this.articles.splice(idx, 1);
      }
    },
  },
};
</script>
<style></style>
