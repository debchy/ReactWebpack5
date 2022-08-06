import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from "./App";
import './css/main.css'
import './css/bootstrap.css'

const root =createRoot(document.getElementById('root'))
root.render( <App/>,  );