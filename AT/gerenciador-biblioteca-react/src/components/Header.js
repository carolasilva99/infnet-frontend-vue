import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Gerenciador de Biblioteca</h1>
            <hr />
            <div className="links">
                <NavLink to="/" className="link" activeClassName="active" exact>
                    Livros
                </NavLink>
                <NavLink to="/adicionar" className="link" activeClassName="active">
                    Adicionar Livro
                </NavLink>
            </div>
        </header>
    );
};

export default Header;