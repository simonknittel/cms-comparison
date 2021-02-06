<template>
  <header>
    <h1>Unopinionated comparison of</h1>

    <Navigation />
  </header>
</template>

<style lang="scss">
@use '../assets/scss/box-shadows';

header {
  display: flex;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 6rem;
}

h1 {
  font-size: 1.5rem;
  line-height: 1.5rem;
}
</style>
