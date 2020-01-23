import React from 'react';
import './App.css';
import Game from 'components/Game';
import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: ${props => props.theme.palette.primary.main};
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  text-align: center;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <Game />
    </StyledApp>
  );
};

export default App;
