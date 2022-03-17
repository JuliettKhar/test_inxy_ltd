<template>
  <div class="app">
    <Header/>
    <main>
      <news/>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import News from './pages/News.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: "App",
  components: {
    News,
    Header,
    Footer
  },
  setup() {
  }
})
</script>

<style lang="scss">
@import "styles/index";
</style>
