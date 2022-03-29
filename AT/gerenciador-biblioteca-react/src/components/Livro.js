import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

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
    const history = useHistory();
    
    return (
        <Card className="livro mb-3 mt-5">
            <Card.Body>
                <Card.Title className="nome-livro">{nome}</Card.Title>
                <div className="livro-detalhes">
                    <div>Id: {id}</div>
                    <div>Autor: {autor}</div>
                    <div>Categoria: {categoria} </div>
                    <div>Data cadastro: {dataAtualFormatada(new Date(dataCadastro))}</div>
                </div>
                <div className="botoes-livro mt-3">
                    <Button variant="primary" onClick={() => history.push(`/editar/${id}`)}>
                        Editar
                    </Button>{' '}
                    <Button variant="danger" onClick={() => handleExclusaoLivro(id)}>
                        Excluir
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Livro;