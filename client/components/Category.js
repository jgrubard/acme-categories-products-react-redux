import React from 'react';
import { connect } from 'react-redux';

const Category = (props) => {
  const { category, categories } = props;
  if(!category) {
    return null
  }
  return (
    <div>
      <button>Delete Category</button>
      <button>Add Product</button>
      <ul>
        {
          category.products.map(product => (
            <li key={product.id}>
              {product.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

const mapStateToDispatch = (state, ownProps) => {
  const category = state.categories.find(category => category.id === ownProps.match.params.id*1)
  return {
    category: category,
    categories: state. categories
  }
}

export default connect(mapStateToDispatch)(Category);
