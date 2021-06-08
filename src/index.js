
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss'
import App from './components/App';
//import reportWebVitals from './reportWebVitals';  -->se usa para medir rendimiento web

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')   //BUSCA EL ID EN EL HTML
);

