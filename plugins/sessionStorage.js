// TODO: Results in "The client-side rendered virtual DOM tree is not matching server-rendered content."
export default function sessionStorage({ store }) {
  let disabledSystems = window.sessionStorage.getItem('disabledSystems')
  if (disabledSystems) {
    disabledSystems = disabledSystems.split(',')

    store.commit(
      'filters/disableSystem',
      disabledSystems
    )
  }

  let collapsedCategories = window.sessionStorage.getItem('collapsedCategories')
  if (collapsedCategories) {
    collapsedCategories = collapsedCategories.split(',')

    store.commit(
      'categories/collapse',
      collapsedCategories
    )
  }
}
