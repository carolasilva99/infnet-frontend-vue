import React from 'react';
import _ from 'lodash';
import { Container, Row, Col } from 'react-bootstrap'
import Livro from './Livro';

const ListagemLivros = ({ livros, setLivros }) => {

    const handleExclusaoLivro = (id) => {
        setLivros(livros.filter((livro) => livro.id !== id));
    };

    return (
        <Container>
            <h2 class="mt-5">Listagem</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {!_.isEmpty(livros) ? (
                        livros.map((livro) => (
                            <Col>
                                <Livro  key={livro.id} {...livro} handleExclusaoLivro={handleExclusaoLivro} />
                            </Col>
                        ))
                    ) : (
                        <p className="message">Nenhum livro cadastrado. Por favor, insira um novo livro</p>
                    )
                }
            </Row>
        </Container>
    );
};

export default ListagemLivros;