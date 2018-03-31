import React from 'react';
import { connect } from 'react-redux';
import { deleteProductThunk } from '../store'

const Products = (props) => {
  const { products, categories, deleteProduct } = props;
  if(!categories || !products) {
    return null
  }
  return (
    <div>
      <ul>
        {
          products.map(product => (
            <li key={product.id}>
              {product.name}
              <br />
              {categories.find(category => category.id === product.categoryId).name}
              <button onClick={() => deleteProduct(product)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product) => dispatch(deleteProductThunk(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
