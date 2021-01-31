<template>
  <div class="instructions">
    <h3>How to add missing data?</h3>
    <p>Pariatur cillum aliqua irure et sunt aliquip aute. Ad esse in cillum ad mollit Lorem occaecat velit aliqua quis esse aliqua aliquip aute. Consequat duis proident exercitation adipisicing consectetur sit nulla. Minim sunt voluptate mollit ullamco occaecat aliqua occaecat nisi consectetur. Amet Lorem reprehenderit dolor proident.</p>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/box-shadows';
@use '../assets/scss/colors';

.instructions {
  @include box-shadows.default;

  width: 100%;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  padding: 1rem;

  background-color: colors.$white;

  font-size: .9rem;
  line-height: 1.5;
}
</style>
