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
thead {
  th {
    &:first-of-type {
      width: 9rem;
    }
  }
}
</style>
