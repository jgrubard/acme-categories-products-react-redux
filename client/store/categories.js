import axios from 'axios';

const GET_CATEGORIES = 'GET_CATEGORIES';

export const getCategoriesThunk = () => {
  return dispatch => {
    return axios('/api/categories')
      .then(res => res.data)
      .then(categories => dispatch({ type: GET_CATEGORIES, categories}))
      .catch(err => console.error(err))
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {

    case GET_CATEGORIES:
      return action.categories;
  }
  return state;
}

export default reducer;
