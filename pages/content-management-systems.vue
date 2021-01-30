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
                v-for="system in systems"
                :key="system.id"

                :title="system.title"
                :id="system.id"
                :logo="system.logo"
              />
            </tr>
          </thead>

          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <RowHead
                :title="category.title"
              />

              <Cell
                v-for="system in systems"
                :key="system.id"

                :systemData="systemData[system.id]"
                :category="category.id"
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
import { categories, systems } from '../assets/cms/config.yml'
import { mapMutations } from 'vuex';

const initialSystemData = {}
for (const system in systems) {
  if (!systems.hasOwnProperty(system)) continue
  initialSystemData[system] = {}
}

export default {
  name: 'ContentManagementSystems',
  head: {
    title: 'Content Management Systems (CMS)',
  },
  data() {
    const categoriesArray = []
    for (const category in categories) {
      if (!categories.hasOwnProperty(category)) continue
      categoriesArray.push({
        id: category,
        title: categories[category].title
      })
    }

    return {
      categories: categoriesArray,
      systemData: initialSystemData
    }
  },
  created() {
    for (const system in systems) {
      if (!systems.hasOwnProperty(system)) continue

      import(`~/assets/cms/${system}.yml`)
        .then(yml => {
          this.systemData[system] = yml.default ? yml.default : {}
        })
    }
  },
  methods: {
    ...mapMutations({
      toggleOverlay: 'filters/toggleOverlay',
    })
  },
  computed: {
    systems() {
      const systemsArray = []
      for (const system in systems) {
        if (!systems.hasOwnProperty(system)) continue
        if (this.$store.state.filters.disabledSystems.includes(system)) continue
        systemsArray.push({
          id: system,
          ...systems[system]
        })
      }
      return systemsArray
    },
    overlayVisible() { return this.$store.state.filters.overlayVisible }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/colors';
@import '../assets/scss/box-shadow';
@import '../assets/scss/closing-button';

main {
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: .9rem;
}

.table-wrapper {
  @include box-shadow();

  position: relative;
  background-color: $white;

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
