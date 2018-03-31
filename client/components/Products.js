import React from 'react';
import { connect } from 'react-redux';
import { deleteProductThunk } from '../store'

const Products = (props) => {
  const { products, categories, deleteProduct } = props;
  if(!categories.length || !products.length) {
    return null
  }
  return (
    <div style={{'marginTop':'10px'}}>
      <h3>All Products</h3>
      <div className='category-container'>
        {
          products.map(product => (
            <div key={product.id} className='category-item'>
              <h5><b>{product.name}</b></h5>
              <div><i>{categories.find(category => category.id === product.categoryId).name}</i></div>
              <button onClick={() => deleteProduct(product)} className='btn btn-danger' style={{'marginTop': '10px'}}>Delete</button>
            </div>
          ))
        }
      </div>
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
