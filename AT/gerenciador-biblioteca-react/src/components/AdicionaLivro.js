import React from 'react';
import LivroForm from './LivroForm';

const AdicionaLivro = () => {
    const handleOnSubmit = (livro) => {
        console.log(livro);
    };

    return (
        <React.Fragment>
            <LivroForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AdicionaLivro;