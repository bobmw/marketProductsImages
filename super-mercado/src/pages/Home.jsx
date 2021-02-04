import React, { Component } from 'react';
import PopProducts from '../components/PopProducts';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
        <div>
        <Header />
        <PopProducts />
        </div>
    );
  }
}

export default Home;
