import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {
  render() {
      return(
          <Navbar className="bg-warning" expand="">
              <Navbar.Brand href="#">SuperMercado</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link className="mx-4" href="#">Promoções</Nav.Link>
                    <Nav.Link className="mx-4" href="#">Mais Vendidos</Nav.Link>
                    <Nav.Link className="mx-4" href="#">Horti-Fruti</Nav.Link>
                    <Nav.Link className="mx-4" href="#">Padaria</Nav.Link>
                    <Nav.Link className="mx-4" href="#">Açougue</Nav.Link>
                    <Nav.Link className="mx-4" href="#">Cosméticos</Nav.Link>
                    <Nav.Link className="mx-4" href="#">Limpeza</Nav.Link>
                    <Nav.Link className="mx-4" href="#">Diversos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
      );
  }
}

export default NavBar;
