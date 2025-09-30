import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider  as  StoreProvider  } from 'react-redux';
import { store } from './app/store';
import "./index.css";//not used 
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById("root")).render(
   <BrowserRouter>
    <StoreProvider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
    </StoreProvider>
    </BrowserRouter>
);
