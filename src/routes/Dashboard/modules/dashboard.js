// ------------------------------------
// Constants
// ------------------------------------
export const DASHBOARD_INCREMENT = 'DASHBOARD_INCREMENT'
export const DASHBOARD_DOUBLE_ASYNC = 'DASHBOARD_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function dashboardVisitIncrement (value = 1) {
  return {
    type    : DASHBOARD_INCREMENT,
    payload : value
  }
}

export const actions = {
  dashboardVisitIncrement
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DASHBOARD_INCREMENT] : (state, action) => ({
    ...state,
    visitsCount: state.visitsCount + action.payload
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  visitsCount: 0,
  dashboardItems: [
    {key: 0, label: 'Angular'},
    {key: 1, label: 'JQuery'},
    {key: 2, label: 'Polymer'},
    {key: 3, label: 'ReactJS'}
  ]
}


export default function dashboardReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
