import React from 'react';
import { connect } from 'react-redux';

const Products = (props) => {
  const { products, categories } = props;
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
              <button>Delete</button>
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

export default connect(mapStateToProps)(Products);
