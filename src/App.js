// libraries
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// component
import Comments from './components/Comment';
import Post from './components/Post';
import Todos from './components/Todos';
// css
import './App.css';

const tabs = ['posts', 'comments', 'todos'];

function App() {
    const [tab, setTab] = useState('posts');

    const handleChangeTab = (value) => {
        setTab(value);
    };

    return (
        <div className="container">
            <div className="button-tab">
                {tabs.map((item, index) => (
                    <Button key={index} onClick={() => handleChangeTab(item)} variant="primary">
                        {item}
                    </Button>
                ))}
            </div>
            <div className="">
                {tab === 'posts' && <Post />}
                {tab === 'comments' && <Comments />}
                {tab === 'todos' && <Todos />}
            </div>
        </div>
    );
}

export default App;
