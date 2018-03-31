import axios from 'axios';

const GET_PRODUCTS = 'GET_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const DELETE_PRODUCTS_FROM_CATEGORY = 'DELETE_PRODUCTS_FROM_CATEGORY';

export const getProductsThunk = () => {
  return dispatch => {
    return axios.get('/api/products')
      .then(res => res.data)
      .then(products => dispatch({ type: GET_PRODUCTS, products }))
      .catch(err => console.error(err))
  }
}

export const createProductThunk = (product) => {
  return dispatch => {
    return axios.post('/api/products', product)
      .then(res => res.data)
      .then(product => dispatch({ type: CREATE_PRODUCT, product }))
      .catch(err => console.error(err))
  }
}

export const deleteProductThunk = (product) => {
  return dispatch => {
    return axios.delete(`/api/products/${product.id}`)
      .then(() => dispatch({ type: DELETE_PRODUCT, product }))
      .catch(err => console.error(err))
  }
}

export const deleteProductsFromCategoryThunk = (products, category) => {
  return dispatch => {
    products.filter(product => product.categoryId === category.id).forEach(product => {
      return axios.delete(`/api/products/${product.id}`)
        .then(() => dispatch({ type: DELETE_PRODUCTS_FROM_CATEGORY, category }))
        .catch(err => console.error(err))
    })
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {

    case GET_PRODUCTS:
      return action.products;

    case CREATE_PRODUCT:
      return [ ...state, action.product ];

    case DELETE_PRODUCT:
      return state.filter(product => product.id !== action.product.id)

    case DELETE_PRODUCTS_FROM_CATEGORY:
      return state.filter(product => product.categoryId !== action.category.id)

  }
  return state;
}

export default reducer;

