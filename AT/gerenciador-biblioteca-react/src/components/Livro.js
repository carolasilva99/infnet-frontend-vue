import React from 'react';
import { Button, Card } from 'react-bootstrap';

function dataAtualFormatada(data){
    const dia  = data.getDate().toString().padStart(2, '0');
    const mes  = (data.getMonth()+1).toString().padStart(2, '0'); //+1 pois no getMonth Janeiro começa com zero.
    const ano  = data.getFullYear();

    return dia+"/"+mes+"/"+ano;
}

const Livro = ({
    id,
    nome,
    autor,
    categoria,
    dataCadastro,
    handleExclusaoLivro
}) => {
    return (
        <Card style={{ width: '18rem' }} className="book">
            <Card.Body>
                <Card.Title className="book-title">{nome}</Card.Title>
                <div className="book-details">
                    <div>Id: {id}</div>
                    <div>Autor: {autor}</div>
                    <div>Categoria: {categoria} </div>
                    <div>Data cadastro: {dataAtualFormatada(new Date(dataCadastro))}</div>
                </div>
                <Button variant="primary">Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleExclusaoLivro(id)}>
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Livro;