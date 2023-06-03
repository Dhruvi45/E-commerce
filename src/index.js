import React from "react";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { createRoot } from 'react-dom/client';
// Call make Server
makeServer();


const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);