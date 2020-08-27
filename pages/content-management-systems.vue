<template>
  <main class="cms">
    <div class="table-wrapper">
      <div class="table-wrapper__inner">
        <table>
          <thead>
            <tr>
              <th></th>

              <th v-for="system in systems" :key="system.id">
                <img
                  v-if="system.logo"
                  :src="require(`../assets/logos/${system.logo}`)"
                  :alt="system.title"
                >

                <span v-else>{{ system.title }}</span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="category in categories" :key="category">
              <th>
                <span>{{ category.title }}</span>
              </th>

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
  </main>
</template>

<script>
import { categories, systems } from '~/assets/cms/config.yml'

const initialSystemData = {}
for (const system in systems) {
  if (!systems.hasOwnProperty(system)) continue
  initialSystemData[system] = {}
}

export default {
  name: 'ContentManagementSystems',
  data() {
    const systemsArray = []
    for (const system in systems) {
      if (!systems.hasOwnProperty(system)) continue
      systemsArray.push({
        id: system,
        ...systems[system]
      })
    }

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
      systems: systemsArray,
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
  }
}
</script>

<style lang="scss">
.cms {
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: .9rem;
}

.table-wrapper {
  position: relative;
  box-shadow: 3px 3px 5px 0 hsla(0, 0%, 0%, .05);
  background-color: #fff;

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
    width: 12rem;
    max-height: 5rem;

    vertical-align: center;

    &:first-of-type {
      width: 9rem;

      span {
        border-bottom: none;
      }
    }

    img {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

tbody {
  th, td {
    vertical-align: top;
  }

  th {
    text-align: left;
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
