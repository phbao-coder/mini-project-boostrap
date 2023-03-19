// libraries
import { useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// component
import Comments from './components/Comment';
import Post from './components/Post';
import Todos from './components/Todos';
// css
import './App.css';
import { routes } from './routes';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
    return (
        <div className="container">
            <Header />
            <div>
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </div>
        </div>
    );
}

export default App;
