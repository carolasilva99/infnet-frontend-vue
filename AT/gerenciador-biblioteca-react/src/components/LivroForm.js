import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const LivroForm = (props) => {
    const [livro, setLivro] = useState({
        nome: props.livro ? props.livro.nome : '',
        autor: props.livro ? props.livro.autor : '',
        categoria: props.livro ? props.livro.categoria : '',
        dataCadastro: props.livro ? props.livro.dataCadastro : ''
    });

    const [mensagemErro, setMensagemErro] = useState('');

    const { nome, autor, categoria } = livro;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [nome, autor, categoria];
        let errorMsg = '';

        const todosOsCamposPreenchidos = values.every((campo) => {
            const valor = `${campo}`.trim();
            return valor !== '' && valor !== '0';
        });

        if (todosOsCamposPreenchidos) {
            const livro = {
                id: uuidv4(),
                nome,
                autor,
                categoria,
                dataCadastro: new Date()
            };
            props.handleOnSubmit(livro);

        }
        else {
            errorMsg = 'Preencha todos os campos!';
        }

        setMensagemErro(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setLivro((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <Container class="m-5">
            {props.livro && <h2 class="mb-5 mt-5">Editar Livro</h2>}
            {!props.livro && <h2 class="mb-5 mt-5">Adicionar Livro</h2>}
            {mensagemErro && <p className="mensagem-erro">{mensagemErro}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="nome"
                        value={nome}
                        placeholder="Nome do livro"
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="autor">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="autor"
                        value={autor}
                        placeholder="Autor"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="categoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control as="select"
                        className="input-control"
                        name="categoria"
                        value={categoria}
                        onChange={handleInputChange}>
                        <option>Selecione..</option>
                        <option value="Suspense">Suspense</option>
                        <option value="Romance">Romance</option>
                        <option value="Drama">Drama</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn pull-right">
                    Cadastrar
                </Button>
            </Form>
        </Container>
    );
};

export default LivroForm;