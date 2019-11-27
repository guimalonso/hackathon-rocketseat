import React from 'react';

import { Container } from './styles';

export default function StartPage({ history }) {
  return (
    <Container>
      <button onClick={() => history.push('/quiz')}>Começar</button>
    </Container>
  );
}
