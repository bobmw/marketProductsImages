import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';

import * as api from '../services/data';

class PopProducts extends Component {
  constructor() {
    super();
    this.state = {
      products: {},
    }
  }

  handleClick = ({target}) => {
    const acc = [];
    api.popProducts.map((item) => {
      if (item.title === target.name) {
        if(localStorage.getItem(`${item.title}`) !== null) {
          acc.push( localStorage.getItem(`${item.title}`) )
        }
        acc.push(JSON.stringify(item))
        localStorage.setItem(`${item.title}`, acc)
      }
    })
  }

  render() {
    return (
      <div  className="my-5">  
        <h2 className="text-center font-lobster">
          Produtos Populares
        </h2>
        <hr/>
        <section className="my-3 scrollmenu">
          { api.popProducts.map((item) => {
            return (
              <section className="marketItems shadow m-3">
              <img name="thumbnail" className="w-100" src={ item.src } />
                  <section className="text-center mt-3 lead">
                  <h4 name="title">{ item.title }</h4>
                      <p name="describe">{ item.describe }</p>
                      <p name="price"> Por: <strong className="text-danger">{ item.price }</strong></p>
                      <button type="button" name={ item.title } onClick={ this.handleClick } className="btn btn-success text-uppercase">Adicionar ao Carrinho</button>
                  </section>
            </section>
            )}
          )
        }
        </section>
      </div>
    );
  }
}

export default PopProducts;