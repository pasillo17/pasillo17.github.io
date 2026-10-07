import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function mount() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    setTimeout(mount, 20);
    return;
  }
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}