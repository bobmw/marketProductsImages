import React, { Component } from 'react';

class ButtonAddCartx extends Component {
  handleClick = ({target}) => {
    localStorage.setItem(JSON.stringify(, target))
  }
  render() {
    return (
        <button type="button" onClick={ this.handleClick } className="btn btn-success text-uppercase">Adicionar ao Carrinho</button>
    );
  }
}

export default ButtonAddCartx;