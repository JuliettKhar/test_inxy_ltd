<template>
  <div class="app">
    <Header @search="searchNewsData" />
    <main>
      <News @sort="sortDataByDate" />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, readonly } from 'vue';
import News from './pages/News.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { useApp } from './composables/useApp';

export default defineComponent({
  name: 'App',
  components: {
    News,
    Header,
    Footer,
  },
  setup() {
    const {
      newsData,
      searchNewsData,
      clearResults,
      getData,
      sortDataByDate,
    } = useApp();

    provide('newsData', readonly(newsData));

    onMounted(() => getData());

    return {
      searchNewsData,
      clearResults,
      sortDataByDate,
    };
  },
});
</script>

<style lang="scss">
@import 'assets/styles/index';
</style>
