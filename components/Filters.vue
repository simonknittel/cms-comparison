<template>
  <div class="container" v-hotkey="keymap">
    <div class="background" @click="hideOverlay"></div>

    <div class="overlay">
      <button class="close" @click="hideOverlay" title="Close filters">
        <CrossIcon />
        Close
      </button>

      <div class="inner">
        <h2 class="heading">Filters</h2>
        <p class="description">Select a checkbox to hide individual columns and rows</p>

        <div class="grid">
          <div class="left">
            <h3 class="subheading">Columns</h3>

            <div class="column-list">
              <FilterItem
                v-for="system in systems"
                :key="system.id"

                :title="system.title"
                :disabled="system.disabled"

                :onChange="(e) => { onChange(e, system.id) }"
              />
            </div>
          </div>

          <div class="right">
            <h3 class="subheading">Rows</h3>

            <div class="column-list">
              <FilterItem
                v-for="category in categories"
                :key="category.id"

                :title="category.title"
                :disabled="false"
                :isChild="category.isChild"

                :onChange="() => {}"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { systems } from '../assets/cms-config.yml'
import CrossIcon from '../assets/icons/times-solid.svg?inline'

export default {
  name: 'Filters',

  components: {
    CrossIcon,
  },

  computed: {
    systems() {
      const array = []

      for (const [systemId, system] of Object.entries(systems)) {
        array.push({
          id: systemId,
          disabled: this.$store.state.filters.disabledSystems.includes(systemId),
          ...system
        })
      }

      return array
    },

    keymap () {
      return {
        'esc': this.hideOverlay,
      }
    },

    categories() {
      const array = []

      for (const category of Object.values(this.$store.state.cms.categories)) {
        array.push(category)

        if (!category.children) continue;

        for (const child of Object.values(category.children)) {
          array.push({
            isChild: true,
            ...child
          })
        }
      }

      return array
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
  },
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

  backdrop-filter: blur(10px); // Results in performance hit during scrolling
  background-color: rgba(255, 255, 255, .2);
  background-color: hsla(180, 50%, 50%, .1);
}

.overlay {
  @include box-shadows.default;

  z-index: 1;
  position: relative;

  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;

  width: 62rem;
  max-width: 95vw;

  height: calc(100% - 10rem);

  border-radius: 3px;
  border: 1px solid colors.$accent;
  background-color: colors.$white;
}

.inner {
  overflow: auto;
  height: 100%;
  padding: 2rem;
}

/*
.inner::-webkit-scrollbar-track {
  width: .3rem;
  height: .3rem;
  background-color: transparent;
}

.inner::-webkit-scrollbar {
  width: .3rem;
  height: .3rem;
  background-color: transparent;
}

.inner::-webkit-scrollbar-thumb {
  background-color: colors.$accent;
}
*/

.heading {}

.description {
  margin-top: .5rem;
}

.grid {
  display: flex;
  margin-top: 2rem;
}

.left,
.right {
  width: 50%;
}

.subheading {}

.column-list {
  margin-top: .5rem;
}

.close {
  @include buttons.default;

  position: absolute;
  right: 0rem;
  top: 2rem;
  transform: translateX(50%);
}
</style>
