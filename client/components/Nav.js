import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';


const Nav = (props) => {
  const { products, categories } = props;
  return (
    <div>
      <ul>
        <li>
          <button>Add Category</button>
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
                {category.name}: ({category.products.length}) Products
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

export default connect(mapStateToProps)(Nav);
