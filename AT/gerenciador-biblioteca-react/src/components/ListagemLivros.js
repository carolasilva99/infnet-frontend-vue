import React from 'react';
import _ from 'lodash';
import Livro from './Livro';

const ListagemLivros = ({ livros, setLivros }) => {

    const handleExclusaoLivro = (id) => {
        setLivros(livros.filter((livro) => livro.id !== id));
    };

    return (
        <React.Fragment>
            <div className="book-list">
                {!_.isEmpty(livros) ? (
                    livros.map((livro) => (
                        <Livro key={livro.id} {...livro} handleExclusaoLivro={handleExclusaoLivro} />
                    ))
                ) : (
                    <p className="message">Nenhum livro cadastrado. Por favor, insira um novo livro</p>
                )}
            </div>
        </React.Fragment>
    );
};

export default ListagemLivros;