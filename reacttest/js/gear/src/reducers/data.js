const defaultState = {
  data: null,
  filteredData: null,
  isFetching: false,
  isLoaded: false,
  error: null,
}

function data(state = defaultState, action) {
  switch(action.type) {
    case 'GET_DATA_SUCCESS' :
      return {
        ...state, // ES7 object spread
        data: action.data,
        filteredData: action.data,
        isLoaded: true,
        isFetching: false
      }
    case 'GET_DATA_PENDING' :
      return {
        ...state,
        isFetching: true
      }
    case 'GET_DATA_FAIL' :
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case 'SEARCH_TITLE' :
      const filteredData = state.data.filter((node) => {
        return ~node.attributes.title.toLowerCase().indexOf(action.search.toLowerCase());
      })
      return {
        ...state,
        filteredData: filteredData,
      }
    case 'SELECT_GEAR' :
      let data = state.data;
      data[index].selected = true;
      return {
        ...state,
        data
      }
    default:
      return state;
  }
}

export default data;
