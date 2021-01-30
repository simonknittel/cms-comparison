<template>
  <header>
    <h1>Unopinionated comparison of ...</h1>
  </header>
</template>

<style lang="scss">
@import '../assets/scss/box-shadow';
@import '../assets/scss/colors';

header {
  @include box-shadow();

  padding-top: 2rem;
  padding-bottom: 2rem;

  background-color: $white;
}

h1 {
  text-align: center;
  font-weight: normal;
}
</style>
