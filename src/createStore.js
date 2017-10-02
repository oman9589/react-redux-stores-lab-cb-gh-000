export default function createStore(reducer){
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach (listener => listener())
  }

  dispatch({})

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  }
}

const store = createStore(countReducer)
store.getState()
store.dispatch({type: 'INCREMENT_COUNT'})
store.getState()
