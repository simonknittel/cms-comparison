export function state() {
  return {
    overlayVisible: false,
    disabledSystems: []
  }
}

export const mutations = {
  enableSystem(state, id) {
    state.disabledSystems.splice(state.disabledSystems.indexOf(id), 1)

    window.sessionStorage.setItem('disabledSystems', state.disabledSystems)
  },

  disableSystem(state, id) {
    let arrayOfIds = []

    if (Array.isArray(id)) {
      arrayOfIds.push(...id)
    } else {
      arrayOfIds.push(id)
    }

    arrayOfIds = arrayOfIds.filter(id => state.disabledSystems.includes(id) === false)

    state.disabledSystems.push(...arrayOfIds)

    window.sessionStorage.setItem('disabledSystems', state.disabledSystems)
  },

  toggleOverlay(state) {
    state.overlayVisible = !state.overlayVisible
  },

  hideOverlay(state) {
    state.overlayVisible = false
  }
}
