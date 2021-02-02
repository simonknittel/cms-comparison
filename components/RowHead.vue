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

th {
  z-index: 1;
  position: sticky;
  left: 0;

  padding: 1rem;

  box-shadow: 2px 0 5px -3px hsla(0, 0%, 0%, .2);
  background-color: colors.$white;
  text-align: left;
}
</style>
