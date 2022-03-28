import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AdicionaLivro from '../components/AdicionaLivro';
import ListagemLivros from '../components/ListagemLivros';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Switch>
                        <Route component={ListagemLivros} path="/" exact={true} />
                        <Route component={AdicionaLivro} path="/adicionar" />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;