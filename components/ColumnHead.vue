<template>
  <th>
    <img
      v-if="logo"
      :src="require(`../assets/logos/${logo}`)"
      :alt="'Logo of ' + title"
    >

    <span v-else>{{ title }}</span>

    <button class="x" @click.prevent="onClick" :title="'Hide ' + title">Hide {{ title }}</button>
  </th>
</template>

<script>
export default {
  name: 'ColumnHead',
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    logo: String
  },
  methods: {
    onClick() {
      this.$store.commit('filters/disableSystem', this.$props.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors';
@use '../assets/scss/closing-buttons';

th {
  z-index: 2;
  position: relative;

  height: 5rem;

  &:hover {
    .x {
      opacity: 1;
    }
  }
}

img {
  max-width: 50%;
  max-height: 50%;

  margin-left: auto;
  margin-right: auto;
}

.x {
  @include closing-buttons.default;

  opacity: 0;
  transition: opacity .1s;

  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);

  width: auto;
}
</style>
