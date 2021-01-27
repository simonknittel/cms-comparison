export function state() {
  return {
    overlayVisible: false,
    disabledSystems: []
  }
}

export const mutations = {
  enableSystem(state, system) {
    state.disabledSystems.splice(state.disabledSystems.indexOf(system.id))
  },
  disableSystem(state, system) {
    if (!state.disabledSystems.includes(system.id)) {
      state.disabledSystems.push(system.id)
    }
  },
  toggleOverlay(state) {
    state.overlayVisible = !state.overlayVisible
  },
  hideOverlay(state) {
    state.overlayVisible = false
  }
}
