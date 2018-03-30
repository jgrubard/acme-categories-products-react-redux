import axios from 'axios';

const GET_CATEGORIES = 'GET_CATEGORIES';
const CREATE_CATEGORY = 'CREATE_CATEGORY'

export const getCategoriesThunk = () => {
  return dispatch => {
    return axios('/api/categories')
      .then(res => res.data)
      .then(categories => dispatch({ type: GET_CATEGORIES, categories }))
      .catch(err => console.error(err))
  }
}

export const createCategoryThunk = (category) => {
  return dispatch => {
    return axios.post('/api/categories', category)
      .then(res => res.data)
      .then(category => dispatch({ type: CREATE_CATEGORY, category }))
      .catch(err => console.error(err))
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {

    case GET_CATEGORIES:
      return action.categories;

    case CREATE_CATEGORY:
      return [ ...state, action.category ]
  }
  return state;
}

export default reducer;
