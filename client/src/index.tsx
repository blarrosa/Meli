import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import ReactDOM from "react-dom/client";
import {HelmetProvider} from 'react-helmet-async';

import "./index.module.scss";
import "./fonts/proximanova-light.woff2";
import "./fonts/proximanova-regular.woff2";
import "./fonts/proximanova-semibold.woff2";

import App from "./core/App/App";
import reportWebVitals from "./libs/reportWebVitals";

export const API_URL = "http://localhost:3001/api/";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <App/>
        </HelmetProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
