import ReactDOM from 'react-dom/client';
import { Provider  as  StoreProvider  } from 'react-redux';
import { store } from './app/store';
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
  < StoreProvider  store={store}>

    <App />
  </ StoreProvider >
);
