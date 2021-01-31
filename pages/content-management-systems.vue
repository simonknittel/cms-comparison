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

  // &::before {
  //   content: '';

  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   width: 10rem;
  //   height: 100%;

  //   background: linear-gradient(to right, hsla(0, 0%, 100%, 1), hsla(0, 0%, 0%, 0));
  // }

  &::after {
    content: '';

    position: absolute;
    right: 0;
    top: 0;
    width: 10rem;
    height: 100%;

    background: linear-gradient(to left, hsla(0, 0%, 100%, 1), hsla(0, 0%, 0%, 0));
  }
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
  padding: 0 1rem 1rem 1rem;

  line-height: 1.5;
}

th {
  padding: .5rem;
}

th {
  span {
    display: inline-block;
    padding-bottom: .25rem;
    border-bottom: 2px solid hsla(180, 25%, 50%, .3);
  }
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
