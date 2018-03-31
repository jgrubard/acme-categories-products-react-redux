import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createCategoryThunk } from '../store';

const Nav = (props) => {
  const { products, categories, createCategory } = props;
  const path = props.location.pathname;
  return (
    <div>
      <button onClick={createCategory} className='btn btn-primary'>Add Category</button>
      <ul className='nav'>
        <li className='nav-item'>
          {
            path === '/' ? (
              <span className='nav-link disabled'>
                Home
              </span>
            ) : (
              <Link to='/' className='nav-link'>
                Home
              </Link>
            )
          }
        </li>
        <li className='nav-item'>
          {
            path === '/products' ? (
              <span className='nav-link disabled'>
                All Products: <span className='badge badge-secondary'>{products.length}</span>
              </span>
            ) : (
              <Link to='/products' className='nav-link'>
                All Products: <span className='badge badge-primary'>{products.length}</span>
              </Link>
            )
          }
        </li>
      </ul>
      <div className='category-container'>
        {
          categories.map(category => (
            <div key={category.id} className='category-item'>
              <Link to={`/categories/${category.id}`}>
                <h5>{category.name}</h5>
              </Link>
              <span className='badge badge-warning'>
                {
                  products.filter(product => product.categoryId === category.id).length
                }
              </span>
              &nbsp;Products
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
    createCategory: () => {
      dispatch(createCategoryThunk({ name: `Category-${Math.round(Math.random()*999)}`}));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
