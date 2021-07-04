export function state() {
  return {
    collapsed: []
  }
}

export const mutations = {
  collapse(state, id) {
    let arrayOfIds = []

    if (Array.isArray(id)) {
      arrayOfIds.push(...id)
    } else {
      arrayOfIds.push(id)
    }

    arrayOfIds = arrayOfIds.filter(id => state.collapsed.includes(id) === false)

    state.collapsed.push(...arrayOfIds)

    window.sessionStorage.setItem('collapsedCategories', state.collapsed)
  },

  uncollapse(state, id) {
    if (state.collapsed.includes(id) === false) return
    state.collapsed.splice(state.collapsed.indexOf(id), 1)

    window.sessionStorage.setItem('collapsedCategories', state.collapsed)
  },
}
