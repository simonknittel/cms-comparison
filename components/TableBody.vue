<template>
  <tbody>
    <tr v-for="category in $store.state.cms.categories" :key="category.id">
      <RowHead
        :title="category.title"
      />

      <Cell
        v-for="system in visibleSystems"
        :key="system.id"

        :system="system"
        :categoryId="category.id"
      />
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'TableBody',
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
th, td {
  vertical-align: top;
}
</style>
