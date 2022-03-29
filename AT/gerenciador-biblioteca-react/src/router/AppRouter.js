import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AdicionaLivro from '../components/AdicionaLivro';
import ListagemLivros from '../components/ListagemLivros';
import useLocalStorage from '../hooks/useLocalStorage';
import EditarLivro from '../components/EditarLivro';

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
                        <Route
                            render={(props) => (
                                <EditarLivro {...props} livros={livros} setLivros={setLivros} />
                            )}
                            path="/editar/:id"
                        />
                        <Route component={() => <Redirect to="/" />} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;