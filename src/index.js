//require('file-loader?name=[name].[ext]!./index.html');
import "@fontsource/inter";
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
createRoot(document.getElementById('root')).render(<App />)