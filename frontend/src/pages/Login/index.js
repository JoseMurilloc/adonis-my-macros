import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import { Link } from 'react-router-dom';

import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) history.push('/dashboard');
  }, [history]);


  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('/sessions', {
        email,
        password
      });

      localStorage.setItem('token', response.data.token);

      history.push('/dashboard')
    } catch(err) {
      alert('Erro ao realizar o login, tente novamente!');
    }
  }

  return (
    <Container>
     <form onSubmit={handleLogin}>

     <h1>Login</h1>

      <input
        type="email"
        placeholder="E-mail"
        onChange={e => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        required
      />

      <button>Logar</button>
      <Link to="/register">Se cadastre aqui</Link>
     </form>
    </Container>
  );
}
