import { systems, categories } from '../assets/cms-config.yml'

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
    .catch(error => {
      console.error(error)
    })
}

const populatedCategories = {}

for (const [ id, category ] of Object.entries(categories)) {
  if (category.children) {
    const children = {}

    for (const [ childId, child ] of Object.entries(category.children)) {
      children[childId] = {
        id: childId,
        ...child
      }
    }

    populatedCategories[id] = {
      id,
      title: category.title,
      children,
    }
  } else {
    populatedCategories[id] = {
      id,
      ...category,
    }
  }
}

export function state() {
  return {
    systems: populatedSystems,
    categories: populatedCategories
  }
}
