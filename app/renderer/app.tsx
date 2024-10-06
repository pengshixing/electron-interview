import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './router';

function App() {
  return <Router />;
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
