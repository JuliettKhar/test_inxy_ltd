<template>
  <div class="news">
    <div class="news__header">
      <h2 class="news__header-title">Latest News</h2>
      <div class="news__header-filter-wrapper">
        <span class="news__header-date">Friday, <span class="mobile-hidden">December</span> 12, 2022</span>
        <button class="news__header-filter" @click="sortData(asc = !asc)">
          <img :class="!asc ? 'rotated' : ''" src="/src/assets/img/sort.svg" alt="news filter">
        </button>
      </div>
    </div>
    <div class="news__content-wrapper">
      <div v-for="(item, i) in filteredData" :key="i" class="news__content-item">
        <img class="content-item__image" :src="item.image" alt="image">
        <h4 class="content-item__title">{{ item.title }}</h4>
        <div class="content-item__date">
          <span>{{ item.date }}</span>
          <span>{{ item.from }}</span>
        </div>
        <p class="content-item__description">{{ item.description }}</p>
        <a href="#" class="content-item__more">read more</a>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {computed, defineComponent, inject, onMounted, ref} from "vue";
import { DataType } from "../types";

export default defineComponent({
  name: "News",
  setup() {
    const newsData = inject('newsData', ref([]));

    const filteredData = computed<DataType[]>(() => newsData.value);
    const asc = ref(true);

    const sortData = (asc) => {
      asc ? newsData.value.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) :
          newsData.value.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }


    onMounted(() => sortData(asc.value))

    return {
      newsData,
      filteredData,
      asc,
      sortData
    }
  }
})
</script>

<style scoped lang="scss">
.news {
  width: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 24px;
  }

  &__header-filter {
    border: none;
    background: none;
    cursor: pointer;

    & > img {
      width: 24px;
      transition: ease .5s;
    }
  }

  &__header-date {
    font-family: 'Arial', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #000;

    @media (max-width: 576px) {
      font-size: 12px;
    }
  }

  &__header-filter-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &__header-title {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 36px;
    color: $black80;
    white-space: nowrap;

    @media (max-width: 769px) {
      font-size: 24px;
    }
  }

  &__content-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 70px 30px;
    margin: 0 0 90px;

    @media (min-width: 1920px) {
      justify-content: space-between;
    }

    @media (max-width: 769px) {
      gap: 48px 20px;
    }

    @media (max-width: 576px) {
      gap: 32px 20px;
    }
  }

  &__content-item {
    display: flex;
    flex-direction: column;
    max-width: 270px;

    @media (min-width: 577px) and (max-width: 769px) {
      max-width: 202px;
    }

    @media (min-width: 375px) and (max-width: 576px) {
      max-width: 142px;
    }
  }
}

.content-item {

  &__title {
    margin: 16px 0;
    font-family: inherit;
    font-weight: 700;
    font-size: 24px;
    color: #121221;

    @media (max-width: 769px) {
      font-size: 18px;
    }

    @media (max-width: 576px) {
      font-size: 16px;
    }
  }

  &__description,
  &__more {
    margin: 0;
    max-width: 270px;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    color: $black60;

    @media (max-width: 769px) {
      font-size: 14px;
    }

    @media (max-width: 576px) {
      font-size: 12px;
    }
  }

  &__description {
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }

  &__more {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &__image {
    width: 100%;
    transition: ease .5s;
  }

  &__date {
    display: flex;
    gap: 16px;
    margin: 0 0 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: $black20;

    @media (max-width: 769px) {
      font-size: 12px;
    }

    @media (max-width: 576px) {
      font-size: 8px;
    }
  }
}

.mobile-hidden {
  @media (max-width: 576px) {
    display: none;

  }
}

.rotated {
  transform: rotate(180deg);
  transition: ease .5s;
}
</style>
