<template>
  <header>
    <h1>Unopinionated comparison of ...</h1>
  </header>
</template>

<style lang="scss">
@use '../assets/scss/box-shadows';
@use '../assets/scss/colors';

header {
  @include box-shadows.default;

  padding-top: 2rem;
  padding-bottom: 2rem;

  background-color: colors.$white;
}

h1 {
  text-align: center;
  font-weight: normal;
}
</style>
