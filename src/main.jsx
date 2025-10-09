import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreProvider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </StoreProvider>
  </BrowserRouter>
);
