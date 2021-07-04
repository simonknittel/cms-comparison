<template>
  <th>
    {{ title }}

    <span
      v-if="explanation"
      class="explanation"
      :title="explanation"
    >Explanation</span>
  </th>
</template>

<script>
export default {
  name: 'RowHead',

  props: {
    title: {
      type: String,
      required: true,
    },

    explanation: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors';
@use '../assets/scss/sizes';

th {
  z-index: 3;
  position: sticky;
  left: 0;

  width: sizes.$column-width;
  padding: .5rem;

  box-shadow: 2px 0 5px -3px hsla(0, 0%, 0%, .2);
  background-color: colors.$white;
  text-align: left;
  font-size: .8rem;

  @media (min-width: 40rem) {
    padding: 1rem;
    font-size: 1rem;
  }
}

.explanation {
  cursor: help;
  display: block;
  margin-top: .125rem;
  color: hsla(0, 0%, 0%, .3);
  text-decoration: underline;
}
</style>
