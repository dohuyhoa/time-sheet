// Import React and ReactDOM
// npm i zmp-framework
// npm i zmp-react
// npm install zmp-sdk
import React from 'react';
import { createRoot } from 'react-dom/client';

import 'zmp-ui/zaui.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import './css/app.css';

// Import App Component
import App from './components/app.jsx';
import appConfig from '../app-config.json';

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

// Mount React App
const root = createRoot(document.getElementById('app'));
root.render(React.createElement(App));