<template>
  <div>
    <!-- <Wip /> -->
    <Header />
    <Nuxt />
    <!-- <Instructions /> -->
    <!-- <Footer /> -->
  </div>
</template>

<style lang="scss">
@use '../assets/scss/colors';

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  background-color: hsla(180, 50%, 50% , .05);
}

html::-webkit-scrollbar-track {
  width: .3rem;
  background-color: transparent;
}

html::-webkit-scrollbar {
  width: .3rem;
  background-color: transparent;
}

html::-webkit-scrollbar-thumb {
  background-color: colors.$accent;
}
</style>
