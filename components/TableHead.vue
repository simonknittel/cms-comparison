<template>
  <thead>
    <tr>
      <th>
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
      return Object.values(this.$store.state.cms.systems).filter(({ id }) => {
        return this.$store.state.filters.disabledSystems.includes(id) ? false : true
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/sizes';

th {
  width: sizes.$column-width;
}

tr {
  position: sticky;
  top: 0;
  box-shadow: 0 2px 5px -3px hsla(0, 0%, 0%, .2);
}
</style>
