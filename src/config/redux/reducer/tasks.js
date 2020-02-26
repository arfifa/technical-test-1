const initialState = {
  search: {
    keyword: '',
    category: [{
      name: 'Work',
      checked: false
    },
    {
      name: 'School',
      checked: false
    }]
  },
  isLoading: false,
  isError: false,
  isSuccess: true
}

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_TASK':
      return {
        ...state,
        search: action.payload
      }
    default: {
      return state
    }
  }
}

export default tasks