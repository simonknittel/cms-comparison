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
  $outer-spacing: 1rem;

  position: absolute;
  left: $outer-spacing;
  right: $outer-spacing;
  top: 6rem;
  bottom: $outer-spacing;

  font-size: .9rem;
}

.table-wrapper {
  @include box-shadows.default;

  height: 100%;
  background-color: colors.$white;
}

.table-wrapper__inner {
  overflow: scroll;
  height: 100%;
}

.table-wrapper__inner::-webkit-scrollbar-track {
  width: .3rem;
  height: .3rem;
  background-color: transparent;
}

.table-wrapper__inner::-webkit-scrollbar {
  width: .3rem;
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
