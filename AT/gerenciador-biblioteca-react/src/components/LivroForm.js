import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const LivroForm = (props) => {
    const [livro, setLivro] = useState({
        nome: props.livro ? props.livro.livroname : '',
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

        console.log(values);

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

        switch (name) {
            case 'quantity':
                if (value === '' || parseInt(value) === +value) {
                    setLivro((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            case 'price':
                if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    setLivro((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setLivro((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };

    return (
        <div className="main-form">
            {mensagemErro && <p className="errorMsg">{mensagemErro}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="nome"
                        value={nome}
                        placeholder="Nome do livro"
                        onChange={handleInputChange}
                    />
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
                        <option value="Suspense">Suspense</option>
                        <option value="Romance">Romance</option>
                        <option value="Drama">Drama</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn">
                    Cadastrar
                </Button>
            </Form>
        </div>
    );
};

export default LivroForm;