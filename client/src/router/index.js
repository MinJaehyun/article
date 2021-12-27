import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Article from '../components/Article.vue'

Vue.use(VueRouter)


export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',             // http://localhost:8080/으로 접속 시
      name: 'HelloWorld',    // 이 경로에 HelloWorld라는 이름을 붙이고
      component: HelloWorld  // HelloWorld.vue 컴포넌트를 이어줘라. 어디에? <router-view></router-view>에
    },
    {
      path: '/detail/:id',  // TODO: / 경로 확인하기 
      name: 'Article',
      component: Article
    },
  ]
})