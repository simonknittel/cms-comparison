<template>
  <div class="container" v-hotkey="keymap">
    <div class="background" @click="hideOverlay"></div>

    <div class="overlay">
      <button class="close" @click="hideOverlay" title="Close filters">
        <CrossIcon />
      </button>

      <h2 class="heading">Filters</h2>
      <p class="description">Select a checkbox to hide individual columns and rows</p>

      <FilterItem
        v-for="system in systems"
        :key="system.id"

        :title="system.title"
        :disabled="system.disabled"

        :onChange="(e) => { onChange(e, system.id) }"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { systems } from '../assets/cms/config.yml'
import CrossIcon from '../assets/icons/times-solid.svg?inline'

export default {
  name: 'Filters',

  components: {
    CrossIcon,
  },

  computed: {
    systems() {
      const systemsArray = []
      for (const system in systems) {
        if (!systems.hasOwnProperty(system)) continue
        systemsArray.push({
          id: system,
          disabled: this.$store.state.filters.disabledSystems.includes(system),
          ...systems[system]
        })
      }
      return systemsArray
    },

    keymap () {
      return {
        'esc': this.hideOverlay,
      }
    },
  },

  methods: {
    onChange(e, systemId) {
      if (e.currentTarget.checked) {
        this.$store.commit('filters/disableSystem', systemId)
      } else {
        this.$store.commit('filters/enableSystem', systemId)
      }
    },
    ...mapMutations({
      hideOverlay: 'filters/hideOverlay'
    })
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/box-shadows';
@use '../assets/scss/colors';
@use '../assets/scss/buttons';

.container {
  z-index: 5;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.background {
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, .2);
}

.overlay {
  @include box-shadows.default;

  z-index: 1;
  position: relative;

  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;

  width: 36rem;
  max-width: 95vw;

  height: calc(100% - 10rem);
  max-height: 70vh;

  padding: 2rem;

  border-radius: 3px;
  border: 1px solid colors.$accent;
  background-color: colors.$white;
}

.heading {}

.description {
  margin-top: .5rem;
  margin-bottom: 1rem;
}

.close {
  @include buttons.closing;

  position: absolute;
  right: 0rem;
  top: 2rem;
  transform: translateX(50%);
}
</style>
