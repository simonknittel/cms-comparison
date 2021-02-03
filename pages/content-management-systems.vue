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
  background-color: colors.$accent;
}

table {
  table-layout: fixed;
  width: 100%;

  border-spacing: 0;
  line-height: 1.5;
}
</style>
