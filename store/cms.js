import { systems, categories } from '../assets/cms/config.yml'

const populatedSystems = {}

for (const [ id, system ] of Object.entries(systems)) {
  import(`../assets/cms/${ id }.yml`)
    .then(yml => {
      populatedSystems[id] = {
        id,
        ...system
      }

      if (yml.default) Object.assign(populatedSystems[id], yml.default)
    })
}

const populatedCategories = {}

for (const [ id, category ] of Object.entries(categories)) {
  populatedCategories[id] = {
    id,
    ...category,
  }
}

export function state() {
  return {
    systems: populatedSystems,
    categories: populatedCategories
  }
}
