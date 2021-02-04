import React, { Component } from  'react';
import NavBar from './NavBar';


class Header extends Component {
    render() {
        return(
            <section>
              <header class="d-flex flex-column superMercado-background p-5 text-center">
              <div class="mb-5 text-shadow text-white">
              <p><strong>Tel:</strong> (00) 1234-4321</p>
              <p><strong>WhatsApp:</strong>  (00) 91234-8765</p>
              <p><strong>e-mail:</strong> superMercado@email.com</p>
              </div>
              <h1 class="font-lobster text-white mt-5 display-4">Super Mercado</h1>
              </header>
              <NavBar />
            </section>
        );
    }
}

export default Header;
