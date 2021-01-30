<template>
  <main>
    <div class="table-wrapper">
      <div class="table-wrapper__inner">
        <table>
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
        </table>
      </div>
    </div>

    <Filters v-if="overlayVisible" />
  </main>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ContentManagementSystems',
  head: {
    title: 'Content Management Systems (CMS)',
  },
  methods: {
    ...mapMutations({
      toggleOverlay: 'filters/toggleOverlay',
    })
  },
  computed: {
    visibleSystems() {
      const visibleSystems = []

      for (const [ id, system ] of Object.entries(this.$store.state.cms.systems)) {
        if (this.$store.state.filters.disabledSystems.includes(id)) continue

        visibleSystems.push(system)
      }

      return visibleSystems
    },
    overlayVisible() { return this.$store.state.filters.overlayVisible }
  }
}
</script>

<style lang="scss">
@use '../assets/scss/box-shadows';
@use '../assets/scss/colors';

main {
  margin-left: 1rem;
  margin-right: 1rem;
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

thead {
  th {
    &:first-of-type {
      width: 9rem;
    }
  }
}

tbody {
  th, td {
    vertical-align: top;
  }
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
