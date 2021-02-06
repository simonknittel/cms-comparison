<template>
  <th>
    {{ title }}
  </th>
</template>

<script>
export default {
  name: 'RowHead',
  props: {
    title: {
      type: String,
      required: true
    }
  }
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
</style>
