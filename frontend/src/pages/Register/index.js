import React, { useState } from 'react';
import api from '../../services/api';

import { Container, Form   } from './styles';

import { Link } from 'react-router-dom';

export default function Register({ history }) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmitNewUser(e) {
    e.preventDefault();

    await api.post('/users', {
      username,
      email,
      password,
    });

    alert('Cadastro realizado com sucesso');

    history.push('/');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmitNewUser}>
        <h1>Resgister</h1>

        <input
          type="text"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button>Salvar</button>
        <Link to="/">Já tem uma conta? Clique aqui</Link>
      </Form>
    </Container>
  );
}
