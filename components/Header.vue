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
  justify-content: center;
  flex-direction: column;

  padding-left: 1rem;
  padding-right: 1rem;

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 6rem;

  @media (min-width: 40rem) {
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;

    padding-left: 2rem;
    padding-right: 2rem;
  }
}

h1 {
  font-size: 1rem;
  line-height: 1rem;

  @media (min-width: 40rem) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
}
</style>
