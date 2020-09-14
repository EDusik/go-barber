import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import React from 'react';

import { Container, Form, SubmitButton } from './styles';

function Main() {
    return (
        <Container>
            <h1>
                <FaGithubAlt />
                Repositórios
            </h1>
            <Form onSumit={() => {}}>
                <input
                    type="text"
                    placeholder="Adicionar repositório"
                />
                <SubmitButton>
                    <FaPlus color="#FFF" size={14} />
                </SubmitButton>
            </Form>
        </Container>
    )
}

export default Main;
