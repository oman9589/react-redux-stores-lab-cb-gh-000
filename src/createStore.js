export default function createStore(reducer){
  let state;
  
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach (listener => listener())
  }

  dispatch({})

  const getState = () => {
    return state
  }

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
