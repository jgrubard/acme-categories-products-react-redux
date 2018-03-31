import React from 'react';
import { connect } from 'react-redux';
import { createProductThunk } from '../store'

const faker = require('faker');

const Category = (props) => {
  const { category, categories, products, createProduct } = props;
  if(!category) {
    return null
  }
  return (
    <div>
      <h3>{category.name}</h3>
      <button>Delete Category</button>
      <button onClick={() => createProduct(category.id)}>Add Product</button>
      <ul>
        {
          products.filter(product => product.categoryId === category.id).map(product => (
            <li key={product.id}>
              {product.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const category = state.categories.find(category => category.id === ownProps.match.params.id*1)
  return {
    category: category,
    products: state.products,
    categories: state. categories
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    createProduct: (categoryId) => dispatch(createProductThunk({ name: faker.commerce.productName(), categoryId }))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Category);
