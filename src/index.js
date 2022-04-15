import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';

const container = document.querySelector('#root')

render(
  <StrictMode>
    <App />
  </StrictMode>,
  container
);


