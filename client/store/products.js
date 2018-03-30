import axios from 'axios';

const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProductsThunk = () => {
  return dispatch => {
    return axios.get('/api/products')
      .then(res => res.data)
      .then(products => dispatch({ type: GET_PRODUCTS, products }))
      .catch(err => console.error(err))
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {

    case GET_PRODUCTS:
      return action.products;

  }
  return state;
}

export default reducer;

