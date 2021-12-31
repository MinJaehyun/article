<template>
  <article>
    <div v-if="!isEditing" class="content">{{ article.content }}</div>
    <textarea
      v-else
      class="content"
      cols="40"
      rows="3"
      v-model="content"
    ></textarea>
    <div class="created-at">
      <!-- {{ article.createdAt | moment("dddd. MMMM Do YYYY") }} -->
      {{ article.createdAt | moment("Y년 M월 D일 HH:mm:ss") }}
    </div>
    <!-- 이동 버튼 -->
    <button v-if="!isEditing" @click="moveToArticle">이동</button>
    <!-- 수정, 수정취소 토글 버튼 만들기  -->
    <button @click="toggleTextArticle">
      {{ !isEditing ? "수정" : "수정 취소" }}
    </button>
    <!-- 에디팅모드 시, 삭제버튼 안 보이게 설정 -->
    <button v-if="!isEditing" @click="deleteArticle">삭제</button>
    <!-- 에디팅모드 시, 수정 완료 버튼 보이게 설정, 수정 완료 시 업데이트 기능한다 -->
    <button v-else @click="updateArticle">수정완료</button>
  </article>
</template>
<script>
import axios from "axios";
export default {
  props: {
    article: {
      default: {
        _id: null,
        content: null,
        createdAt: null,
      },
    },
  },

  data() {
    return {
      content: "",
      isEditing: false,
    };
  },

  methods: {
    moveToArticle() {
      // 이동 버튼 클릭 시, 상세 게시글로 이동하도록 만들기
      // $router.push("경로")
      this.$router.push({
        name: "Article",
        params: {
          id: this.article._id,
        },
      });
    },
    toggleTextArticle() {
      // data 의 content 안에 props 로 내려받은 content 를 넣는다
      this.content = this.article.content;
      this.isEditing = !this.isEditing;
    },
    async updateArticle() {
      // 수정 완료 시, 업데이트 기능 만들기 위해서는?
      // POST, /update
      const { data } = await axios.patch("http://localhost:3000/update", {
        // 보낼 속성은? id, content
        id: this.article._id,
        content: this.content,
      });
      // console.log("data: ", data);
      // 이제 DB 에 저장된 값인 data 를 이용하여 client 업데이트 하기
      if (!data) return;
      this.$emit("update", { content: this.content, id: this.article._id });
      this.isEditing = false;
    },
    async deleteArticle() {
      // 삭제를 위한 server 요청!
      // delete, /delete/:id
      // :id 설정하려면?
      const { data } = await axios.delete(
        `http://localhost:3000/delete/${this.article._id}`
      );
      // console.log("data: ", data);
      if (!data) return;
      this.$emit("delete", this.article._id);
    },
  },
};
</script>
<style>
article {
  padding: 1em;
  box-shadow: 0 3px 3px #22222222;
  margin-bottom: 1em;
  background: #eaeaea;
}
</style>
