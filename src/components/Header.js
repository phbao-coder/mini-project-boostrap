import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Nav activeKey="/">
            <Nav.Item>
                <Link className="nav-a" to="/">
                    Home
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-a" to="/posts">
                    Post
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-a" to="/comments">
                    Comments
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-a" to="/todos">
                    Todos
                </Link>
            </Nav.Item>
        </Nav>
    );
}

export default Header;
