<template>
  <div>
    <Wip />

    <Header />

    <Navigation />

    <Nuxt />

    <small class="hint">Uses developer specific keywords</small>

    <Instructions />

    <Footer />
  </div>
</template>

<style>
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

.nav {
  margin-top: 2rem;
}

.cms {
  margin-top: 2rem;
}

.hint {
  display: block;

  margin-top: 1rem;

  font-size: .9rem;
  text-align: center;
}

.instructions {
  margin-top: 4rem;
}

.footer {
  margin-top: 4rem;
}
</style>
