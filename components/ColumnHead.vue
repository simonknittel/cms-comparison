<template>
  <th>
    <img
      v-if="logo"
      :src="require(`../assets/logos/${logo}`)"
      :alt="'Logo of ' + title"
    >

    <span v-else>{{ title }}</span>

    <button class="x" @click.prevent="onClick" :title="'Hide ' + title">X</button>
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
  position: relative;

  width: 12rem;
  max-height: 5rem;

  vertical-align: middle;

  &:hover {
    .x {
      opacity: 1;
    }
  }
}

img {
  width: 90%;
  max-height: 10rem;
  margin-left: auto;
  margin-right: auto;
}

.x {
  @include closing-buttons.default;

  opacity: 0;
  transition: opacity .1s;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 1rem;
  top: 1rem;

  width: 2rem;
  height: 2rem;
  padding: .5;

  outline: none;
  border: none;
  border-radius: 50%;
  background-color: colors.$accent;
  color: colors.$white;
}
</style>
