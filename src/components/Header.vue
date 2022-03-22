<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__nav-wrapper">
        <a
          v-for="(btn, i) in buttons"
          :key="i"
          :class="['nav-wrapper__news', activeBtn === i ? 'is-active' : '']"
          href="#"
        >
          {{ btn }}
        </a>
      </div>
      <div @mouseenter="showSearchInput" class="header__search-wrapper">
        <input
          type="text"
          :class="isVisible ? 'is-visible' : ''"
          v-model="searchValue"
          @keyup.enter="searchNews"
        />
        <button class="header__search-btn" @click="searchNews">
          <img
            class="header__search"
            src="/src/assets/img/search.svg"
            alt="search"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Header',
  emits: ['search'],
  setup(_, { emit }) {
    const buttons = ['News', 'Portal'];
    const activeBtn = ref(0);
    const isVisible = ref(false);
    const searchValue = ref('');

    const searchNews = () => emit('search', searchValue.value);
    const showSearchInput = () => (isVisible.value = true);

    return {
      buttons,
      activeBtn,
      isVisible,
      searchValue,
      searchNews,
      showSearchInput,
    };
  },
});
</script>

<style scoped lang="scss">
.header {
  margin: 0 0 70px 0;
  padding: 30px 0 0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 82%;
    margin: 0 auto;

    @media (min-width: 1920px) {
      max-width: 1440px;
    }
  }

  &__search-btn {
    border: none;
    background: none;
    cursor: pointer;
    height: 24px;

    & > img {
      width: 16px;
      height: 24px;
    }
  }

  &__nav-wrapper {
    display: flex;
    gap: 10px;
  }

  &__search-wrapper {
    display: flex;
    align-items: center;
    min-width: 100px;

    input {
      border-radius: 6px;
      opacity: 0;
      transition: opacity ease-in-out 0.5s;
      border: 1px solid $black60;

      @media (max-width: 576px) {
        max-width: 100px;
      }
    }
  }
}

.nav-wrapper__news,
.nav-wrapper__portal {
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: $black80;
}

.is-active {
  background: $black80;
  color: $white;
}

.is-visible {
  opacity: 1 !important;
  transition: opacity ease-in-out 0.5s;
}
</style>
