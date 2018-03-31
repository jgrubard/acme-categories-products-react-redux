import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createCategoryThunk } from '../store';

const Nav = (props) => {
  const { products, categories, createCategory } = props;
  return (
    <div>
      <ul>
        <li>
          <button onClick={createCategory}>Add Category</button>
        </li>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/products'>
            All Products: ({products.length})
          </Link>
        </li>
        {
          categories.map(category => (
            <li key={category.id}>
              <Link to={`/categories/${category.id}`}>
                {category.name}:
                ({
                  products.filter(product => product.categoryId === category.id).length
                })
                Products
              </Link>
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
    createCategory: () => {
      dispatch(createCategoryThunk({ name: `Category-${Math.round(Math.random()*999)}`}));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
