<template>
  <th>
    <img
      v-if="logo"
      :src="require(`../assets/cms/${logo}`)"
      :alt="'Logo of ' + title"
    >

    <span v-else>{{ title }}</span>

    <button class="x" @click.prevent="onClick">
      <CrossIcon />
      Hide column
    </button>
  </th>
</template>

<script>
import CrossIcon from '../assets/icons/times-solid.svg?inline'

export default {
  name: 'ColumnHead',

  components: {
    CrossIcon,
  },

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
@use '../assets/scss/buttons';

th {
  z-index: 2;
  position: sticky;
  top: 0;

  height: 5rem;

  box-shadow: 0 2px 5px -3px hsla(0, 0%, 0%, .2);
  background-color: colors.$white;

  &:hover {
    .x {
      opacity: 1;
    }
  }
}

img {
  vertical-align: middle;

  max-width: 50%;
  max-height: 50%;

  margin-left: auto;
  margin-right: auto;
}

.x {
  @include buttons.default;

  opacity: 0;
  transition: opacity .1s;

  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
}
</style>
