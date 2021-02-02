<template>
  <main>
    <div class="table-wrapper">
      <div class="table-wrapper__inner">
        <table>
          <TableHead />
          <TableBody />
        </table>
      </div>
    </div>

    <Filters v-if="$store.state.filters.overlayVisible" />
  </main>
</template>

<script>
export default {
  name: 'ContentManagementSystems',
  head: {
    title: 'Content Management Systems (CMS)',
  },
}
</script>

<style lang="scss">
@use '../assets/scss/box-shadows';
@use '../assets/scss/colors';

main {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2rem;
  font-size: .9rem;
}

.table-wrapper {
  @include box-shadows.default;

  position: relative;
  background-color: colors.$white;
}

.table-wrapper__inner {
  overflow-x: auto;
}

.table-wrapper__inner::-webkit-scrollbar-track {
  height: .3rem;
  background-color: transparent;
}

.table-wrapper__inner::-webkit-scrollbar {
  height: .3rem;
  background-color: transparent;
}

.table-wrapper__inner::-webkit-scrollbar-thumb {
  background-color: hsla(180, 25%, 50%, .3);
}

table {
  table-layout: fixed;
  width: 100%;

  line-height: 1.5;
}

th {
  padding: .5rem;
}

td {
  &:nth-of-type(odd) {
    background-color: hsla(180, 25%, 50%, .05);
  }

  &:nth-of-type(even) {
    background-color: hsla(180, 25%, 50%, .1);
  }
}
</style>
