<template>
  <tbody>
    <tr v-for="category in $store.state.cms.categories" :key="category.id">
      <td v-if="category.children" class="parent" :colspan="visibleSystems.length + 1">
        <div class="parent-title">
          <span class="parent-title-inner">{{ category.title }}</span>
        </div>

        <table>
          <tbody>
            <tr v-for="child in category.children" :key="child.id">
              <RowHead
                :title="child.title"
              />

              <Cell
                v-for="system in visibleSystems"
                :key="system.id"

                :system="system"
                :categoryId="child.id"
              />
            </tr>
          </tbody>
        </table>
      </td>

      <template v-else>
        <RowHead
          :title="category.title"
        />

        <Cell
          v-for="system in visibleSystems"
          :key="system.id"

          :system="system"
          :categoryId="category.id"
        />
      </template>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'TableBody',
  computed: {
    visibleSystems() {
      const visible = Object.values(this.$store.state.cms.systems).filter(({ id }) => {
        return this.$store.state.filters.disabledSystems.includes(id) ? false : true
      })

      const sorted = visible.sort((a, b) => a.title.localeCompare(b.title))

      return sorted
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors';
@use '../assets/scss/sizes';
@use '../assets/scss/utils';

table {
  @include utils.table-reset;
  line-height: 1.5;
}

th, td {
  vertical-align: top;
}

.parent {
  th {
    font-weight: normal;
  }
}

.parent-title {
  box-shadow: 2px 0 5px -3px hsla(0, 0%, 0%, .2);
  background-color: colors.$accent-light;
}

.parent-title-inner {
  display: inline-block;

  z-index: 3;
  position: sticky;
  left: 0;

  padding: .5rem;

  font-weight: bold;
  font-size: .8rem;

  @media (min-width: 40rem) {
    padding: 1rem;
    font-size: 1rem;
  }
}
</style>