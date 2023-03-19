import { useEffect, useState } from 'react';
import { Accordion, Pagination } from 'react-bootstrap';
import { getRequest } from '../request/instance';

function Comments() {
    const [comments, setComments] = useState([]);
    const [active, setActive] = useState(1);
    const [prev, setPrev] = useState(1);
    const [next, setNext] = useState(30);

    const pagination = (length) => {
        let items = [];
        for (let number = 1; number <= length / 30; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === active}
                    onClick={() => {
                        setActive(number);
                        setPrev(number * 30);
                        setNext(number * 30 + 30);
                    }}
                >
                    {number}
                </Pagination.Item>,
            );
        }
        return items;
    };

    useEffect(() => {
        getRequest('comments').then((res) => setComments(res.data));
    }, []);

    return (
        <div>
            <Accordion>
                {comments?.slice(prev, next).map((item, index) => (
                    <Accordion.Item key={item.id} eventKey={index}>
                        <Accordion.Header>{item.name}</Accordion.Header>
                        <Accordion.Body>
                            email: {item.email} <br />
                            comment: {item.body}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            <div className="pagination">
                <Pagination>{pagination(comments.length)}</Pagination>
            </div>
        </div>
    );
}

export default Comments;
