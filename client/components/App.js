import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProductsThunk, getCategoriesThunk } from '../store'

class App extends Component {

  componentDidMount() {
    this.props.loadProducts();
    this.props.loadCategories();
  }

  render() {
    return (
      <Router>
        <div>
          <h1>ACME</h1>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => dispatch(getProductsThunk()),
    loadCategories: () => dispatch(getCategoriesThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
