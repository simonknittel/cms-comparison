<template>
  <main class="cms">
    <div class="table-wrapper">
      <div class="table-wrapper__inner">
        <table>
          <thead>
            <tr>
              <th></th>

              <th v-for="system in systems" :key="system.id">
                <span>{{ system.title }}</span>
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
import { categories, systems } from '~/assets/shop-systems/config.yml'

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
        title: systems[system].title
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

      import(`~/assets/shop-systems/${system}.yml`)
        .then(yml => {
          this.systemData[system] = yml.default ? yml.default : {}
        })
    }
  }
}
</script>
