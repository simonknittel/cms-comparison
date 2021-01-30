<template>
  <div>
    <div class="overlay">
      <button class="x" @click="hideOverlay" title="Close filters">X</button>

      <h2>Show/hide</h2>

      <label class="label" v-for="system in systems" :key="system.id">
        <input type="checkbox" @change="(e) => { onChange(e, system) }" :checked="system.disabled">
        {{ system.title }}
      </label>
    </div>

    <div class="background" @click="hideOverlay"></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { systems } from '../assets/cms/config.yml'

export default {
  name: 'Filters',
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
  },
  methods: {
    onChange(e, system) {
      if (e.currentTarget.checked) {
        this.$store.commit('filters/disableSystem', system.id)
      } else {
        this.$store.commit('filters/enableSystem', system.id)
      }
    },
    ...mapMutations({
      hideOverlay: 'filters/hideOverlay'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/box-shadow';
@import '../assets/scss/closing-button';
@import '../assets/scss/colors';

.background {
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, .2);
}

.overlay {
  @include box-shadow();

  z-index: 2;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 36rem;
  max-width: 95vw;

  height: 100%;
  max-height: 70vh;

  padding: 2rem;

  border-radius: 3px;
  background-color: $white;
}

.label {
  display: block;
}

.x {
  @include closing-button();

  position: absolute;
  right: 2rem;
  top: 2rem;
}
</style>
