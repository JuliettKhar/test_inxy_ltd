<template>
  <div class="app">
    <Header @search="searchNews" @clear="clearResults"/>
    <main>
      <news/>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import {defineComponent, provide} from "vue";
import News from './pages/News.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import useApp from "@/composables/useApp";

export default defineComponent({
  name: "App",
  components: {
    News,
    Header,
    Footer
  },
  setup() {
    const { newsData, searchNews, clearResults } = useApp();

    provide('newsData', newsData);

    return {
      searchNews,
      clearResults
    }
  }
})
</script>

<style lang="scss">
@import "@/styles/index";
</style>
