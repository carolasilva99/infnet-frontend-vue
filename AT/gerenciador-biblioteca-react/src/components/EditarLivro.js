import React from 'react';
import LivroForm from './LivroForm';
import { useParams } from 'react-router-dom';

const EditarLivro = ({ history, livros, setLivros }) => {
    const { id } = useParams();
    const livroParaEditar = livros.find((livro) => livro.id === id);

    const handleOnSubmit = (livro) => {
        const livrosFiltrados = livros.filter((livro) => livro.id !== id);
        setLivros([livro, ...livrosFiltrados]);
        history.push('/');
    };

    return (
        <div>
            <LivroForm livro={livroParaEditar} handleOnSubmit={handleOnSubmit} />
        </div>
    );
};

export default EditarLivro;