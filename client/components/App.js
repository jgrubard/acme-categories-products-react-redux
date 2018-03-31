import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProductsThunk, getCategoriesThunk } from '../store'

import Home from './Home';
import Nav from './Nav';
import Products from './Products';
import Category from './Category';

class App extends Component {

  componentDidMount() {
    this.props.loadProducts();
    this.props.loadCategories();
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <h1>ACME</h1>
          <h2>Categories and Products</h2>
          <Route component={Nav} />
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/categories/:id' component={Category} />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => dispatch(getProductsThunk()),
    loadCategories: () => dispatch(getCategoriesThunk())
  }
}

export default connect(null, mapDispatchToProps)(App);
