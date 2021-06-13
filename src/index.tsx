import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from "./pages/MainPage";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainPage/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
