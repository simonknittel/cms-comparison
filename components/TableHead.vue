<template>
  <thead>
    <tr>
      <th class="first">
        <button class="filters-button" @click="toggleOverlay">
          <FilterIcon />
          Filters
          <span class="filters-count" v-if="filtersCount">({{ filtersCount }})</span>
        </button>
      </th>

      <ColumnHead
        v-for="system in sortedSystems"
        :key="system.id"

        :title="system.title"
        :id="system.id"
        :logo="system.logo"
        :class="{
          disabled: $store.state.filters.disabledSystems.includes(system.id)
        }"
      />
    </tr>
  </thead>
</template>

<script>
import { mapMutations } from 'vuex'
import FilterIcon from '../assets/icons/filter-solid.svg?inline'

export default {
  name: 'TableHead',

  components: {
    FilterIcon,
  },

  methods: {
    ...mapMutations({
      toggleOverlay: 'filters/toggleOverlay',
    }),
  },

  computed: {
    sortedSystems() {
      return Object
        .values(this.$store.state.cms.systems)
        .sort((a, b) => a.title.localeCompare(b.title))
    },

    filtersCount() {
      return this.$store.state.filters.disabledSystems.length
    }
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors';
@use '../assets/scss/sizes';
@use '../assets/scss/buttons';

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

.filters-button {
  @include buttons.default;

  margin-left: auto;
  margin-right: auto;

  svg {
    width: .8rem;
    height: .8rem;
  }
}

.filters-count {
  margin-left: .5em;
}

.disabled {
  display: none;
}
</style>
