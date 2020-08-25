<template>
  <main class="cms">
    <table>
      <thead>
        <tr>
          <th></th>

          <th v-for="system in systems" :key="system">
            <span>{{ system }}</span>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="category in categories" :key="category">
          <th>
            <span>{{ category }}</span>
          </th>

          <Cell
            v-for="system in systems"
            :key="system"

            :systemData="systemData[system]"
            :category="category"
          />
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import { categories, systems } from '~/assets/cms/config.yml'

const initialSystemData = {}
for (const system of systems) {
  initialSystemData[system] = {}
}

export default {
  name: 'ContentManagementSystems',
  data() {
    return {
      categories,
      systems,
      systemData: initialSystemData
    }
  },
  created() {
    for (const system of systems) {
      const fileName = system.toLowerCase()
      import(`~/assets/cms/${fileName}.yml`)
        .then(yml => {
          this.systemData[system] = yml.default
        })
    }
  }
}
</script>

<style lang="scss">
.cms {
  overflow-x: auto;
  margin-left: 1rem;
  margin-right: 1rem;
}

table {
  table-layout: fixed;
  width: 100%;
}

th {
  text-align: left;

  span {
    display: inline-block;
    padding-bottom: .25rem;
    border-bottom: 2px solid hsla(180, 25%, 50%, .3);
  }
}

thead {
  th {
    width: 12rem;

    &:first-of-type {
      width: 9rem;

      span {
        border-bottom: none;
      }
    }
  }
}


th, td {
  vertical-align: top;
  padding: .5rem;
}

td {
  &:nth-of-type(odd) {
    background-color: hsla(180, 25%, 50%, .1);
  }

  &:nth-of-type(even) {
    background-color: hsla(180, 25%, 50%, .2);
  }
}
</style>
