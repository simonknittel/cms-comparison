<template>
  <section class="filters-overlay">
    <button @click="hideOverlay">X</button>

    <h2>Show/hide</h2>

    <label class="filters-system" v-for="system in systems" :key="system.id">
      <input type="checkbox" @change="(e) => { onChange(e, system) }" :checked="system.disabled">
      {{ system.title }}
    </label>
  </section>
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
        this.$store.commit('filters/disableSystem', system)
      } else {
        this.$store.commit('filters/enableSystem', system)
      }
    },
    ...mapMutations({
      hideOverlay: 'filters/hideOverlay'
    })
  }
}
</script>

<style lang="scss">
.filters-overlay {
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
  background-color: #fff;
}

.filters-system {
  display: block;
}
</style>
