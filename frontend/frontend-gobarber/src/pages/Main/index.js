import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import React, { Component } from 'react';

import { Container, Form, SubmitButton } from './styles';
import api from '../../services/api';

export default class Main extends Component {

    state = {
        repositories: [],
        newRepo: '',
        loading: false,
        username: 'EDusik'
    };

    handleInputChange = e => {
        this.setState({
            newRepo: e.target.value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({
            loading: true
        })

        const { newRepo, repositories } = this.state;
        const response = await api.get(`/repos/${this.state.username}/${newRepo}`);

        const data = {
            name: response.data.full_name
        };

        this.setState({
            repositories: [...repositories, data],
            newRepo: '',
            loading: false
        });
    }

    render() {
        const { newRepo, loading } = this.state;
        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositórios
                </h1>
                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Adicionar repositório"
                        value={newRepo}
                        onChange={this.handleInputChange}
                    />
                    <SubmitButton loading={loading}>
                        {loading ? (
                            <FaSpinner color="#FFF" size={14} />
                        ) : (
                            <FaPlus color="#FFF" size={14} />
                        )}
                    </SubmitButton>
                </Form>
            </Container>
        )
    }
}
