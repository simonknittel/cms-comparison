export function state() {
  return {
    overlayVisible: false,
    disabledSystems: []
  }
}

export const mutations = {
  enableSystem(state, id) {
    state.disabledSystems.splice(state.disabledSystems.indexOf(id))
  },
  disableSystem(state, id) {
    if (!state.disabledSystems.includes(id)) {
      state.disabledSystems.push(id)
    }
  },
  toggleOverlay(state) {
    state.overlayVisible = !state.overlayVisible
  },
  hideOverlay(state) {
    state.overlayVisible = false
  }
}
