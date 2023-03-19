// css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

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
