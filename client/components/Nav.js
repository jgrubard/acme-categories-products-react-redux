import React from 'react';
import { Link } from 'react-router-dom';

import { createCategoryThunk } from '../store';

import { connect } from 'react-redux';


const Nav = (props) => {
  const { products, categories, createCategory } = props;

  // if(!categories) {
  //   return null;
  // }

  return (
    <div>
      <ul>
        <li>
          <button onClick={(ev) => createCategory(ev)}>Add Category</button>
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
    createCategory: (ev) => {
      ev.preventDefault();
      dispatch(createCategoryThunk({ name: `Category-${Math.round(Math.random()*999)}`}));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
