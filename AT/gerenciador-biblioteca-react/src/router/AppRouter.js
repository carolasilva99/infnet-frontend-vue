import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AdicionaLivro from '../components/AdicionaLivro';
import ListagemLivros from '../components/ListagemLivros';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
    const [livros, setLivros] = useLocalStorage('livros', []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Switch>
                        <Route
                            render={(props) => (
                                <ListagemLivros {...props} livros={livros} setLivros={setLivros} />
                            )}
                            path="/"
                            exact={true}
                        />
                        <Route
                            render={(props) => (
                                <AdicionaLivro {...props} livros={livros} setLivros={setLivros} />
                            )}
                            path="/adicionar"
                        />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;