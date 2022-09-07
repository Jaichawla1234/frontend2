import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import './main.scss';
import { Provider } from 'react-redux';
import store from './components/store/index.js';
import { positions, transitions, Provider as AlertProvider} from 'react-alert';
import alertTemplate from 'react-alert-template-basic';

const options = {
  timeout : 5000,
  positions: positions.BOTTOM_CENTER,
  transitions : transitions.SCALE
}


const root =document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={alertTemplate} {...options} >
    <App />
    </AlertProvider>
    
  </Provider>
  ,
  root
    
);