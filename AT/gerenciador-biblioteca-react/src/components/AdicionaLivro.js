import React from 'react';
import LivroForm from './LivroForm';

const AdicionaLivro = ({ history, livros, setLivros }) => {
    const handleOnSubmit = (livro) => {
        setLivros([livro, ...livros]);
        history.push('/');
    };

    return (
        <React.Fragment>
            <LivroForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AdicionaLivro;