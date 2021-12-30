<template>
  <div>
    <h1>게시글 만들기</h1>
    <textarea v-model="content"></textarea>
    <div>
      <button @click="createArticle">생성하기</button>
    </div>
    <h2>등록한 게시글</h2>
    <div v-for="a in articles" :key="a._id">
      {{ a.content }}
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
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
      const { data } = await axios.post("http://localhost:3000/create", {
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
  },
};
</script>
<style></style>
