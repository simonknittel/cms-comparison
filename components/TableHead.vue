<template>
  <thead>
    <tr>
      <th class="first">
        <button @click="toggleOverlay">Filters</button>
      </th>

      <ColumnHead
        v-for="system in visibleSystems"
        :key="system.id"

        :title="system.title"
        :id="system.id"
        :logo="system.logo"
      />
    </tr>
  </thead>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TableHead',
  methods: {
    ...mapMutations({
      toggleOverlay: 'filters/toggleOverlay',
    }),
  },
  computed: {
    visibleSystems() {
      // TODO: Sort
      return Object.values(this.$store.state.cms.systems).filter(({ id }) => {
        return this.$store.state.filters.disabledSystems.includes(id) ? false : true
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors';
@use '../assets/scss/sizes';

th {
  width: sizes.$column-width;
}

.first {
  z-index: 4;
  position: sticky;
  left: 0;
  top: 0;

  box-shadow: 0 0 5px 0 hsla(0, 0%, 0%, .2);
  background-color: colors.$white;
}
</style>
