import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Elem } from './funcComp/Massage'
import { App } from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
root.render(<Elem />)


