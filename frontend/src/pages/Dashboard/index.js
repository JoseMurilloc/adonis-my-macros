import React from 'react';

import { Container, Header } from './styles';

import { AiOutlineLogout } from 'react-icons/ai';

export default function Dashboard({ history }) {

  function handleLogout() {
    localStorage.removeItem('token');

    history.push('/')
  }

  return (
    <Container>
      <Header>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>
          <AiOutlineLogout size={20}/>
        </button>
      </Header>


    </Container>
  );
}
