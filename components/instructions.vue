<template>
  <div class="instructions">
    <h3>How to add missing data?</h3>
    <p>Pariatur cillum aliqua irure et sunt aliquip aute. Ad esse in cillum ad mollit Lorem occaecat velit aliqua quis esse aliqua aliquip aute. Consequat duis proident exercitation adipisicing consectetur sit nulla. Minim sunt voluptate mollit ullamco occaecat aliqua occaecat nisi consectetur. Amet Lorem reprehenderit dolor proident.</p>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/box-shadow';
@import '../assets/scss/colors';

.instructions {
  @include box-shadow();

  width: 100%;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;

  background-color: $white;

  font-size: .9rem;
  line-height: 1.5;
}
</style>
