angular.module('family').factory('Store', function() {

  let defaultState = {
    mommy: { show: false },
    son: { show: false },
    grandpa: { called: false }
  }

  function counter(state = defaultState, action: any) {
    switch (action.type) {
      case 'toggle:mommy':
        return { ...state, mommy: { show: !state.mommy.show } }
      case 'toggle:son':
        return { ...state, son: { show: !state.son.show } }
      case 'call:grandpa':
        return { ...state, grandpa: { called: true } }
      default:
        return state
    }
  }

  return Redux.createStore(counter)
})





// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

