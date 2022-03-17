<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__nav-wrapper">
        <a class="nav-wrapper__news" href="#">News</a>
        <a class="nav-wrapper__portal" href="#">Portal</a>
      </div>
      <img class="header__search" src="/src/assets/img/search.svg" alt="">
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
.header {
  padding: 30px 0 0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1180px;
    margin: 0 auto;
  }

  &__search {
    width: 20px;
  }
}

.nav-wrapper__news,
.nav-wrapper__portal {
  padding: 8px;
    border-radius: 4px;
    text-decoration: none;
    font-family: 'Playfair Display', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
}

.nav-wrapper__news {
  background: #121221;
  color: #F8F8F8;
}

.nav-wrapper__portal {
  color: #121221;
}
</style>
